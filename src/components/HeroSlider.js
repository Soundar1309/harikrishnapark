import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaUserFriends,
  FaWifi,
  FaParking,
  FaUtensils,
  FaConciergeBell,
  FaBed,
} from "react-icons/fa";
import Aboutus from "../assets/img/about-us.jpg";
import Hero from "../assets/img/room.jpg";
import { useBooking } from "../components/BookingContext";
import BookingSection from "../components/popupbooking";

import room1 from "../assets/img/rooms/1.jpg";
import room2 from "../assets/img/rooms/1dt1.jpg";
import room3 from "../assets/img/rooms/2dts.jpg";

const rooms = [
  {
    id: 2,
    name: "Executive Economy - (Deluxue)",
    image: room2,
    occupancy: "Double",
    description: "An elegant suite offering premium comfort.",
    price: "₹2,650/night (Excl.GST)",
    facilities: [FaBed, FaWifi, FaParking],
  },
  {
    id: 6,
    name: "Family Suite Room",
    image: room1,
    occupancy: "Triple",
    description: "A spacious and comfortable room with modern amenities.",
    price: "₹3,500/night (Excl.GST)",
    facilities: [FaWifi, FaBed, FaConciergeBell],
  },
  {
    id: 8,
    name: "Family Suite (Connecting Room )",
    image: room3,
    occupancy: "Family & Friends",
    description: "A luxurious suite designed for family vacations.",
    price: "Contact for Tarrif",
    facilities: [FaParking, FaBed, FaUtensils],
  },
];

const facilities = [
  { icon: FaWifi, title: "Free Wi-Fi" },
  { icon: FaParking, title: "Free Parking" },
  { icon: FaUtensils, title: "Breakfast (on request)" },
  { icon: FaConciergeBell, title: "24/7 Service" },
  { icon: FaBed, title: "Cozy Rooms" },
];

export default function Home() {
  const { setIsOpen } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Deluxe Room",
  });

  return (
    <div className="bg-white text-[#361617] font-sans mt-16 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col w-full max-w-7xl items-center text-center text-white p-4 sm:p-6 md:p-10">
          {/* Text Content */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Experience Luxury & Comfort
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg mt-3 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A home away from home – Unparalleled hospitality, cozy rooms, and
            top-notch services.
          </motion.p>
     
          {/* Reserve Button */}
          <motion.button
            onClick={() => {
              setIsOpen(true);
              setMenuOpen(false);
            }}
            className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#f8d09c] text-black font-semibold rounded-lg shadow-lg hover:bg-[#361617] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8 }}
          >
            Reserve Now
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
        {/* Image with Animation */}
        <motion.img
          src={Aboutus}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          alt="About Hotel"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content with Animation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold">About Harikrishna Park Hotel</h2>
          <p className="mt-3 text-gray-700 text-justify text-sm sm:text-base">
            At Harikrishna Park Hotel, we believe that a hotel stay should be
            more than just a place to rest—it should be an experience of warmth,
            relaxation, and convenience. Established with a passion for
            hospitality, our hotel is designed to cater to all travelers, from
            solo adventurers and business professionals to families and event
            guests.
            <br />
            <br />
            Nestled in a prime location in Coimbatore, we offer easy access to
            major business hubs, shopping centers, and cultural attractions,
            making us the perfect choice for both domestic and international
            travelers.
          </p>

          {/* Learn More Button with Arrow Icon & Hover Animation */}
          <div className="flex justify-center md:justify-start">
            <Link to="/about-us" className="inline-block mt-6">
              <motion.button
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#361617] text-white rounded-lg hover:bg-[#f8d09c] hover:text-[#361617] transition duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Room Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#f8d09c] text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-[#361617] uppercase px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Our Rooms
        </motion.h2>

        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <motion.div
                className="bg-white w-full max-w-[350px] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                {/* Room Image with Overlay */}
                <div className="relative">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-40 sm:h-52 object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-xl"></div>
                </div>

                {/* Room Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#361617]">{room.name}</h3>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed flex-grow">
                    {room.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-center mt-3 sm:mt-4 text-[#361617] text-md sm:text-md font-medium">
                    <p className="flex items-center gap-1 font-bold">
                      <p className="text-[#361617] text-md" /> {room.price}
                    </p>
                  </div>

                  {/* Occupancy */}
                  <div className="flex items-center justify-center mt-3 sm:mt-4 text-[#361617] text-base sm:text-lg font-medium">
                    <p className="flex items-center gap-1 font-bold">
                      <FaUserFriends className="text-[#361617]" /> Occupancy: {room.occupancy}
                    </p>
                  </div>

                  {/* Facilities Icons */}
                  <motion.div className="flex justify-center gap-3 mt-3 sm:mt-4">
                    {room.facilities.map((Icon, i) => (
                      <Icon key={i} className="text-xl sm:text-2xl text-[#361617] transition-all duration-300" />
                    ))}
                  </motion.div>

                  {/* View Details Button */}
                  <Link to={`/room/${room.id}`} className="mt-4 sm:mt-6">
                    <motion.button
                      className="bg-[#361617] text-white px-4 sm:px-5 py-2 rounded-lg w-full font-semibold tracking-wide transition-all duration-300 hover:bg-[#f8d09c] hover:text-[#361617] text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="py-8 sm:py-12 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 max-w-6xl mx-4 sm:mx-[5%] md:mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105"
            >
              <facility.icon className="text-2xl sm:text-3xl md:text-4xl text-[#361617] mx-auto" />
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">{facility.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div>
        <BookingSection />
      </div>
    </div>
  );
}
