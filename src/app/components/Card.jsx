"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      x:100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="h-[40rem] w-[90vw] md:w-[20vw] m-6 shadow-lg relative overflow-hidden group bg-[#f8fafc]">
      <div className="text-black m-10">
        <div>
          <h1 className="text-2xl font-medium">Event</h1>
          <h1 className="text-xl font-bold mt-4">CSE 2024</h1>
        </div>
        <p className="mt-10 text-xl sr-only">
          We&apos;re in a state of flux, but there&apos;s hope and unparalleled
          opportunity. Five trends explore people&apos;s evolving relationships
          with businesses and technology. What do you need to know to navigate
          the coming year and beyond?
        </p>
        <motion.p
          className="mt-10 text-xl"
          initial="hidden"
          animate="hidden"
          whileHover='visible'
          variants={defaultAnimations}
          transition={{ staggerChildren: 0.1, from: "left" }}
          aria-hidden
        >
          We&apos;re in a state of flux, but there&apos;s hope and unparalleled
          opportunity. Five trends explore people&apos;s evolving relationships
          with businesses and technology. What do you need to know to navigate
          the coming year and beyond?
        </motion.p>
        <button className="absolute bottom-10 right-10 text-xl font-semibold">
          Expand
        </button>
      </div>
    </div>
  );
};

export default Card;
