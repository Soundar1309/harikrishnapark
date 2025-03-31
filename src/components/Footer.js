import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHotel, FaBed, FaPhoneAlt, FaMap } from "react-icons/fa";
import { IoIosMail, IoMdContact } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";
import Logo from '../assets/img/logo.jpg'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#361617] text-white py-12"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo & About Section */}
        <motion.div  className="items-center"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img src={Logo} alt="Harikrishna Park Hotel" className="w-48 mb-4" />
          <p className="text-[#f8d09c] font-secondary">
            Harikrishna Park Hotel offers a perfect blend of luxury and comfort, making every guest feel at home with our exceptional hospitality.
          </p>
        </motion.div>

        {/* Quick Links with Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-[#f8d09c]">
          <li className="flex items-center gap-2 hover:text-white transition">
              <MdOutlineRoomService className="text-white" /> <a href="/">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaHotel className="text-white" /> <a href="/about-us">About Us</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaBed className="text-white" /> <a href="/rooms">Our Rooms</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <IoMdContact className="text-white" /> <a href="/contact-us">Contact</a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info & Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="mt-4 text-[#f8d09c] flex items-center gap-2">
          <FaPhoneAlt className="text-white" /> +91 95855 12307, +91 95977 90311
          </p>
          <p className="mt-4 text-[#f8d09c] flex items-center gap-2">
          <FaPhoneAlt className="text-white" /> 0422 4724341
          </p>
          <p className="mt-2 text-[#f8d09c] flex items-center gap-2">
            <IoIosMail className="text-white" /> harikrishnaparkreservation@gmail.com
          </p>
          <p className="mt-2 text-[#f8d09c] flex items-center gap-2">
            <FaMap className="text-white text-3xl"/>OPP.GOVT GIRLS HIGH SCHOOL, WATER TANK ROAD, NEW SIDDAPUDHUR, CBE- 44.
          </p>

          {/* Social Media Icons with Hover Animation */}
          <div className="flex space-x-4 mt-4">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/harikrishnapark" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/hotel_harikrishna_park/?locale=ko" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gautam-b-r-a33555330/?originalSubdomain=in" },
            ].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.link} 
                className="p-2 bg-white text-[#361617] rounded-full hover:bg-gray-200 transition"
                whileHover={{ scale: 1.2, rotate: 5 }} 
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div 
        className="mt-8 text-center text-accent text-md border-t border-accent pt-4"
        initial={{ opacity: 0.5 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 1 }}
      >
        © {new Date().getFullYear()} Harikrishna Park Hotel. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
