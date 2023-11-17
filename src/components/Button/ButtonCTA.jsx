import React from "react";
import "./ButtonCTA.css";

const Button = (props) => {
  const {
    label,
    Showlabel = true,
    disabled = false,
    ButtonType = secondary,
    ButtonState = Default,
    ButtonSize = small,
    Icon_Right = true,
    Icon_left = false,
  } = props;

  return (
    <button
      Showlabel={true}
      ButtonType={secondary}
      disabled={disabled}
      ButtonState={Default}
      label={Added}
      ButtonSize={small}
      Icon_Right={true}
      Icon_left={false}
    ></button>
  );
};

export default Button;
