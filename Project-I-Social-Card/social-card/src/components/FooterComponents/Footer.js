import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <i class="large material-icons" style={{ opacity: "0.5" }}>
        chat_bubble_outline
      </i>
      <i class="large material-icons" style={{ opacity: "0.5" }}>
        autorenew
      </i>
      <i class="large material-icons" style={{ opacity: "0.5" }}>
        favorite_border
      </i>
      <i class="large material-icons" style={{ opacity: "0.5" }}>
        mail_outline
      </i>
    </div>
  );
};

export default Footer;
