import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import CommunityChat from '@/components/pages/community-chat';
import { FETCH_CHANNELS } from '@/api/apollo-requests';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
  graphql(FETCH_CHANNELS, {
    name: 'channels',
    options: props => ({
      variables: {
        communityUuid: props.match.params.communityUuid,
      },
    }),
  }),
)(CommunityChat);
