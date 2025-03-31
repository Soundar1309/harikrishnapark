import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaEnvelope, FaMobile, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Contact from '../assets/img/contact-us.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours." },
    { question: "Do you provide airport pick-up services?", answer: "No, we provide pick-up and drop services." },
    { question: "Are pets allowed in the hotel?", answer: "Unfortunately, pets are not allowed in our hotel premises." },
    { question: "What amenities are included in the room?", answer: "All rooms include free Wi-Fi, parking, 24/7 service, and cozy bedding." },
    { question: "Can I modify my booking after confirmation?", answer: "Yes, you can modify your booking by contacting our front desk." },
    { question: "Do you offer early check-in or late check-out?", answer: "Early check-in and late check-out are subject to availability and may include additional charges." },
    { question: "Is breakfast included in the room price?", answer: "Breakfast is available on request. You can opt for it while booking or at check-in." },
    { question: "What payment methods do you accept?", answer: "We accept debit cards, UPI, and cash payments." },
  ];

  return (
    <div className="bg-white text-[#361617] font-sans mt-16 w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Contact})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.h1
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

          {/* Contact Info */}
          <motion.div
            className="bg-[#f8d09c] p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
              <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base">
                Have questions or need assistance? Reach out to us!
              </p>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaMapMarkerAlt className="text-xl sm:text-2xl text-[#361617] mt-1" />
                  <p className="text-sm sm:text-base">OPP.GOVT GIRLS HIGH SCHOOL, WATER TANK ROAD, NEW SIDDAPUDHUR, CBE- 44.</p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaMobile className="text-xl sm:text-2xl text-[#361617] mt-1" />
                  <div className="text-sm sm:text-base">
                    <p>+91 95855 12307, +91 95977 90311</p>
                    <p>0422 4724341</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaEnvelope className="text-xl sm:text-2xl text-[#361617] mt-1" />
                  <p className="text-sm sm:text-base break-all">harikrishnaparkreservation@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
              <div className="flex gap-4 mt-3">
                <a href="https://www.facebook.com/harikrishnapark" target="_blank" rel="noopener noreferrer" className="text-[#361617] text-xl sm:text-2xl hover:text-[#552c14] transition">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/hotel_harikrishna_park/?locale=ko" target="_blank" rel="noopener noreferrer" className="text-[#361617] text-xl sm:text-2xl hover:text-[#552c14] transition">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/gautam-b-r-a33555330/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-[#361617] text-xl sm:text-2xl hover:text-[#552c14] transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 sm:p-8 shadow-lg rounded-xl border"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">Send Us a Message</h2>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-2 sm:p-3 rounded-lg outline-none text-sm sm:text-base"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border p-2 sm:p-3 rounded-lg outline-none text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Mobile Number"
                className="w-full border p-2 sm:p-3 rounded-lg outline-none text-sm sm:text-base"
                pattern="[0-9]{10}"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border p-2 sm:p-3 rounded-lg outline-none h-24 sm:h-32 resize-none text-sm sm:text-base"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-[#361617] text-white rounded-lg hover:bg-[#552c14] transition duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <iframe
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.259234589912!2d76.97085817480861!3d11.019166489144755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8585233e89ebb%3A0x8d7fe2c8375e50da!2sHarikrishna%20Park!5e0!3m2!1sen!2sin!4v1742850830361!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Hotel Location"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-100 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-5 rounded-lg shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold pr-4">{faq.question}</h3>
                <IoIosArrowDown
                  className={`text-lg sm:text-xl flex-shrink-0 transition-transform ${
                    openFAQ === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm sm:text-base text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
