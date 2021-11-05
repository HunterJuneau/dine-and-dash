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

function SingleUser() {
  const [oneSingleUser, setOneSingleUser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getSingleUser(id).then((response) => setOneSingleUser(response.data));
    }
  }, []);

  return (
    <div>
      <Card>
        <CardTitle tag='h3'>{oneSingleUser.firstName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{oneSingleUser.lastName}</CardTitle>
            <CardText>{oneSingleUser.customerCreated}</CardText>
            <CardText>Email: {oneSingleUser.contactEmail}</CardText>
            <CardText>Satus: {oneSingleUser.status}</CardText>
          </CardBody>
          <Button onClick={() => history.push('/user')}>Back</Button>
      </Card>
    </div>
  );
}

export default SingleUser;
