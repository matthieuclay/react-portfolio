import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 250,
                top: -200,
                bottom: 250,
              }}
            >
              Agency
            </motion.h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/project-1"} />
      </motion.div>
    </>
  );
};

export default Home;
