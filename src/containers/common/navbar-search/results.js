import { compose, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { SEARCH_COMMUNITIES, SEARCH_USERS } from '@/api/apollo-requests';
import NBSearchResult from '@/components/common/navbar-search/results';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

const searchOptions = ({ query }) => ({
  skip: !query || !query.length,
  variables: {
    query,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  compose(
    graphql(SEARCH_COMMUNITIES, {
      name: 'searchCommunitiesRequest',
      options: searchOptions,
    }),
    graphql(SEARCH_USERS, {
      name: 'searchUsersRequest',
      options: searchOptions,
    }),
  )(NBSearchResult),
);
