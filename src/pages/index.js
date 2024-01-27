import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>Welcome to the Blog...</p>
      <p>Explore the blog to gain knowledge</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
