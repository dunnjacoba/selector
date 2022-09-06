import React from "react";
import Layout from "../components/styles/layout";
import Cards from "../components/cards.jsx";
import { CardGroup } from "react-bootstrap";
import restaurant from "../components/restaurantData";

export default function Restaurant() {
  const restSelector = () => {
    let restSelected = Math.floor(Math.random() * 3);
    return restSelected;
  };

  return (
    <Layout>
      <div>Selection</div>
      <CardGroup className="p-3 m-2">
        <Cards rest={restaurant[restSelector()]} />
      </CardGroup>
    </Layout>
  );
}
