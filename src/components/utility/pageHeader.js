import React from "react";
import "./pageHeader.scss";

const PageHeader = (props) => {
  const { btntitle, handleActionClick } = props;
  return (
    <div className="site-page-header">
      <div className="page-title">
        {props.title} {props.count || 0}
      </div>
      {!btntitle ? (
        ""
      ) : (
        <div>
          <button className="btn-add" onClick={handleActionClick}>
            {btntitle}
          </button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
