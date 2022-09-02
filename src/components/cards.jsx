import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards(props) {
  return (
    <Card style={{ color: "black", padding: "3px" }}>
      <Card.Img variant="top" src={props.rest.image} alt="Restaurant Logo" />
      <Card.Body>
        <Card.Title>{props.rest.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
