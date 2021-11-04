import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { getSingleUser } from '../helpers/data/UserData';

function UserProfileView() {
  const [singleUser, setSingleUser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleUser(id).then((response) => setSingleUser(response.data));
  }, []);

  console.warn('Help');

  return (
    <div>
      <Card>
        <CardTitle tag='h3'>{singleUser.firstName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{singleUser.lastName}</CardTitle>
            <CardText>{singleUser.customerCreated}</CardText>
            <CardText>Email:{singleUser.contactEmail}</CardText>
            <CardText>{singleUser.status}</CardText>
          </CardBody>
          <Button onClick={() => history.push('/user')}>Back</Button>
      </Card>
    </div>
  );
}

export default UserProfileView;
