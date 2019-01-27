import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '@/components/ui';
import NBSearchResultItem from './result-item';
import testAvatar from '@/components/ui/test-avatar';

const MAX_SHOWN_USERS = 3;

const UserResults = ({ error, loading, users }) => {
  if (loading) {
    return (
      <div className="text-center my-3">
        <Loading />
      </div>
    );
  }

  if (error || !users.length) {
    return <p className="flex items-center justify-center py-2 select-none">No users found.</p>;
  }

  return (
    <ul className="list-reset">
      <li className="flex items-center justify-start px-2 cursor-default select-none">
        <p className="leading-base text-blueyGrey text-xs">USERS</p>
      </li>
      {users.slice(0, MAX_SHOWN_USERS).map((option, index) => (
        <NBSearchResultItem
          labels={{
            firstLine: `${option.firstName} ${option.lastName}`,
            secondLine: option.username ? `@${option.username}` : option.email,
          }}
          imgUrl={testAvatar}
          type="users"
          key={index.toString()}
          onClick={() => {}}
        />
      ))}
    </ul>
  );
};

UserResults.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  users: PropTypes.array,
};

export default UserResults;
