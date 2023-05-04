import React from "react";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Dogs from "../components/DogsCard/DogsCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Shop from "../components/Shop/Shop";
import Story from "../components/Story/Story";
import Image from "next/image";

const orangeCat = require("../assets/images/orangecat.png");

export default function HomePage() {
  return (
    <section className="relative">
      <HeroSection />
      <CategoryCards />
      <Image
        src={orangeCat}
        alt="orange cat"
        width={200}
        height={200}
        priority={true}
        className="fixed w-auto h-auto right-0 top-1/2 -translate-y-1/2 z-[1] orange-cat"
      />
      <Dogs />
      <Story />
      <Shop />
    </section>
  );
}
