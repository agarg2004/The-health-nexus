import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          <b>The Health Nexus</b> is a comprehensive healthcare platform that simplifies doctor appointments and consultations, reducing waiting times and ensuring a seamless experience. With features like slot rescheduling, real-time doctor availability, video consultations, and secure online health report management, The Health Nexus makes quality medical care accessible and convenient for everyone.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
