import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      {/* <HeaderTitle />
      <HeaderContent /> */}
    </div>
  );
};

export default HeaderContainer;
