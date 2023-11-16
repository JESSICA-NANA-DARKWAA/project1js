import React from "react";
import "./Layout.css";

const Layout = ({ children, image, page, step }) => {
  return (
    <div className="layout-container">
      <div className="image-box">
        <img src={image} alt="image-here" />
      </div>
      <div className="children-box">
        {page !== "login" && (
          <div className="step-container">
            <span>Back</span>
            <div>
              <b>Step {step}</b> of 4
            </div>
            <span>Exit</span>
          </div>
        )}

        <div className="child-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
