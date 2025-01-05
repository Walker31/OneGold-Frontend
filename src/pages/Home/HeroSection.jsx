import React from "react";
import "./HeroSection.css";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import CollectionCard from "../../components/Collection Card/CollectionCard";

function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="text-container">
          <h1>
            Your destination for exquisite, <br />
            <em>one-of-a-kind jewelry.</em>
          </h1>
          <p className="subtext">
            Here, we offer different types of jewelry, including necklaces,
            bracelets, earrings, and rings. From classic designs to modern
            styles, we have something for everyone.
          </p>
          <a href="#collections" className="cta-button">
            Discover the collections
          </a>
        </div>
        <div className="image-container">
          <img
            src="./src/assets/homeimage1.png"
            alt="Model wearing jewelry"
            className="hero-image"
          />
        </div>
      </section>     

      {/* Collections Section */}
      <section id="collections" className="collections-section">
        <h2>OUR COLLECTIONS</h2>
        <div className="collection">
          <CollectionCard imageSrc={'./src/assets/traditional.jpg'} title={'Traditional'} />
          <CollectionCard imageSrc={'./src/assets/chains.jpg'} title={'Chains & Pendants'} />
          <CollectionCard imageSrc={'./src/assets/bangles.jpg'} title={'Bangles'} />
          <CollectionCard imageSrc={'./src/assets/necklace.jpg'} title={'Necklaces & Chokes'} />
          <CollectionCard imageSrc={'./src/assets/earring.jpg'} title={'Earrings & Jhumkas'} />
          <CollectionCard imageSrc={'./src/assets/ring.jpg'} title={'Rings'} />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <div className="content-wrapper">
          <div className="image-container">
            <img src="./src/assets/about-us.jpg" alt="About Us" className="circle-image" />
          </div>
          <div className="about-text-container">
            <h1>About Us</h1>
            <p>
              We are 2 friends with a passion for unique jewellery. Whether it's elaborately crafted pearl necklaces or elegant bracelets, our creativity shines in every piece. Collaboration is key, and together, we explore new ideas and techniques.
            </p>
            <p>
              From selecting the finest materials to adding the final touches, every step fills us with pride. At the heart of our business is a true love for creating jewelry. We can't wait to share this passion with you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
  <div className="footer-columns">
    {/* Boutique Links */}
    <div className="footer-column">
      <h4>Boutique</h4>
      <div className="footer-item">
        {["earrings", "rings", "bracelets", "necklace"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </a>
        ))}
      </div>
    </div>
    {/* About Link */}
    <div className="footer-column">
      <h4>About</h4>
      <div className="footer-item">
        <a href="#about-us">
          <p>About Us</p>
        </a>
      </div>
    </div>

    {/* Contact Information */}
    <div className="footer-column">
      <h4>Contact</h4>
      <p className="email-link">onegold@gmail.com</p>
    </div>

    {/* Social Media Section */}
    <div className="footer-column">
      <div className="footer-logo">
        <img src="./src/assets/logo.png" alt="OneGold Logo" />
        <div className="social-icons">
          <SocialMediaIcon imgSrc="./src/assets/icons8-facebook.svg" size={35} />
          <SocialMediaIcon imgSrc="./src/assets/icons8-instagram.svg" size={35} />
          <SocialMediaIcon imgSrc="./src/assets/icons8-twitter-32.svg" size={35} />
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default HeroSection;
