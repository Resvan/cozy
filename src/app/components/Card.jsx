"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideCards1 from "./SlidingCards/SlideCards1";

const Card = () => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
      <div className="">
        <SlideCards1 />
      </div>
      <div>
        <SlideCards1 />
      </div>
      <div>
        <SlideCards1 />
      </div>
      <div>
        <SlideCards1 />
      </div>
      <div>
        <SlideCards1 />
      </div>
      <div>
        <SlideCards1 />
      </div>
    </div>
  );
};

export default Card;
