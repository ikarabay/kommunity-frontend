import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { SUBSCRIBE_TO_MAIL_LIST } from '@/api/apollo-requests';
import SignupBeta from '@/components/pages/signup-for-beta';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(
  graphql(SUBSCRIBE_TO_MAIL_LIST, {
    name: 'subscribeToMailList',
  })(SignupBeta),
);
