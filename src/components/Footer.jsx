import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Italy Trip To Do &copy; {new Date().getFullYear()} | Made with ❤️ for travel lovers
      </p>
    </footer>
  );
};

export default Footer;


