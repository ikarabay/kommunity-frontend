import React from 'react';
import PropTypes from 'prop-types';
import CommunityResults from './community-results';
import UserResults from './user-results';

const SearchResults = ({ searchUsersRequest, searchCommunitiesRequest }) => (
  <div className="pin-x absolute mt-2 bg-white p-4 rounded-4 shadow-md w-full">
    <UserResults
      loading={searchUsersRequest.loading}
      error={searchUsersRequest.error}
      users={searchUsersRequest.searchUsers}
    />
    <CommunityResults
      loading={searchCommunitiesRequest.loading}
      error={searchCommunitiesRequest.error}
      communities={searchCommunitiesRequest.searchCommunities}
    />
  </div>
);

SearchResults.propTypes = {
  searchCommunitiesRequest: PropTypes.object,
  searchUsersRequest: PropTypes.object,
};

export default SearchResults;
