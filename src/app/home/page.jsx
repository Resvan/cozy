"use client";
import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../../../public/style/style.css";
import "../../../public/style/style.css";

import { motion, useAnimation } from "framer-motion";
import ParalaxCard from "../components/Cards/firstCard";
import SecondCard from "../components/Cards/SecondCard";
import ThirdCard from "../components/Cards/ThirdCard";
export default function App() {
  const controls1 = useAnimation(); // controls for the first text
  const controls2 = useAnimation(); // controls for the second text
  const controls3 = useAnimation(); // controls for the second text

  const initialHoverStates = Array(3).fill(false);

  const handleHover = () => {
    // Trigger animation when hovering
    controls1.start({ y: -100, opacity: 0 });

    // Show the second text
    controls2.start({ y: -100, opacity: 1 });

    controls3.start({ y: 230, opacity: 1 });
  };

  const handleHoverEnd = () => {
    // Reset animation when not hovering
    controls1.start({ y: 210, opacity: 1 });

    // Hide the second text
    controls2.start({ y: 500, opacity: 0 });
    controls3.start({ y: 500, opacity: 0 });
  };

  const handleClick = (data) => {
    if (initialHoverStates[data]) {
      handleHover();
      initialHoverStates[data] = false;
    } else {
      handleHoverEnd();
      initialHoverStates[data] = true;
    }
    // Trigger animation on click

    // Add your additional click event logic here
    console.log("Div clicked!");
  };
  return (
    <div>
      <section class="parallax__group">
        <div class="parallax__layer parallax__layer--background"></div>
        <div class="parallax__layer parallax__layer--foreground ">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 p-4 container ">
          <ParalaxCard/>
          <SecondCard/>
          <ThirdCard/>

         

        
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className=" m-8  h-80  w-72 col-start-1 bg-violet-900"
        >
          <div className="font-serif inset-x-0 h-full bottom-0 text-2xl flex items-end">
            <p className="p-5">
              We’re one of Fortune’s World’s Most Admired Companies
            </p>
          </div>
        </motion.div>
      </section>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className=" m-8  h-80  w-72 col-start-1 bg-violet-900"
      >
        <div className="font-serif inset-x-0 h-full bottom-0 text-2xl flex items-end">
          <p className="p-5">
            We’re one of Fortune’s World’s Most Admired Companies
          </p>
        </div>
      </motion.div>
    </div>
  );
}
