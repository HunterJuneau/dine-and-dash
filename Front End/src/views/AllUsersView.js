import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/users/UserCard';

function AllUsersView({ users }) {
  return (
    <div>
      {users.map((userInfo) => (
        <UserCard
          key={userInfo.id}
          {...userInfo}
        />
      ))}
    </div>
  );
}

AllUsersView.propTypes = {
  users: PropTypes.array
};

export default AllUsersView;
