import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { RESET_PASSWORD } from '@/api/apollo-requests';
import ResetPasswordForm from '@/components/pages/login/reset-password-form';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(graphql(RESET_PASSWORD, { name: 'resetPassword' })(ResetPasswordForm));
