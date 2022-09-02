import React from "react";
import Layout from "../components/styles/layout";
import Card from "react-bootstrap/Card";

export default function Restaurant() {
  const rest = {
    name: "McDonald's",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/180px-McDonald%27s_Golden_Arches.svg.png",
    site: "https://www.mcdonalds.com/us/en-us.html",
  };
  return (
    <Layout>
      <div>Selection</div>
      <Card style={{ color: "black", padding: "3px" }}>
        <Card.Img variant="top" src={rest.image} alt="Restaurant Logo" />
        <Card.Body>
          <Card.Title>{rest.name}</Card.Title>
        </Card.Body>
      </Card>
    </Layout>
  );
}
