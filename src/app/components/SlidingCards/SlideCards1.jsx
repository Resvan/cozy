
import React from 'react'
import "./style.css"

import { motion, useAnimation } from "framer-motion";
export default function SlideCards1() {

  const controls = useAnimation();
  const slideText = useAnimation();
  const scaleControls = useAnimation();
  const handleHover = () => {
    controls.start({ y: '100%',x:"50%", scale: 2.2, filter: 'blur(8px)', opacity: 0 });
    slideText.start({ x:0, opacity: 1 });
    scaleControls.start({ scale: 1.04 });
  };

  const handleLeave = () => {
    controls.start({ y: 0, x:0,scale: 1.1, filter: 'blur(0)', opacity: 1 });
    slideText.start({ x:100, opacity: 0 });
    scaleControls.start({ scale: 1 });

  };
  return (  

    <div className='  '>
<motion.div
 onHoverStart={handleHover}
 onHoverEnd={handleLeave}

className=" p-8 ">

<motion.div 
//scale this div here on hover using framer  motion

className="p-2 relative bg-gradient-to-b to-black via-dark-blue-800 from-blue-950  "
    style={{
   
      position: '',
      overflow: 'hidden',
      width: '300px',
      height: '400px',
  
    }}
    animate={scaleControls}
    transition={{ duration: 0.5 }}
  >
    <motion.div
    className=""
      initial={{ y: 0}}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Powered-For-Change-Hero-3840x2160%3Arad-5x3?ts=1701776318778&dpr=off)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    />
<div className="">
<motion.div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
       
        padding: '20px',
      }}
     
    >
      <h2 className='uppercase font-bold'>Research Report</h2>
      <h2 className='uppercase text-xl font-bold'>powered for change</h2>

      <motion.p
      initial={{ x: 300, opacity: 0 }}
      animate={slideText}
      transition={{ duration: 0.5 }}
      
      className='p-3'>Decarbonization requires collaboration. So what if all net zero investments were synchronized? We outline key actions each industry needs to take to ensure an equitable, affordable and sustainable energy transition.</motion.p>
    </motion.div>


</div>

  </motion.div>


</motion.div>
</div>

  )
}
 