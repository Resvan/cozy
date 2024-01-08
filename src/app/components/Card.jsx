'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {


  const overlayVariants = {
    initial: { opacity: 0, backdropFilter: 'blur(0px)', x:100 },
    hover: { opacity: 1, backdropFilter: 'blur(50px)', x:0, transition:{duration: 0.4} },
  };

  return (
    <div className="container flex justify-center items-center mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="shadow-lg relative overflow-hidden group m-5 box-border hover:scale-105"
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700184505522&fit=constrain&dpr=off"
            alt=""
            className="transform group-hover:scale-200 transition-transform duration-300"
          />
          <div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
          </div>
          <motion.div
            className="overlay absolute top-0 left-0 w-full h-full opacity-100 pl-10 pt-10"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          >
            <h1 className="text-white text-lg font-bold">RESEARCH REPORT</h1>
            <h1 className="text-white text-4xl font-bold mt-10">Accenture Life Trends 2024</h1>
            <p className='mt-10 text-xl'>'We&apos;re in a state of flux, but there&apos;s hope and unparalleled opportunity. Five trends explore people&apos;s evolving relationships with businesses and technology. What do you need to know to navigate the coming year and beyond?'</p>
            <motion.div
            className="absolute bottom-10 right-6 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className='text-xl font-semibold' >
              Expand
            </button>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
