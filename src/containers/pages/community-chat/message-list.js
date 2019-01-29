import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import MessageList from '@/components/pages/community-chat/message-list';
import { FETCH_MESSAGES } from '@/api/apollo-requests';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
  graphql(FETCH_MESSAGES, {
    name: 'messages',
    options: props => ({
      variables: {
        channelUuid: props.channelUuid,
      },
    }),
  }),
)(MessageList);
