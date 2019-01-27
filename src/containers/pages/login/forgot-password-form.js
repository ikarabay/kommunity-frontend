import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { FORGOT_PASSWORD } from '@/api/apollo-requests';
import ForgotPasswordForm from '@/components/pages/login/forgot-password-form';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(graphql(FORGOT_PASSWORD, { name: 'forgotPassword' })(ForgotPasswordForm));
