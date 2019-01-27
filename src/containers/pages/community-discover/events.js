import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import CommunityEvents from '@/components/pages/community-discover/events';
import { FETCH_COMMUNITY_EVENTS } from '@/api/apollo-requests';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(FETCH_COMMUNITY_EVENTS, {
    name: 'getCommunityEventsRequest',
    options: props => ({
      variables: {
        communityUuid: props.communityUuid,
      },
    }),
  }),
)(CommunityEvents);
