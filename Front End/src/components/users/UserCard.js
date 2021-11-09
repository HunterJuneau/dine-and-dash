import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
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
      <Card bottom>
        <CardTitle tag='h3'>{userInfo.firstName}</CardTitle>
        <CardTitle tag='h3'>{userInfo.lastName}</CardTitle>
          <CardBody>
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
