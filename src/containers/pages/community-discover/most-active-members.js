import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import CommunityMostActiveMembers from '@/components/pages/community-discover/most-active-members';
import { FETCH_COMMUNITY_MOST_ACTIVE_USERS } from '@/api/apollo-requests';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(FETCH_COMMUNITY_MOST_ACTIVE_USERS, {
    name: 'getMostActiveMembersRequest',
    options: props => ({
      variables: {
        communityUuid: props.communityUuid,
      },
    }),
  }),
)(CommunityMostActiveMembers);
