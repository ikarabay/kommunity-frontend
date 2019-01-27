import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '@/components/ui';

const MostActiveMembers = ({ communityUuid, mostActiveMembersRequest }) => {
  const { mostActiveMembers, loading, error } = mostActiveMembersRequest;
  if (error) {
    return <p className="text-red">Error occured while fetching most active members.</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-wrap">
      {mostActiveMembers.map(({ firstName, lastName, lastSeenAt, location, uuid }) => (
        <div key={uuid} className="border-2 text-center p-4 w-112">
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{location}</p>
          <p>{lastSeenAt}</p>
          <p>{communityUuid}</p>
        </div>
      ))}
    </div>
  );
};
MostActiveMembers.propTypes = {
  communityUuid: PropTypes.string,
  mostActiveMembersRequest: PropTypes.shape({
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

export default MostActiveMembers;
