import React from "react";
import Layout from "../components/styles/layout";
import Cards from "../components/cards.jsx";

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
      <Cards rest={rest} />
    </Layout>
  );
}
