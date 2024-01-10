"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const VisibleText = () => {

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      Your text goes here
    </motion.div>
  );
};

export default VisibleText;
