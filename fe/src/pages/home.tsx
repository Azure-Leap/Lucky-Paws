import React from "react";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Dogs from "../components/DogsCard/DogsCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Shop from "../components/Shop/Shop";
import Story from "../components/Story/Story";
import Image from "next/image";
import { motion } from "framer-motion";

const orangeCat = require("../assets/images/orangecat.png");

export default function HomePage() {
  const containerVariants = {
    hidden: {
      x: '100vw',  
    },
    visible: {
      x: 0, 
      transition: {
        duration: 1,  
        type: 'spring',  
        damping: 50,  
      },
    },
  };
  return (
    <section className="relative">
      <HeroSection />
      <CategoryCards />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="fixed w-auto h-auto right-0 top-1/2  z-[1] orange-cat"
      >
        <Image
          src={orangeCat}
          alt="orange cat"
          width={200}
          height={200}
          priority={true}
        />
      </motion.div>
      <Dogs />
      <Story />
      <Shop />
    </section>
  );
}
