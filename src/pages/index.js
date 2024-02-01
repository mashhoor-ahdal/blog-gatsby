import * as React from "react";
import Layout from "../components/layout";
import {hero} from "../global.module.css";
import Seo from "../components/Seo";
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <div className={hero}>
      <h1 cl>Stay curious.</h1>
      <p>Embarking on the Code Odyssey: Thoughtfully Documenting My Learning Journey in Programming</p>
      </div>
      
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;

