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
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  userInfo: PropTypes.any
};

export default UserCard;
