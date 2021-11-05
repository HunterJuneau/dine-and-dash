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

  const handleClickUserOrders = () => {
    history.push(`/user/order/${userInfo.id}`);
  };

  // console.warn(userOrders);
  return (
    <div>
      <Card>
        <CardTitle tag='h3'>{userInfo.firstName}</CardTitle>
        <CardTitle tag='h3'>{userInfo.lastName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'> Current Email Address {userInfo.contactEmail}</CardTitle>
            <CardText>Member Since {userInfo.customerCreated}</CardText>
            <CardText>status {userInfo.status}</CardText>
          </CardBody>
          <Button onClick={() => handleClick()}>See Details</Button>
          <Button onClick={() => handleClickUserOrders()}>See Orders</Button>

      </Card>
    </div>
  );
}

UserCard.propTypes = {
  userInfo: PropTypes.any
};

export default UserCard;
