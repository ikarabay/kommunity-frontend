import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '@/components/ui';
import NBSearchResultItem from './result-item';
import testAvatar from '@/components/ui/test-avatar';

const MAX_SHOWN_COMMUNITIES = 4;

const CommunityResults = ({ error, loading, communities }) => {
  if (loading) {
    return (
      <div className="text-center my-3">
        <Loading />
      </div>
    );
  }

  if (error || !communities.length) {
    return (
      <p className="flex items-center justify-center py-2 select-none">
        No communities found, do you want to create a new community?
      </p>
    );
  }

  return (
    <ul className="list-reset">
      <li className="flex items-center justify-start px-2 cursor-default select-none">
        <p className="leading-base text-blueyGrey text-xs">COMMUNITIES</p>
      </li>
      {communities.slice(0, MAX_SHOWN_COMMUNITIES).map((option, index) => (
        <NBSearchResultItem
          labels={{
            firstLine: option.name,
            secondLine: option.tagline,
          }}
          imgUrl={testAvatar}
          type="communities"
          key={index.toString()}
          onClick={() => {}}
        />
      ))}
    </ul>
  );
};

CommunityResults.propTypes = {
  communities: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default CommunityResults;
