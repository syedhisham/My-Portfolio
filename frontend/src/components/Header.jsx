import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { gsap } from "gsap";

const Header = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEnvelop, setShowEnvelop] = useState(false);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const togglePhone = () => {
    setShowPhone((prev) => {
      if (!prev) {
        gsap.to(emailRef.current, { x: -115, duration: 0.1 });
        setShowEnvelop(false);
      } else {
        gsap.to(emailRef.current, { x: 0, duration: 0.4 });
      }
      return !prev;
    });
  };

  const toggleEnvelop = () => {
    setShowEnvelop((prev) => !prev);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:syedhishamshah27@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "https://wa.me/923038144158";
  };

  return (
    <header className="relative bg-mainColor montserrat text-gray-200/40">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <h1 className="text-lg md:text-2xl font-bold">Syed Hisham Shah</h1>

        {/* Desktop View */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="flex items-center relative"
            ref={emailRef}
            onClick={handleEmailClick}
          >
            <FaEnvelope className="text-gray-200/40" />
            <span className="ml-2 text-gray-200/40 cursor-pointer">
              syedhishamshah27@gmail.com
            </span>
          </div>

          <div className="flex items-center relative" ref={phoneRef}>
            <FaWhatsapp className="text-gray-200/40" />
            <span
              className="ml-2 text-gray-200/40 cursor-pointer"
              onClick={handlePhoneClick}
            >
              +923038144158
            </span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center space-x-3">
          <div
            className="relative flex justify-center items-center"
            ref={emailRef}
          >
            <FaEnvelope
              className="text-white cursor-pointer"
              onClick={toggleEnvelop}
            />
            {showEnvelop && (
              <div
                className="absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full bg-mainColor p-2 cursor-pointer bg-transparent"
                onClick={handleEmailClick}
              >
                syedhishamshah27@gmail.com
              </div>
            )}
          </div>

          <div
            className="relative flex justify-center items-center"
            ref={phoneRef}
          >
            <FaWhatsapp
              className="text-white cursor-pointer"
              onClick={togglePhone}
            />
            {showPhone && (
              <div
                className="absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full p-2 cursor-pointer"
                onClick={handlePhoneClick}
              >
                +923038144158
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
