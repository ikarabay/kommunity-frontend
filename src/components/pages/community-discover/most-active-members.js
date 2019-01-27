import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '@/components/ui';

const CommunityMostActiveMembers = ({ getMostActiveMembersRequest }) => {
  const { getCommunityMostActiveMembers, loading, error } = getMostActiveMembersRequest;

  if (error) {
    return <p className="text-red">Error occured while fetching most active members.</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (!getCommunityMostActiveMembers.length) {
    return <p>No active users found, do you want to invite people?</p>;
  }

  return (
    <div>
      {getCommunityMostActiveMembers.map(({ firstName, lastName, CommunityUser, uuid }) => (
        <p key={uuid} className="py-4">
          {firstName} {lastName} (reputation score: {CommunityUser.reputation})
        </p>
      ))}
    </div>
  );
};

CommunityMostActiveMembers.propTypes = {
  getMostActiveMembersRequest: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool,
    mostActiveMembers: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUploadUuid: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        lastSeenAt: PropTypes.string,
        location: PropTypes.string,
        uuid: PropTypes.string,
      }),
    ),
  }),
};

export default CommunityMostActiveMembers;
