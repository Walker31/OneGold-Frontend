import React from "react";
import "./HeroSection.css";

function HeroSection(){
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-container">
          <h1>
            Your destination for exquisite, <br />
            <em>one-of-a-kind jewelry.</em>
          </h1>
          <p>
            Here, we offer different types of jewelry, including necklaces,
            bracelets, earrings, and rings. From classic designs to modern
            styles, we have something for everyone.
          </p>
          <a href="#" className="cta-button">
            Discover the collections
          </a>
        </div>
        <div className="image-container">
          <img
            src="/homeimage1.png"
            alt="Jewelry model"
            className="hero-image"
          />
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <h2>OUR COLLECTIONS</h2>
      </section>
    </div>
  );
};

export default HeroSection;
