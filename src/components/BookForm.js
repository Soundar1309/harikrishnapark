import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";

export default function BookingForm() {
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    adults: "",
    kids: "",
    roomType: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", mobile: "", email: "" });

  // Check if all booking fields are filled
  const isBookingValid = Object.values(booking).every((field) => field.trim() !== "");

  // Check if user details are filled
  const isUserDetailsValid = Object.values(userDetails).every((field) => field.trim() !== "");

  // Function to reset the form
  const resetForm = () => {
    setBooking({ checkIn: "", checkOut: "", adults: "", kids: "", roomType: "" });
    setUserDetails({ name: "", mobile: "", email: "" });
    setShowPopup(false);
  };

  return (
    <div>
      {/* Booking Form */}
      <motion.div
        className="w-full bg-white p-6 shadow-lg rounded-lg"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center">Book Your Stay</h2>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (isBookingValid) setShowPopup(true);
          }}
        >
          <div className="border p-3 flex items-center">
            <FaCalendarAlt className="mr-2" />
            <input
              type="date"
              className="w-full outline-none"
              value={booking.checkIn}
              onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
            />
          </div>

          <div className="border p-3 flex items-center">
            <FaCalendarAlt className="mr-2" />
            <input
              type="date"
              className="w-full outline-none"
              value={booking.checkOut}
              onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
            />
          </div>

          <div className="border p-3 flex items-center">
            <FaUserFriends className="mr-2" />
            <input
              type="number"
              min="1"
              className="w-full outline-none"
              placeholder="Adults"
              value={booking.adults}
              onChange={(e) => setBooking({ ...booking, adults: e.target.value })}
            />
          </div>

          <div className="border p-3 flex items-center">
            <FaUserFriends className="mr-2" />
            <input
              type="number"
              min="0"
              className="w-full outline-none"
              placeholder="Kids"
              value={booking.kids}
              onChange={(e) => setBooking({ ...booking, kids: e.target.value })}
            />
          </div>

          <div className="border p-3 flex items-center">
            <select
              className="w-full outline-none"
              value={booking.roomType}
              onChange={(e) => setBooking({ ...booking, roomType: e.target.value })}
            >
              <option value="">Select Room Type</option>
              <option value="Deluxe Room">Executive Economy Room (Deluxue)</option>
              <option value="Executive Suite">Suite Room</option>
              <option value="Family Suite">Family Suite Room</option>
            </select>
          </div>

          <button
            className={`w-full py-3 rounded-md text-white ${
              isBookingValid ? "bg-[#361617] hover:bg-[#552c14]" : "bg-accent/20 text-[#361617] font-semibold cursor-not-allowed"
            }`}
            disabled={!isBookingValid}
            type="submit"
          >
            Reserve Now
          </button>
        </form>
      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold text-center">Enter Your Details</h2>
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (isUserDetailsValid) {
                  alert("Booking confirmed!");
                  resetForm(); // Reset the form after submission
                }
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border p-2 rounded"
                value={userDetails.mobile}
                onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
              <button
                className={`w-full py-2 text-white rounded ${
                  isUserDetailsValid ? "bg-[#361617] hover:bg-[#552c14]" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isUserDetailsValid}
                type="submit"
              >
                Confirm Booking
              </button>
            </form>
            <button className="mt-4 text-red-500 underline w-full" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
