import React from 'react';
import PropTypes from 'prop-types';
import { FETCH_USER_DATA } from '@/api/apollo-requests';

import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const mapStateToProps = state => ({
  isLoggedIn: state.app.user.isLoggedIn,
});
const mapActionsToProps = {};

export const withAuthUser = WrappedComponent => {
  const WithAuthUser = ({ userData, ...rest }) => (
    <WrappedComponent user={userData && userData.getLoggedInUserDetails} {...rest} />
  );
  WithAuthUser.propTypes = {
    userData: PropTypes.object,
  };
  WithAuthUser.displayName = `WithAuthUser(${getDisplayName(WrappedComponent)})`;

  const connectedWithAuthUser = compose(
    graphql(FETCH_USER_DATA, {
      name: 'userData',
    }),
    connect(
      mapStateToProps,
      mapActionsToProps,
    ),
  )(WithAuthUser);

  return connectedWithAuthUser;
};
