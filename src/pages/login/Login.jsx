import React, { useState } from "react";

import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/register.png";
import "./Login.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Login= () => {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault(); //prevent page from refreshing
    localStorage.setItem("user", JSON.stringify(form));
    
    navigate("/addphoto");
  };
  return (
    <Layout image={Image}  page="login">
      <div className="register-container">
        <h1 className="page-title">Login</h1>
        <form onSubmit={handleForm}>
          
          

          <TextInput
            type="email"
            name="email"
            label="Email"
            placeholder="u@gmail.com"
            required={true}
            onChange={(value) => setForm({ ...form, email: value })}
          />
          <br />
          <TextInput
            type="Password"
            name="password"
            label="Password"
            required={true}
            onChange={(value) => setForm({ ...form, password: value })}
          />
          <Button type="submit" label="Create Account" className="button" />
        
        </form>
      </div>
    </Layout>
  );
};

export default Login;
