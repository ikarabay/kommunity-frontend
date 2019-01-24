import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import Header from '@/components/common/header';
import { LOGOUT } from '@/api/apollo-requests';
import { userLoggedOut } from '@/state/actions/user';

const mapStateToProps = state => ({
  isLoggedIn: state.app.user.isLoggedIn,
});
const mapDispatchToProps = dispatch => ({
  logout: async logoutMutation => {
    await logoutMutation();
    dispatch(userLoggedOut());
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(LOGOUT, { name: 'logoutMutation' }),
)(Header);
