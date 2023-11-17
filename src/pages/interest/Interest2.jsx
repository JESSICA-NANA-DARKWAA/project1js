import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload4.png";
import Button from "../../components/Button/Button";
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
      <Button type="submit" label="Gaming" className="button1" />
      <Button type="submit" label="fashion" className="button2" />
      <br />
      <Button type="submit" label="Music" className="button3" />
      <Button type="submit" label="Reading" className="button4" />
      <Button type="submit" label="Continue" className="button" />
    </Layout>
  );
};

export default interest2;
