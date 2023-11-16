import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Upload from "../pages/upload/upload";
import Addphoto from "../pages/Upload/Addphoto";
import Interest1 from "../pages/interest/interest1";
import Interest2 from "../pages/interest/interest2";
import Interest3 from "../pages/interest/Interest3";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Addphoto" element={<Addphoto />} />
        <Route path="/Interest1" element={<Interest1 />} />
        <Route path="/Interest2" element={<Interest2 />} />
        <Route path="/Interest3" element={<Interest3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
