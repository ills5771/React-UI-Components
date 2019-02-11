import React from "react";
import "./Header.css";
import moment from "moment";
const timeStamp = moment();

const HeaderTitle = () => {
  return (
    <div>
      <h3>Lambda School</h3>
      <span>@LambdaSchool - {timeStamp.format("Do MMM")}</span>
    </div>
  );
};

export default HeaderTitle;
