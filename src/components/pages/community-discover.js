import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/common/header';
import Footer from '@/containers/common/footer';
import CommunityEvents from '@/containers/pages/community-discover/events';
import CommunityMostActiveMembers from '@/containers/pages/community-discover/most-active-members';

const CommunityDiscover = ({
  match: {
    params: { communityUuid },
  },
}) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-gray-gradient">
        <div className="container">
          <Header />
          <div>
            <Link to={`/community/${communityUuid}/settings`}>Settings</Link>{' '}
            <Link to={`/community/${communityUuid}/members`}>Members</Link>
          </div>
          <div className="flex flex-wrap">
            <div className="w-6/12">
              <h1>Latest Messages</h1>
              <div>...</div>
            </div>
            <div className="w-6/12">
              <h1>Most Active Members</h1>
              <CommunityMostActiveMembers communityUuid={communityUuid} />
            </div>
            <div className="w-6/12">
              <h1>Online Members</h1>
              <div>...</div>
            </div>
            <div className="w-6/12">
              <h1>Events</h1>
              <CommunityEvents communityUuid={communityUuid} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

CommunityDiscover.propTypes = {
  match: PropTypes.object,
};

export default CommunityDiscover;
