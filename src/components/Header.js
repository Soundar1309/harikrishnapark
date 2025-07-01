import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";
import { useBooking } from "../components/BookingContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";   
import HotelSchema from "../components/HotelSchema";

const Header = () => {
  const { setIsOpen } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleReserveClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setMenuOpen(false);
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
    <HotelSchema />
    <header className="bg-white shadow-md p-2 xs:p-3 sm:p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-2 xs:px-3 sm:px-6 md:px-10">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img src={Logo} alt="Logo" className="h-12 xs:h-16 sm:h-20 md:h-24" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 xs:space-x-4 lg:space-x-6">
          {["Home", "About Us", "Rooms", "Contact Us"].map((item, index) => {
            const link = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <NavLink
                key={index}
                to={`/${link === "home" ? "" : link}`}
                className={({ isActive }) =>
                  `font-bold py-2 sm:py-3 px-2 xs:px-3 sm:px-5 transition duration-300 text-sm xs:text-base lg:text-lg ${
                    isActive ? "text-[#361617] border-b-2 border-[#361617]" : "hover:text-[#361617]"
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Section: Buttons & Mobile Menu */}
        <div className="flex items-center">
          {/* Reserve Now Button (Desktop) */}
          <button
            onClick={handleReserveClick}
            className="hidden md:block bg-[#f8d09c] text-black px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg hover:text-white hover:bg-[#361617] transition text-sm xs:text-base lg:text-lg"
          >
            Reserve Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-xl xs:text-2xl sm:text-3xl ml-2 xs:ml-3 sm:ml-5 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} className="xs:w-28 sm:w-8 sm:h-8" /> : <Menu size={24} className="xs:w-28 sm:w-8 sm:h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Slide Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-[calc(0%+4rem)] left-0 w-full bg-white shadow-lg z-50"
          >
            <div className="container mx-auto py-4">
              <nav className="flex flex-col space-y-3">
                {["Home", "About Us", "Rooms", "Contact Us"].map((item, index) => {
                  const link = item.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={`/${link === "home" ? "" : link}`}
                        className={({ isActive }) =>
                          `block text-center font-bold py-3 px-5 mx-4 rounded-lg transition-all duration-300 ${
                            isActive 
                              ? "bg-[#361617] text-white" 
                              : "hover:bg-[#f8d09c]"
                          }`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </NavLink>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="px-4"
                >
                  <button
                    onClick={handleReserveClick}
                    className="w-full bg-[#f8d09c] text-black py-3 rounded-lg font-bold hover:bg-[#361617] hover:text-white transition-all duration-300"
                  >
                    Reserve Now
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header;
