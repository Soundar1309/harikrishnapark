import { useParams } from "react-router-dom";
import React, { useState, useMemo } from "react";
import { FaBed, FaShower, FaWifi, FaParking, FaMapMarkerAlt, FaUser, FaTimes, FaQuoteLeft, FaCoffee, FaBriefcase, FaSnowflake, FaDoorClosed, FaDoorOpen, FaUserCircle, } from "react-icons/fa";
import { motion } from "framer-motion";
import room1 from "../assets/img/rooms/1.jpg";
import room2 from "../assets/img/rooms/1dt1.jpg";
import room3 from "../assets/img/2dts.jpg";
import { Helmet } from "react-helmet";
import { useBooking } from "../components/BookingContext";  
import HotelSchema from "../components/HotelSchema";


const rooms = [
  {
    id: "executive-economy-deluxe-room-single",
    name: "Executive Economy (Deluxe Room)",
    image: room1,
    images: [room2, room3],
    occupancy: "Single",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Bathroom" },
      { icon: FaCoffee, label: "Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹2,350 / Night",
    description: "Luxury stay for solo travelers, ensuring privacy and comfort.",
    extraPersons: "-"
  },
  {
    id: "executive-economy-deluxe-room-double",
    name: "Executive Economy (Deluxe Room)",
    image: room1,
    images: [room2, room3],
    occupancy: "Double",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Bathroom" },
      { icon: FaCoffee, label: "Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹2,650 / Night",
    description: "Perfect for couples or friends traveling together.",
    extraPersons: "-"
  },
  {
    id: "executive-economy-deluxe-room-double-extra-person",
    name: "Executive Economy (Deluxe Room)",
    image: room1,
    images: [room2, room3],
    occupancy: "Double + Extra Person",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Bathroom" },
      { icon: FaCoffee, label: "Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹3,200 / Night",
    description: "Perfect for couples or friends traveling together.",
    extraPersons: "Rs.550 (Excl. GST)"
  },
  {
    id: "family-suite-room-single",
    name: "Family Suite Room",
    image: room2,
    images: [room1, room3],
    occupancy: "Single",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Luxury Bathroom" },
      { icon: FaCoffee, label: "In-Room Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹3,000 / Night",
    description: "A spacious suite designed for single travelers.",
    extraPersons: "-"
  },
  {
    id: "family-suite-room-double",
    name: "Family Suite Room - Double Occupancy",
    image: room2,
    images: [room1, room3],
    occupancy: "Double",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Luxury Bathroom" },
      { icon: FaCoffee, label: "In-Room Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹3,250 / Night",
    description: "Perfect for couples or business travelers.",
    extraPersons: "-"
  },
  {
    id: "family-suite-room-triple",
    name: "Family Suite Room - Triple Occupancy",
    image: room2,
    images: [room1, room3],
    occupancy: "Triple",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Luxury Bathroom" },
      { icon: FaCoffee, label: "In-Room Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹3,500 / Night",
    description: "Ideal for groups or small families.",
    extraPersons: "-"
  },
  {
    id: "family-suite-room-triple-extra-person",
    name: "Family Suite Room",
    image: room2,
    images: [room1, room3],
    occupancy: "Triple + Extra Person",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaBed, label: "Cozy Bed" },
      { icon: FaShower, label: "Luxury Bathroom" },
      { icon: FaCoffee, label: "In-Room Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
    ],
    price: "₹4,050 / Night",
    description: "Ideal for groups or small families.",
    extraPersons: "Rs.550 (Excl. GST)"
  },
  {
    id: "family-suite-connecting-room",
    name: "Family Suite (Connecting Room )",
    image: room3,
    images: [room1, room2],
    occupancy: "Family & Friends",
    facilities: [
      { icon: FaWifi, label: "Free Wifi" },
      { icon: FaDoorOpen, label: "Connected Rooms" },
      { icon: FaBed, label: "Cozy Beds" },
      { icon: FaShower, label: "Spacious Bathroom" },
      { icon: FaCoffee, label: "Tea & Coffee Maker" },
      { icon: FaBriefcase, label: "Work Desk" },
      { icon: FaSnowflake, label: "Air Conditioner" },
      { icon: FaDoorClosed, label: "Spacious Wardrobe" },
      { icon: FaUser, label: "24/7 Service" },
      { icon: FaParking, label: "Free Parking" },
      { icon: FaMapMarkerAlt, label: "Family-Friendly Location" },
    ],
    price: "Contact for tarrif",
    description: "Perfect for families, our Family Room offers ample space, comfort, and convenience. With multiple beds, a spacious bathroom, and a cozy seating area, this room ensures a relaxing stay for guests of all ages. Enjoy complimentary Wi-Fi, a tea & coffee maker, climate control, and a work desk. Located in a family-friendly area, our Family Room is the perfect choice for those traveling with loved ones.",
    extraPersons: "-"
  }
];

const testimonials = [
  { name: "Anushree Creation", review: "I had my business trip to coimbatore and me my staff's stayed here in this hotel. Very nice and safe for all type of travelers. Staffing and even Owner is very friendly with great hospitality.", roomId:"executive-economy-deluxe-room-single" },
  { name: "Ram Krishna", review: "Room was spacious for a family . Service was good. Located very near to Gandipuram main bus station. Breakfast was good. Nice stay with affordable price.", roomId: "executive-economy-deluxe-room-double" },
  { name: "Ravi", review: "Very nice and clean hotel, a best place to stay with family. Nice staffing and value for what we pay.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { name: "Sahupramodkumar Sipu", review: "Very nice properly, well maintained, nice location.good staff.I enjoyed my stay here thanks.", roomId:"executive-economy-deluxe-room-single" },
  { name: "Joseph Paul", review: "Very nice property and good service by the hotel staff. Friendly atmosphere", roomId: "family-suite-room-single" },
  { name: "Roshan Dabbi", review: "I stayed 2 days .The stay was very quite and lavish.They were maintained rooms very clean and neat .The stay was worthy and comfortable.", roomId: "family-suite-room-double" },
  { name: "Sahupramodkumar Sipu", review: "Very nice properly, well maintained, nice location.good staff.I enjoyed my stay here thanks.", roomId: "family-suite-room-triple-extra-person" },
  { name: "Joseph Paul", review: "Very nice property and good service by the hotel staff. Friendly atmosphere", roomId: "family-suite-room-triple-extra-person" },
  { name: "Roshan Dabbi", review: "I stayed 2 days .The stay was very quite and lavish.They were maintained rooms very clean and neat .The stay was worthy and comfortable.", roomId: "family-suite-room-triple-extra-person" },
  { name: "Vijay Seenivasan", review: "Fantastic place to stay and staffs are very comfortable and supportive.", roomId: "family-suite-room-triple" },
  { name: "SAJEESH KV", review: "Good spacious rooms and well maintained.", roomId: "executive-economy-deluxe-room-double" },
  { name: "Bala chandar", review: "Property was clean and well maintained. Staffs are very friendly. Highly recommend the stay here.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { name: "Sharmadha Gautam", review: "Best place to stay .. It is a new hotel with comfortable , spacious and with a luxurious looks..very cleanly maintained and excellent service..very quite calming place in the centre of the city close to gandhipuram bus stand just 1 km away.", roomId: "family-suite-room-single" },
  { name: "Soundar Rajan", review: "I had a great experience at Hotel Harikrishna Park. The ambience is excellent, and the luxury rooms provide a comfortable stay. I chose this hotel for my business trip, and they offered a fair price, which I truly appreciated.", roomId: "family-suite-room-double" },
  { name: "Anushree Creation", review: "I had my business trip to coimbatore and me my staff's stayed here in this hotel. Very nice and safe for all type of travelers. Staffing and even Owner is very friendly with great hospitality.", roomId: "family-suite-room-triple" },
  { name: "Anushree Creation", review: "I had my business trip to coimbatore and me my staff's stayed here in this hotel. Very nice and safe for all type of travelers. Staffing and even Owner is very friendly with great hospitality.", roomId: "family-suite-room-triple" },
  { name: "Ram Krishna", review: "Room was spacious for a family . Service was good. Located very near to Gandipuram main bus station. Breakfast was good. Nice stay with affordable price.", roomId: "family-suite-room-double" },
  { name: "Ravi", review: "Very nice and clean hotel, a best place to stay with family. Nice staffing and value for what we pay.", roomId: "family-suite-room-single" },
  { name: "Joseph Paul", review: "Very nice property and good service by the hotel staff. Friendly atmosphere",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { name: "Vijay Seenivasan", review: "Fantastic place to stay and staffs are very comfortable and supportive.", roomId: "executive-economy-deluxe-room-double" },
  { name: "SAJEESH KV", review: "Good spacious rooms and well maintained.", roomId:"executive-economy-deluxe-room-single" },
  { name: "Joseph Paul", review: "Very nice property and good service by the hotel staff. Friendly atmosphere", roomId: "family-suite-connecting-room" },
  { name: "Vijay Seenivasan", review: "Fantastic place to stay and staffs are very comfortable and supportive.", roomId: "family-suite-connecting-room" },
  { name: "SAJEESH KV", review: "Good spacious rooms and well maintained.", roomId: "family-suite-connecting-room" },
];

const faqs = [
  // Common FAQs for all rooms
  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId:"executive-economy-deluxe-room-single" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId:"executive-economy-deluxe-room-single" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId:"executive-economy-deluxe-room-single" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId: "executive-economy-deluxe-room-double" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId: "executive-economy-deluxe-room-double" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "executive-economy-deluxe-room-double" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.",roomId: "executive-economy-deluxe-room-double-extra-person", },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24hours.", roomId: "family-suite-room-single" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide airport pick-up and drop services upon request.", roomId: "family-suite-room-single" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "family-suite-room-single" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId: "family-suite-room-double" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId: "family-suite-room-double" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "family-suite-room-double" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId: "family-suite-room-triple" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId: "family-suite-room-triple" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "family-suite-room-triple" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId: "family-suite-room-triple-extra-person" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId: "family-suite-room-triple-extra-person" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "family-suite-room-triple-extra-person" },

  { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours.", roomId: "family-suite-connecting-room" },
  { question: "Do you provide airport pick-up services?", answer: "No, we provide  pick-up services.", roomId: "family-suite-connecting-room" },
  { question: "Are pets allowed?", answer: "Unfortunately, we do not allow pets in the hotel.", roomId: "family-suite-connecting-room" },

  // Executive Economy - Deluxe Room (Room 1, 4, 6)
  { question: "What amenities are included in this room?", answer: "This room includes air conditioning, free Wi-Fi, a cozy bed, a private bathroom, a work desk, and a TV.", roomId:"executive-economy-deluxe-room-single" },
  { question: "Is breakfast included with the stay?", answer: "Breakfast is available upon request at an additional charge.", roomId:"executive-economy-deluxe-room-single" },
  { question: "Does the room have a balcony?", answer: "No, the Executive Economy - Deluxe Room does not include a balcony.", roomId:"executive-economy-deluxe-room-single" },

  { question: "What amenities are included in this room?", answer: "This room includes air conditioning, free Wi-Fi, a cozy bed, a private bathroom, a work desk, and a TV.", roomId: "family-suite-room-single" },
  { question: "Is breakfast included with the stay?", answer: "Breakfast is available upon request at an additional charge.", roomId: "family-suite-room-single" },
  { question: "Is room service available 24/7?", answer: "Yes, we offer 24/7 room service for your convenience.", roomId: "family-suite-room-single" },

  { question: "What amenities are included in this room?", answer: "This room includes air conditioning, free Wi-Fi, a cozy bed, a private bathroom, a work desk, and a TV.", roomId: "family-suite-room-triple" },
  { question: "Is breakfast included with the stay?", answer: "Breakfast is available upon request at an additional charge.", roomId: "family-suite-room-triple" },
  { question: "Is room service available 24/7?", answer: "Yes, we offer 24/7 room service for your convenience.", roomId: "family-suite-room-triple" },

  // Family Suite Room (Room 2, 5)
  { question: "What amenities are included in this room?", answer: "This room features an air-conditioned hall and bedroom, a private bathroom, a cozy bed, free Wi-Fi, a work desk, and a TV.", roomId: "executive-economy-deluxe-room-double" },
  { question: "Can extra beds be added to the Family Suite Room?", answer: "Yes, we provide extra beds upon request for an additional charge.", roomId: "executive-economy-deluxe-room-double" },
  { question: "Does the Family Suite Room have a dining area?", answer: "Yes, the suite includes a small dining area in the hall space.", roomId: "executive-economy-deluxe-room-double" },

  { question: "What amenities are included in this room?", answer: "This room features an air-conditioned hall and bedroom, a private bathroom, a cozy bed, free Wi-Fi, a work desk, and a TV.", roomId: "family-suite-room-double" },
  { question: "Can extra beds be added to the Family Suite Room?", answer: "Yes, we provide extra beds upon request for an additional charge.", roomId: "family-suite-room-double" },
  { question: "Does the Family Suite Room have a dining area?", answer: "No, the suite have a dining area.", roomId: "family-suite-room-double" },

  // Family Suite - Connecting Room (Room 3)
  { question: "What amenities are included in this room?", answer: "This room combines the Executive Economy and Family Suite, offering air conditioning, a private bathrooms, a cozy bed, a work desk, free Wi-Fi, and a TV.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { question: "How many guests can stay in the Family Suite - Connecting Room?", answer: "This room is ideal for large families and can accommodate up to 6 guests.",roomId: "executive-economy-deluxe-room-double-extra-person", },
  { question: "Is there a shared living space between the two connected rooms?", answer: "Yes, the connecting room has a shared living area for guests to relax.",roomId: "executive-economy-deluxe-room-double-extra-person", },

  { question: "Is there a shared living space between the two connected rooms?", answer: "Yes, the connecting room has a shared living area for guests to relax.", roomId: "family-suite-room-triple-extra-person" },
  { question: "Does the Family Suite Room have a dining area?", answer: "No, the suite have a dining area.", roomId: "family-suite-room-triple-extra-person" },
  { question: "Can extra beds be added to the Family Suite Room?", answer: "Yes, we provide extra beds upon request for an additional charge.", roomId: "family-suite-room-triple-extra-person" },

  { question: "What amenities are included in this room?", answer: "This room features an air-conditioned hall and bedroom, a private bathroom, a cozy bed, free Wi-Fi, a work desk, and a TV.", roomId: "family-suite-connecting-room" },
  { question: "Is room service available 24/7?", answer: "Yes, we offer 24/7 room service for your convenience.", roomId: "family-suite-connecting-room" },
  { question: "Does the Family Suite Room have a dining area?", answer: "No, the suite have a dining area.", roomId: "family-suite-connecting-room" },

];

export default function RoomDetail() {
  const { id } = useParams();
  const room = useMemo(() => rooms.find((r) => r.id === id.toString()), [id]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const { setIsOpen } = useBooking();

  const handleReserveClick = () => {
    setIsOpen(true);
  };

  const roomTestimonials = useMemo(() => testimonials.filter((t) => t.roomId === (room?.id)), [room]);
  const roomFaqs = useMemo(() => faqs.filter((f) => f.roomId === (room?.id)), [room]);

  if (!room) return <h2 className="text-center mt-10">Room not found</h2>;

  return (
    <>
    <HotelSchema /> 
    <div>
      <Helmet>
        <title>{room ? `${room.name} - Hotel Harikrishna Park` : 'Room Details - Hotel Harikrishna Park'}</title>
        <meta name="description" content={room ? room.description : 'Room details at Hotel Harikrishna Park.'} />
        <link rel="canonical" href={`https://harikrishnapark.in/room/${id}`} />
      </Helmet>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen" className="max-w-full mt-24 max-h-full" />
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setFullscreenImage(null)}><FaTimes /></button>
        </div>
      )}

      {/* Image Section with Two Columns */}
      <div className="max-w-[80%] mx-auto px-6 py-16 gap-6">
        <div className="flex flex-col gap-4">
          <img src={room.image} alt={room.name} className="w-full h-96 object-cover rounded-lg cursor-pointer" onClick={() => setFullscreenImage(room.image)} />
          <div className="flex gap-4">
            {room.images.map((img, index) => (
              <img key={index} src={img} alt={`room-${index}`} className="w-1/2 h-48 object-cover rounded-lg cursor-pointer" onClick={() => setFullscreenImage(img)} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold">{room.name}</h1>
          <p className="text-xl text-[#6f391d] font-semibold mt-2">{room.price} (Excl.GST)</p>
          <p className="mt-4 text-gray-700 text-justify">{room.description}</p>
          <p className="mt-4 text-gray-700 text-justify"><strong>Occupancy:</strong> {room.occupancy}</p>
          <p className="mt-4 text-gray-700 text-justify"><strong>Extra Person:</strong> {room.extraPersons}</p>

          {/* Facilities Section */}
          <section className="py-16 text-center">
            <h2 className="text-2xl text-left font-bold">Room Facilities :</h2>
            <div className="mt-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
              {room.facilities.map((facility, index) => (
                <motion.div key={index} className="flex items-center p-2" whileHover={{ scale: 1.1 }}>
                  <facility.icon className="text-xl text-[#6f391d] mr-3" />
                  <p className="font-medium font-secondary">{facility.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Form - Right Side */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-xl h-fit border border-gray-200">
          <h3 className="text-xl font-bold text-[#361617] mb-4">Book Your Stay</h3>

          <p className="text-gray-700 text-sm mb-6">
            Planning your stay at Harikrishna Park Hotel? Click the button below to book your room.
          </p>
          <button
            onClick={handleReserveClick}
            className="w-full bg-[#361617] text-[#f8d09c] px-3 py-2 rounded-lg hover:text-[#361617] hover:bg-[#f8d09c] transition text-base"
          >
            Reserve Now
          </button>
        </div>

      </div>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">What Our Guests Say</h2>
        <div className="mt-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {roomTestimonials.length > 0 ? (
            roomTestimonials.map((review, index) => (
              <motion.div key={index} className="bg-white text-center p-6 rounded-lg shadow-md">
                <FaQuoteLeft className="text-2xl text-[#6f391d] mb-3 mx-auto" />
                <FaUserCircle className="text-4xl text-[#6f391d] mx-auto" />
                <p className="text-gray-600 italic">"{review.review}"</p>
                <h4 className="mt-4 font-bold">{review.name}</h4>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 italic">No reviews yet for this room.</p>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {roomFaqs.length > 0 ? (
            roomFaqs.map((faq, index) => (
              <motion.div key={index} className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 italic text-center">No FAQs available for this room.</p>
          )}
        </div>
      </section>
    </div>
    </>
  );
}