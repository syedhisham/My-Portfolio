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
    setShowEnvelop((prev) => {
      if (!prev) {
      }
      return !prev;
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:syedhishamshah27@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "https://wa.me/923038144158";
  };

  return (
    <header className="bg-customBlue montserrat text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1 className="text-lg md:text-2xl font-bold">Syed Hisham Shah</h1>

        {/* Desktop View */}
        <div className="hidden md:flex items-center  space-x-4">
          <div
            className="flex items-center  relative"
            ref={emailRef}
            onClick={handleEmailClick}
          >
            <FaEnvelope className="text-white" />
            <span className="ml-2 text-white">syedhishamshah27@gmail.com</span>
          </div>

          <div className="flex items-center relative" ref={phoneRef}>
            <FaWhatsapp className="text-white" />
            <span className="ml-2 text-white" onClick={handlePhoneClick}>
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
                className="absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full bg-customBlue p-2"
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
                className="absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full p-2"
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
