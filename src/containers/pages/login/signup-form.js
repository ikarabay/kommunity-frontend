import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { userLoggedIn } from '@/state/actions/user';
import { SIGNUP } from '@/api/apollo-requests';
import SignupForm from '@/components/pages/login/signup-form';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  userLoggedIn: () => dispatch(userLoggedIn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(graphql(SIGNUP, { name: 'signup' })(SignupForm));
