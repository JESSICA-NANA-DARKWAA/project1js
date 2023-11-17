import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload4.png";
import Boxes from "../../assets/images/Group 333.png";

import "./interest2.css";

const interest2 = () => {
  return (
    <Layout image={Image}>
      <h1>
        Let's get started by
        <br />
        some interests
      </h1>
      <br />
      Alright, let's pick something we're interested in and get started!
      <br />
      <br />
      <div /> <img src={Boxes} alt="" />
    </Layout>
  );
};

export default interest2;
