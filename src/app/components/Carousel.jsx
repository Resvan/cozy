"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { wrap } from "@popmotion/popcorn"


export default function Carousel() {
  const slideImage = useAnimation();

  const data = [
    {
      image: "/images/innovation.jpg",
      heading: "Heading ONE",
      text: "Text ONE",
    },
    {
      image: "/images/moon.png",
      heading: "Heading TWO",
      text: "Text TWO",
    },
    {
      image: "/images/innovation.jpg",
      heading: "Heading THREE",
      text: "Text THREE",
    },
  ];

  const sliderVariants = {
    incoming: (direction) => ({
      opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "-100%",
      scale: 1,
      opacity: 0.2,
    }),
  };

  const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04],
  };

  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, data.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full mx-10 mb-10">
        <div className="relative">
          <motion.div
            style={{ width: "45vw", height: "50vh", overflow: "hidden" }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  backgroundImage: data[activeImageIndex]['image'],
                }}
                children={[
                    <Image src={data[activeImageIndex]['image']} layout="fill" objectFit="cover" />
                ]}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image"
              />
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="text-left">
          <h2>{data[activeImageIndex]['heading']}</h2>
          <p>{data[activeImageIndex]['text']}</p>
        </div>
      </div>
      <div className="mx-10 space-x-10">
        <button onClick={() => swipeToImage(-1)}>PREV</button>
        <button onClick={() => swipeToImage(1)}>NEXT</button>
      </div>
    </div>
  );
}