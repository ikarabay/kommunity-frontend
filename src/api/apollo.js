/* global window */
import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { BACKEND_URL, BACKEND_WS_URL } from '@/constants';

import { isServer } from '../utils';

// Create an http link:
const httpLink = new HttpLink({
  // required for auth cookies
  credentials: 'include',
  fetch,
  uri: BACKEND_URL,
});

// Create a WebSocket link:
let wsLink;
if (process.env.BUILD_TARGET === 'client') {
  wsLink = new WebSocketLink({
    options: {
      reconnect: true,
    },
    uri: BACKEND_WS_URL,
  });
}

// split based on operation type
const link =
  process.env.BUILD_TARGET === 'client'
    ? split(
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
      )
    : httpLink;

export default new ApolloClient({
  cache: !isServer()
    ? // eslint-disable-next-line no-underscore-dangle
      new InMemoryCache().restore(window.__APOLLO_STATE__)
    : new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  link,
  ssrMode: isServer(),
});
