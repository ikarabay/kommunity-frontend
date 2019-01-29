import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import CommunityPosts from '@/components/pages/community-discover/posts';
import { FETCH_COMMUNITY_CONVERSATION_POSTS } from '@/api/apollo-requests';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(FETCH_COMMUNITY_CONVERSATION_POSTS, {
    name: 'getCommunityConversationPostsRequest',
    options: props => ({
      variables: {
        communityUuid: props.communityUuid,
      },
    }),
  }),
)(CommunityPosts);
