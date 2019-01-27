import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import Footer from '@/components/common/footer';
import { SUBSCRIBE_TO_MAIL_LIST } from '@/api/apollo-requests';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(SUBSCRIBE_TO_MAIL_LIST, { name: 'subscribeToMailList' }),
)(Footer);
