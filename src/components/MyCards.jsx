import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags'

function MyCards({img,name,dsc,text,BgColor}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {dsc}
      </Card.Text>
      <Tags bg={BgColor} te={text}/>
    </Card.Body>
  </Card>
);
}

export default MyCards