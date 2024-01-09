'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const logoVariants = {
    initial: { opacity: 1 },
    hover: {  x:50, width: 25, height: 25, transition: { duration: 0.5 } },
  };

  const textVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and text on the left side */}
        <motion.div
          className="items-center"
          initial="initial"
          animate="initial"
          whileHover="hover"
        >
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}  // Set your desired width
              height={40} // Set your desired height
              className="mr-2"
            />
          </motion.div>
          {/* Text */}
          <motion.span
          style={{color:'#82D5F7'}}
            className="font-bold text-2xl"
            variants={textVariants}
          >
            COZY FOLKS
          </motion.span>
        </motion.div>

        {/* Navigation options on the right side */}
        <div className="flex items-center space-x-4">
          {/* Individual motion.div for each navigation item */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/services">Services</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact">Contact</Link>
          </motion.div>
          {/* Add more navigation options as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
