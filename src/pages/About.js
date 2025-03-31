import { motion } from "framer-motion";
import {
    FaWifi,
    FaParking,
    FaUtensils,
    FaConciergeBell,
    FaBed,
    FaSnowflake,
    FaCoffee,
    FaBriefcase,
    FaBullhorn, FaGlobeAmericas,
} from "react-icons/fa";
import Aboutus from "../assets/img/about-banner.jpg";
import Aboutdetails from "../assets/img/about-us2.jpg";
import Mission from "../assets/img/mission.jpg";
import Vision from "../assets/img/vission.jpg";
import FounderImage from '../assets/img/Founder.jpg'
import { title } from "framer-motion/client";

const services = [
    { icon: FaWifi, title: "Free Wi-Fi" },
    { icon: FaParking, title: "Parking" },
    { icon: FaUtensils, title: "Breakfast (on request)" },
    { icon: FaConciergeBell, title: "24/7 Service" },
    { icon: FaSnowflake, title: "Air Conditioner" },
    { icon: FaBed, title: "Cozy Rooms" },
    { icon: FaCoffee, title: "Tea & Coffee Maker" },
     { icon: FaBriefcase, title: "Work Desk" },
];

const teamMembers = [
    { name: "John Doe", role: "Manager", image: "/team1.jpg" },
    { name: "Jane Smith", role: "Receptionist", image: "/team2.jpg" },
    { name: "Mark Taylor", role: "Chef", image: "/team3.jpg" },
    { name: "Emily Johnson", role: "Housekeeping", image: "/team4.jpg" },
];

export default function About() {
    return (
        <div className="bg-white text-gray-800 font-sans mt-16">
            {/* Hero Section */}
            <section
                className="relative h-[350px] bg-cover bg-center text-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${Aboutus})` }}
            >
                <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">About Us</h1>
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
                <img
                    src={Aboutdetails}
                    alt="About Us"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-[#361617]">
                        Trusted Care, Compassionate Service
                    </h2>
                    <p className="mt-4 text-lg text-[#361617] text-justify font-secondary">
                        Welcome to Harikrishna Park Hotel, where every stay is an experience in comfort, convenience, and care. Located in the heart of Coimbatore, our hotel offers the perfect blend of modern amenities and a homely atmosphere to make your visit memorable.We are a 2-star hotel committed to providing excellent service for both business and leisure travelers. Whether you're here for an important business trip, a family getaway, or a special event, our aim is to make your stay as comfortable and convenient as possible.
                    </p>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <motion.img
                        src={Mission} // Use your desired image
                        alt="Mission and Vision"
                        className="h-[300px] md:w-[450px] md:h-[300px] object-fit rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-1/2">
                    {/* Mission Section */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-[#361617] flex items-center font-primary">
                            <FaBullhorn className="mr-3 text-xl" /> Our Mission
                        </h3>
                        <p className="mt-4 text-lg text-[#361617] text-justify font-secondary">
                            Our mission is to offer a memorable stay with personalized service, ensuring every guest feels at home. We provide a comfortable and affordable experience with modern amenities, catering to both business and leisure travelers in Coimbatore's prime location.
                        </p>
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-[#361617] flex items-center font-primary">
                            <FaGlobeAmericas className="mr-3 text-xl" /> Our Vision
                        </h3>
                        <p className="mt-4 text-lg text-[#361617] text-justify font-secondary">
                            We aim to be Coimbatore's top hospitality provider, combining modern comforts with warm service. Our goal is to offer a welcoming environment where guests feel valued, ensuring an extraordinary experience for families, business travelers, and tourists.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Founder Section */}
            <section className="bg-[#f8d09c] py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16">
                    {/* Founder Image */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }} // Initial state
                        animate={{ opacity: 1, x: 0 }} // Final state
                        transition={{ duration: 0.8 }}  // Duration for the animation
                    >
                        <img
                            src={FounderImage}
                            alt="Founder"
                            className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        />
                    </motion.div>

                    {/* Founder Message */}
                    <motion.div
                        className="w-full md:w-1/2 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }} // Initial state
                        animate={{ opacity: 1, x: 0 }} // Final state
                        transition={{ duration: 0.8, delay: 0.3 }} // Delay for message
                    >
                        <h3 className="text-3xl font-bold text-[#361617] font-primary text-center md:text-left">Message from the Founder</h3>
                        <p className="mt-4 text-lg text-[#361617] text-justify font-secondary">
                            Welcome to Harikrishna Park Hotel! I am honored to be able to share our passion for hospitality and commitment to offering exceptional service to all our guests. My vision for this hotel has always been to create a place where everyone feels at home—whether you're here for business, leisure, or a special event, our goal is to make your stay memorable.
                            <br />
                            From the beginning, we’ve always focused on maintaining the highest standards of comfort, convenience, and hospitality. Our team is dedicated to making sure that every guest enjoys a unique and personalized experience that exceeds expectations.
                            <br />
                            <br />
                            Thank you for choosing Harikrishna Park Hotel. We look forward to welcoming you and ensuring that your time with us is truly unforgettable.
                        </p>
                    </motion.div>
                </div>
            </section>



            {/* Services Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-[#361617]">Our Services</h3>
                    <p className="mt-2 text-[#361617] font-secondary">
                        We provide top-quality amenities to enhance your stay.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 font-secondary">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-[#f8d09c] rounded-lg shadow-md text-center border border-gray-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                <service.icon className="text-5xl mx-auto text-[#361617]" />
                                <p className="mt-4 font-medium text-lg">{service.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h3 className="text-3xl font-bold text-[#361617] font-secondary">
                    Our Success Stories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 font-secondary">
                    {[
                        { label: "Guests Hosted", count: "5k+" },
                        { label: "Rooms Booked", count: "10k+" },
                        { label: "Positive Reviews", count: "98%" },
                        { label: "Repeat Guests", count: "60%" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h4 className="text-4xl font-bold text-[#361617]">
                                {stat.count}
                            </h4>
                            <p className="mt-2 text-[#361617]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
