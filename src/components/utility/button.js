import React from "react";
import "./button.scss";

const Button = (props) => {
  console.log(props);
  const { title, handleAction } = props;
  return (
    <button
      className={title === "Show" ? "show-btn" : "delete-btn"}
      onClick={handleAction}
    >
      {title}
    </button>
  );
};
export default Button;
