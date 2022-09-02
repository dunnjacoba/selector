import React from "react";
import Layout from "../components/styles/layout";
import { Nav } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <p>Need help selecting what to eat?</p>
      <Nav.Item>
        <Nav.Link href="/selection" className="btn-dark">
          Click Here!
        </Nav.Link>
      </Nav.Item>
    </Layout>
  );
}
