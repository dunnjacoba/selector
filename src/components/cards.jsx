import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards(props) {
  return (
    <Card style={{ background: "black", color: "white", padding: "3px" }}>
      <Card.Img variant="top" src={props.rest.image} alt="Restaurant Logo" />
      <Card.Body>
        <Card.Link target="_blank" href={props.rest.site}>
          {props.rest.name}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
