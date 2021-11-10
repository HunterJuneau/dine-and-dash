import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

function UserCard({ ...userInfo }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/user/${userInfo.id}`);
  };

  // console.warn(userInfo.id);
  // console.warn(userOrders);
  return (
    <div>
      <Card>
      <br />
        <CardTitle tag='h3'>{userInfo.firstName}</CardTitle>
        <CardTitle tag='h3'>{userInfo.lastName}</CardTitle>
          <CardBody>
          <br />
          <CardText>Status: {userInfo.status ? 'Active' : 'Inactive'}</CardText>
          </CardBody>
          <Button onClick={() => handleClick()}>View Your Profile</Button>
          <br />
      </Card>
      <div></div>
    </div>
  );
}

UserCard.propTypes = {
  userInfo: PropTypes.any
};

export default UserCard;
