import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { LOGIN } from '@/components/pages/requests';
import LoginForm from '@/components/pages/login/login-form';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(graphql(LOGIN, { name: 'login' })(LoginForm));
