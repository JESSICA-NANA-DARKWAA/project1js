import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload2.png";
import Button from "../../components/Button/Button";
import "./Upload.css";

const Upload = () => {
  return <Layout image={Image} step={2}> 
   <br />
    <br />
   <h1>Add Photo</h1> 
   Add a photo so other memebers know who you are 
   <Button type="submit" label="Continue" className="button" />

     </Layout>;
    
  
 
};

export default Upload;
