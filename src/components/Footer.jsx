import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cities">
        <span className="city">🏛️ Rome</span>
        <span className="city">🚤 Venice</span>
        <span className="city">🎨 Florence</span>
      </div>
      <p className="footer-text">
        Italy Trip To Do &copy; {new Date().getFullYear()} | Made with ❤️ for travel lovers
      </p>
    </footer>
  );
};

export default Footer;


