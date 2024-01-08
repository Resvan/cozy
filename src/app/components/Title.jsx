'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  const textVariants = {
    hoverRight: { x: 20 },
    hoverLeft: { x: -20 },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      whileHover={{ hoverRight: true, hoverLeft: true }}
    >
      <motion.div
        className="text-9xl"
        variants={textVariants}
        initial="initial"
        animate="initial"
        whileHover="hoverRight"
      >
        X right
      </motion.div>
      <motion.div
        className="text"
        variants={textVariants}
        initial="initial"
        animate="initial"
        whileHover="hoverLeft"
      >
        X left
      </motion.div>
      <style jsx>{`
        .text {
          display: block;
          margin-bottom: 10px;
          font-size: 24px;
          color: white;
        }
      `}</style>
    </motion.div>
  );
};

export default TextAnimation;
