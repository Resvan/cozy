"use client";
import React, { useEffect } from "react";

const WobbleText = () => {
  useEffect(() => {
    const wobbleElements = document.querySelectorAll(".wobble");

    wobbleElements.forEach((el) => {
      el.addEventListener("mouseover", () => {
        if (
          !el.classList.contains("animating") &&
          !el.classList.contains("mouseover")
        ) {
          el.classList.add("animating", "mouseover");

          const letters = el.innerText.split("");

          setTimeout(() => {
            el.classList.remove("animating");
          }, (letters.length + 1) * 50);

          const animationName = el.dataset.animation || "jump";

          el.innerText = "";

          letters.forEach((letter, i) => {
            if (letter === " ") {
              letter = "\u00A0"; // Non-breaking space
            }
            el.innerHTML += `<span class="letter">${letter}</span>`;
          });

          const letterElements = el.querySelectorAll(".letter");
          letterElements.forEach((letter, i) => {
            setTimeout(() => {
              letter.classList.add(animationName);
            }, 50 * i);
          });
        }
      });

      el.addEventListener("mouseout", () => {
        el.classList.remove("mouseover");
      });
    });
  }, []);

  return (
    <div className="container mx-auto mt-10 ">
      <h1 className="wobble text-9xl font-black uppercase text-center" data-animation="leap">
      Reinvent What Your Business Could Be.
      </h1>
    </div>
  );
};

export default WobbleText;
