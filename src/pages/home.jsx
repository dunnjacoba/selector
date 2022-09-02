import React from "react";
import Layout from "../components/styles/layout";
import Restaurants from "../components/restaurantData";
import Button from "react-bootstrap/Button";

export default function Home() {
  function selectRestaurant() {
    console.log(Restaurants());
  }

  return (
    <Layout>
      <p>Need help selecting what to eat?</p>
      <Button
        className="btn-dark"
        variant="outline-secondary"
        type="button"
        onClick={selectRestaurant}
      >
        Click Here!
      </Button>
    </Layout>
  );
}
