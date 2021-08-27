import React from "react";
import "./pageHeader.scss";

const PageHeader = (props) => {
  return (
    <div className="site-page-header">
      <div className="page-title">
        {props.title} {props.count || 0}
      </div>
      <div>
        <button className="btn-add" onClick={props.handleActionClick}>
          {props.btntitle}
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
