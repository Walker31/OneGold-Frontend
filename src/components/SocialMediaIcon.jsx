import React from "react";
import PropTypes from "prop-types";

function SocialMediaIcon({ imgSrc, altText, size = 100 }){
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: "30%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <img src={imgSrc} alt={altText} style={imgStyle} />
    </div>
  );
};

SocialMediaIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  size: PropTypes.number,
};

SocialMediaIcon.defaultProps = {
  altText: "Round image",
  size: 100,
};

export default SocialMediaIcon;
