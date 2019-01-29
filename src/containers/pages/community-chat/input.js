import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import ChatInput from '@/components/pages/community-chat/input';
import { SEND_MESSAGE } from '@/api/apollo-requests';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
  graphql(SEND_MESSAGE, {
    name: 'sendMessage',
  }),
)(ChatInput);
