import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { getSingleUser } from '../helpers/data/UserData';

function UserProfileView({ fbUser }) {
  const [oneSingleUser, setOneSingleUser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getSingleUser(fbUser ? fbUser.uid : id).then((response) => setOneSingleUser(response.data));
    }
  }, []);

  const handleClickUserOrders = () => {
    history.push(`/user/order/${fbUser ? fbUser.uid : id}`);
  };

  return (
    <div>
      <Card>
        <br />
        <CardTitle tag='h3'>{oneSingleUser.firstName}</CardTitle>
        <CardTitle tag='h3'>{oneSingleUser.lastName}</CardTitle>
          <CardBody>
            <div>
            <CardText> Member Since: {oneSingleUser.customerCreated}</CardText>
            </div>
            <CardText>Email: {oneSingleUser.contactEmail}</CardText>
          </CardBody>
          <Button onClick={() => handleClickUserOrders()}>View Your Orders</Button>
          <br />
          <Button onClick={() => history.push('/user')}>Back to Users</Button>
      </Card>
    </div>
  );
}

UserProfileView.propTypes = {
  fbUser: PropTypes.any
};

export default UserProfileView;
