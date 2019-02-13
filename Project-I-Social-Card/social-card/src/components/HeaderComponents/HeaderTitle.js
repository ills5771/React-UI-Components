import React from "react";
import "./Header.css";
import moment from "moment";
const timeStamp = moment();

const HeaderTitle = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <h4>Lambda School</h4>
        <span>@LambdaSchool - {timeStamp.format("Do MMM")}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
