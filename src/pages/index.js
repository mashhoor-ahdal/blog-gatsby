import * as React from "react";
import Layout from "../components/layout";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <Home heading="Explore the World" 
      contents="This is paragraph"/>
      
      
    </Layout>
  );
};

export default IndexPage;

