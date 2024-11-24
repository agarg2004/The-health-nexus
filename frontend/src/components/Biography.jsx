import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          The Health Nexus is an integrated healthcare management and doctor appointment booking portal, designed to provide seamless access to quality medical facilities for everyone. Our platform simplifies the process of booking appointments and consulting with doctors, reducing waiting times and ensuring a smooth experience for users. With a focus on accessibility and convenience, The Health Nexus bridges the gap between patients and healthcare professionals, making good medical care just a click away.
          </p>
        
          <p>
          This platform offers a range of features to enhance your healthcare journey, including slot rescheduling, real-time doctor availability checks, and the option for online or video consultations with experts. Additionally, users can securely store and manage their health reports online, ensuring easy access whenever needed. Whether it’s for routine check-ups or expert advice, The Health Nexus transforms the way people interact with healthcare, providing a reliable and user-friendly experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
