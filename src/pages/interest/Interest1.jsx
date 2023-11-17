import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload3.png";
import Button from "../../components/Button/Button";
import "./interest1.css";

const interest1 = () => {
  return (
    <Layout image={Image}>
      <br></br>
      <h1> Hey there! What brings you here</h1>
      This will help us make a great recommendations
      <Button type="submit" label="Continue" className="button5" />
      <Button type="submit" label="Continue" className="button6" />
      <Button type="submit" label="Continue" className="button7" />
      <Button type="submit" label="Continue" className="button8" />
      <Button type="submit" label="Continue" className="button9" />
      <Button type="submit" label="Continue" className="button" />
    </Layout>
  );
};

export default interest1;
