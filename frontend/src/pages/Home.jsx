import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import myImage from "../assets/MyPicBW.png";

const Home = () => {
  const text =
    "Hi, I'm Syed Hisham Shah. I make websites that are more functional than my morning coffee routine!";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [startFilling, setStartFilling] = useState(false);
  const [showBackgroundText, setShowBackgroundText] = useState(false);

  useEffect(() => {
    gsap.from(".main-text", {
      x: -10,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    const fillTimer = setTimeout(() => {
      setStartFilling(true);
    }, 400);

    const showTextTimer = setTimeout(() => {
      setShowBackgroundText(true);
    }, (text.length * 0.05 + 0.5) * 1000);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(showTextTimer);
    };
  }, [text.length]);

  useEffect(() => {
    if (showBackgroundText) {
      gsap.to(".background-text", {
        x: -10,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [showBackgroundText]);

  return (
    <div className="">
      <div className="relative w-full h-[92.3vh] bg-mainColor overflow-x-hidden overflow-y-hidden">
        <div
          className="texture-container absolute"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        >
          <div className="texture-layer layer-1"></div>
          <div className="texture-layer layer-2"></div>
          <div className="texture-layer layer-3"></div>
        </div>
        <div className="flex justify-center h-full mt-20">
          <div className="text-center text-white max-w-5xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold leading-tight text-shadow main-text">
              {Array.from(text).map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-colors duration-500 ${
                    letter === " " ? "whitespace-pre" : ""
                  } ${
                    startFilling
                      ? "text-transparent"
                      : "text-transparent stroke-white"
                  }`}
                  style={{
                    animation: startFilling
                      ? `letterFill 0.5s ease forwards ${index * 0.05}s`
                      : "none",
                    WebkitTextStroke: !startFilling ? "1px white" : "none",
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <div
              className={`mt-6 transition-opacity duration-1000 ${
                showBackgroundText ? "opacity-100" : "opacity-0"
              } background-text`}
            >
              <span className="text-yellow-400 text-5xl md:text-6xl lg:text-6xl font-extrabold">
                Yes, That's me in the background
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 -left-40 h-full w-full">
          <img
            src={myImage}
            alt="Syed Hisham Shah"
            className="object-cover h-full w-full md:w-1/2 opacity-40 background-image"
          />
        </div>
        {/* Background Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
    </div>
  );
};

export default Home;
