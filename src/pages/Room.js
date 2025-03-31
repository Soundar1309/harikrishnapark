import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaSnowflake, FaWifi, FaConciergeBell, FaBed, FaCar, FaUtensils, FaBriefcase, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import room1 from "../assets/img/rooms/1.jpg";
import room2 from "../assets/img/rooms/1dt1.jpg";
import room3 from "../assets/img/rooms/2dts.jpg";

import Roomimg from '../assets/img/room-baner.jpg';

export default function RoomShowcase() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const rooms = [
        { id: 1, name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free Wifi", "Cozy Bed", "AC"], occupancy: "Single", price: "₹2,350 / Night (Excl GST)" },

        { id: 2, name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free parking", "Cozy Bed", "AC"], occupancy: "Double", price: "₹2,650 / Night (Excl GST)" },

        { id: 3, name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free parking", "Cozy Bed", "AC"], occupancy: "Double + Extra Person", price: "₹3,200 / Night (Excl GST)" },


        { id: 4, name: "Family Suite Room", image: room3, occupancy: "Single", facilities: ["Breakfast", "Free Parking", "AC"], price: "₹3,000 / Night (Excl GST)" },

        { id: 5, name: "Family Suite Room", image: room1, occupancy: "Double", facilities: ["Free Wifi", "Cozy Bed", "AC"], price: "₹3,250 / Night (Excl GST)"},

        { id: 6, name: "Family Suite Room", image: room2, occupancy: "Triple", facilities: ["Work Desk", "24/7 Service", "AC"], price: "₹3,500 / Night (Excl GST)" },

        { id: 7, name: "Family Suite Room", image: room2, occupancy: "Triple + Extra Person", facilities: ["Work Desk", "24/7 Service", "AC"], price: "₹4,050 / Night (Excl GST)" },

        { id: 8, name: "Family Suite (Connecting Room )", image: room3, occupancy: "Family & Friends", facilities: ["Breakfast", "Free Parking", "AC"],  price: "Contact for tarrif" },
        
    ];

    

    const facilities = [
        { icon: FaWifi, label: "Free WiFi" },
        { icon: FaConciergeBell, label: "24/7 Service" },
        { icon: FaBed, label: "Cozy Bed" },
        { icon: FaCar, label: "Free Parking" },
        { icon: FaUtensils, label: "Breakfast (on request)" },
        { icon: FaBriefcase, label: "Work Desk" },
        { icon: FaSnowflake, label: "Air Conditioning" },
        { icon: FaLocationArrow, label: "Nearby Location" },
    ];

    const testimonials = [
        { name: "Anushree Creation", review: "I had my business trip to coimbatore and me my staff's stayed here in this hotel. Very nice and safe for all type of travelers. Staffing and even Owner is very friendly with great hospitality." },
        { name: "Ram Krishna", review: "Room was spacious for a family . Service was good. Located very near to Gandipuram main bus station. Breakfast was good. Nice stay with affordable price." },
        { name: "Ravi", review: "Very nice and clean hotel, a best place to stay with family. Nice staffing and value for what we pay." },
        { name: "Sahupramodkumar Sipu", review: "Very nice properly, well maintained, nice location.good staff.I enjoyed my stay here thanks." },
    ];

    const faqs = [
        { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours." },
        { question: "Do you provide airport pick-up services?", answer: "No, we provide airport pick-up and drop services." },
        { question: "Are pets allowed in the hotel?", answer: "Unfortunately, pets are not allowed in our hotel premises." },
        { question: "What amenities are included in the room?", answer: "All rooms include free Wi-Fi, parking, 24/7 service, and cozy bedding." },
    ];

    return (
        <div className="bg-white text-[#361617] font-sans mt-16">
            {/* Hero Section */}
            <section className="relative h-[40vh] bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Roomimg})` }}>
                <h1 className="text-4xl font-bold text-white">Our Rooms</h1>
            </section>

            {/* Room Showcase */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center font-primary">Choose Your Stay</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            className="bg-white rounded-lg text-center overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl text-center font-semibold font-primary">{room.name}</h3>
                                <p className="text-xl font-bold mt-4 font-secondary">{room.price}</p>
                                <p className="text-md mt-4  font-secondary"> <strong>Occupancy:</strong> {room.occupancy}</p>
                                <Link to={`/room/${room.id}`} className="mt-4 block">
                                    <button className="bg-[#361617] text-white px-4 py-2 rounded-lg w-full hover:bg-[#f8d09c] hover:text-[#361617] transition duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-16 bg-[#f8d09c] text-center">
                <h2 className="text-3xl font-bold">Our Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto px-6">
                    {facilities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                        >
                            <item.icon className="text-4xl text-[#361617]" />
                            <p className="mt-3 font-semibold">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Slider */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold">
                    What do our <span className="text-[#361617]">Customers Say?</span>
                </h2>
                <div className="max-w-6xl mx-auto px-6 mt-12">
                    <Slider {...sliderSettings} className="px-4 md:px-8">
                        {testimonials.map((review, index) => (
                            <motion.div
                                key={index}
                                className="bg-white h-[250px] p-6 rounded-lg shadow-md text-center mx-4 md:mx-12"
                            >
                                <FaQuoteLeft className="text-3xl text-[#361617] mx-auto mb-3" />
                                <p className="text-gray-600 italic">"{review.review}"</p>
                                <h4 className="mt-4 font-bold">{review.name}</h4>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100 px-6">
                <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="mt-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <motion.div key={index} className="bg-white p-5 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
