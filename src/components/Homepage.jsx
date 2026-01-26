import React from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="homepage-hero">
        <h1>Italy Trip Todos</h1>
        <p>Plan your Italian adventure, one to-do at a time!</p>
      </header>

      {/* Carousel Section */}
      <section className="homepage-carousel">
        <ControlledCarousel />
      </section>

      {/* Features / Highlights */}
      <section className="homepage-features">
        <h2>Why You'll Love It</h2>
        <ul>
          <li>Create and organize your travel itinerary</li>
          <li>Track must-see attractions, restaurants, and experiences</li>
          <li>Simple, clean, and mobile-friendly design</li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
