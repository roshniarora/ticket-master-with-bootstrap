import React from "react";
import "./button.scss";

const Button = (props) => {
  console.log(props);
  const { title, handleAction } = props;
  return (
    <div>
      <button
        className={
          title === "Show"
            ? "show-btn"
            : title === "Submit"
            ? "submit-btn"
            : "delete-btn"
        }
        onClick={handleAction}
      >
        {title}
      </button>
      {/* <div>
        <button className={title === "Submit" ? "submit-btn" : ""}>
          {title}
        </button>
      </div> */}
    </div>
  );
};
export default Button;
