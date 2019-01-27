import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import MostActiveMembers from '@/components/common/most-active-members';
import { FETCH_MOST_ACTIVE_USERS } from '@/api/apollo-requests';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(FETCH_MOST_ACTIVE_USERS, {
    name: 'mostActiveMembersRequest',
    options: props => ({
      variables: {
        communityUuid: props.communityUuid,
      },
    }),
  }),
)(MostActiveMembers);
