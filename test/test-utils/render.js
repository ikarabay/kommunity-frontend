import { ApolloProvider } from 'react-apollo';
import { createMemoryHistory } from 'history';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { Provider } from 'react-redux';
import React from 'react';
import { mount as mountWrapper, shallow as shallowWrapper } from 'enzyme';

import client from '@/api/apollo';
import setupStore from '@/state/store';

const history = createMemoryHistory();
const store = setupStore(history, {});

export default function render(method, children) {
  return method(
    <Provider store={store}>
      <MemoryRouter>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </MemoryRouter>
    </Provider>,
  );
}

export const mount = children => render(mountWrapper, children);
export const shallow = children => render(shallowWrapper, children);
