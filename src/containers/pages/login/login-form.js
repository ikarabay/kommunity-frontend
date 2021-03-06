import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { userLoggedIn } from '@/state/actions/user';
import { LOGIN } from '@/api/apollo-requests';
import LoginForm from '@/components/pages/login/login-form';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  userLoggedIn: () => dispatch(userLoggedIn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(graphql(LOGIN, { name: 'login' })(LoginForm));
