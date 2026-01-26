import React from "react";
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="homepage-hero">
        <h1>Italy Trip Todos</h1>
        <p>Plan your Italian adventure, one to-do at a time!</p>
      </header>

      {/* Features / Highlights */}
      <section className="homepage-features">
        <h2>Why You'll Love It</h2>
        <ul>
          <li>Create and organize your travel itinerary</li>
          <li>Track must-see attractions, restaurants, and experiences</li>
          <li>Simple, clean, and mobile-friendly design</li>
        </ul>
      </section>

      {/* Example Preview */}
      <section className="homepage-preview">
        <h2>Sample Itinerary</h2>
        <div className="todo-preview">
          <ul>
            <li>Day 1: Explore Colosseum and Roman Forum 🏛️</li>
            <li>Day 2: Gondola ride in Venice 🚤</li>
            <li>Day 3: Wine tasting in Tuscany 🍷</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
