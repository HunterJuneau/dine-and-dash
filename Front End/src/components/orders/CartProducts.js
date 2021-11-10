// import React, { useEffect, useState } from 'react';
// // import PropTypes from 'prop-types';

// import {
//   Card,
//   CardText,
//   // CardImg,
//   CardBody,
//   CardTitle,
//   Button
// } from 'reactstrap';
// import { getAllProductOrderById } from '../../helpers/data/OrderData';


// function CartCard({}) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProductOrderById().then(setProducts);
//   }, []);

//   return (
//     <div>
//         {products.map((item) => (

//         ))}
//       <Card>
//         <CardTitle tag='h3'>{}</CardTitle>
//           <CardBody>
//             <CardTitle tag='h6'>{}</CardTitle>
//             <CardText>{}</CardText>
//             <CardText>${}</CardText>
//             <CardText>Product Quantity: {.productQuantity}</CardText>
//             <CardText>{}</CardText>
//           </CardBody>
//           <Button onClick={}></Button>
//       </Card>
//     </div>
//   );
// }



// export default CartCard;