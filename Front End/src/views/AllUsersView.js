import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/users/UserCard';
// import { getUserOrders } from '../helpers/data/UserData';

function AllUsersView({ users }) {
  return (
    <div className='userContainer'>
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
  users: PropTypes.any
};

export default AllUsersView;
