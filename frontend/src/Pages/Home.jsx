import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to the Health Nexus | Your Trusted Healthcare Provider"
        }
        imageUrl={"https://cdnl.iconscout.com/lottie/premium/thumb/doctor-explaining-gesture-8936343-7441632.gif"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
