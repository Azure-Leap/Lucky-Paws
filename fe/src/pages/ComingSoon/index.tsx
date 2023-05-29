"use client";
import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Soon from "./Soon.json";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center justify-center flex-col h-[80vh]"
    >
      <motion.h1
        className="text-[28px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Coming Soon ....
      </motion.h1>
      <div className="w-[300px] flex justify-center">
        <Player autoplay loop src={Soon}></Player>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
