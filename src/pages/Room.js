import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaLocationArrow, FaSnowflake, FaWifi, FaConciergeBell,
    FaBed, FaCar, FaUtensils, FaBriefcase, FaQuoteLeft
} from "react-icons/fa";


import room1 from "../assets/img/rooms/1.jpg";
import room2 from "../assets/img/rooms/1dt1.jpg";
import room3 from "../assets/img/rooms/2dts.jpg";
import Roomimg from '../assets/img/room-baner.jpg';
import { Helmet } from "react-helmet";
import HotelSchema from "../components/HotelSchema";    
import Testimonial from "../components/Testimonial";

// Slug generator
const slugify = (str) =>
    str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

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
        { id: "executive-economy-deluxe-room-single", name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free Wifi", "Cozy Bed", "AC"], occupancy: "Single", price: "₹2,350 / Night (Excl GST)" },

        { id: "executive-economy-deluxe-room-double", name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free parking", "Cozy Bed", "AC"], occupancy: "Double", price: "₹2,650 / Night (Excl GST)" },

        { id: "executive-economy-deluxe-room-double-extra-person", name: "Executive Economy (Deluxe Room)", image: room1, facilities: ["Free parking", "Cozy Bed", "AC"], occupancy: "Double + Extra Person", price: "₹3,200 / Night (Excl GST)" },


        { id: "family-suite-room-single", name: "Family Suite Room", image: room3, occupancy: "Single", facilities: ["Breakfast", "Free Parking", "AC"], price: "₹3,000 / Night (Excl GST)" },

        { id: "family-suite-room-double", name: "Family Suite Room", image: room1, occupancy: "Double", facilities: ["Free Wifi", "Cozy Bed", "AC"], price: "₹3,250 / Night (Excl GST)" },

        { id: "family-suite-room-triple", name: "Family Suite Room", image: room2, occupancy: "Triple", facilities: ["Work Desk", "24/7 Service", "AC"], price: "₹3,500 / Night (Excl GST)" },

        { id: "family-suite-room-triple-extra-person", name: "Family Suite Room", image: room2, occupancy: "Triple + Extra Person", facilities: ["Work Desk", "24/7 Service", "AC"], price: "₹4,050 / Night (Excl GST)" },

        { id: "family-suite-connecting-room", name: "Family Suite (Connecting Room )", image: room3, occupancy: "Family & Friends", facilities: ["Breakfast", "Free Parking", "AC"], price: "Contact for tarrif" },

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



    const faqs = [
        { question: "What is the check-in and check-out time?", answer: "Check-in and check-out every 24 hours." },
        { question: "Do you provide airport pick-up services?", answer: "No, we provide airport pick-up and drop services." },
        { question: "Are pets allowed in the hotel?", answer: "Unfortunately, pets are not allowed in our hotel premises." },
        { question: "What amenities are included in the room?", answer: "All rooms include free Wi-Fi, parking, 24/7 service, and cozy bedding." },
    ];

    return (
        <>
        <HotelSchema />
        <div className="bg-white text-[#361617] font-sans mt-16">
            <Helmet>
                <title>Rooms in Coimbatore for Booking in Gandhipuram, Coimbatore</title>
                <meta name="description" content="Book comfortable rooms in Coimbatore at Hotel Harikrishna Park, located near Gandhipuram, Coimbatore. Excellent service for a perfect stay." />
            </Helmet>

            {/* Hero */}
            <section className="relative h-[40vh] bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Roomimg})` }}>
                <h1 className="text-4xl font-bold text-white">Our Rooms</h1>
            </section>

            {/* Rooms */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center font-primary">Choose Your Stay</h2>
                <p className="lg:w-[80%] md:w-[100%] sm:mx-1 lg:mx-auto mt-2 text-center font-secondary"> <span className="font-bold font-primary">Looking for rooms in Coimbatore for booking?</span> <br/> Hotel Harikrishna Park offers a comfortable and affordable stay with well-resourced rooms designed to suit every traveler’s needs. Whether you're visiting for business or leisure, our hotel provides a flawless blend of modern amenities, clean and spacious rooms, and warm hospitality.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {rooms.map((room, index) => {
                        const slug = `${slugify(room.id)}`;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg text-center overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold font-primary">{room.name}</h3>
                                    <p className="text-xl font-bold mt-4 font-secondary">{room.price}</p>
                                    <p className="text-md mt-4 font-secondary"><strong>Occupancy:</strong> {room.occupancy}</p>
                                    <Link to={`/room/${slug}`} className="mt-4 block">
                                        <button className="bg-[#361617] text-white px-4 py-2 rounded-lg w-full hover:bg-[#f8d09c] hover:text-[#361617] transition duration-300">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Facilities */}
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

            {/* Testimonials */}
            <Testimonial />


            {/* FAQs */}
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
        </>
    );
}
