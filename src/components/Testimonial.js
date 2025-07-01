import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anushree Creation",
    review:
      "I had my business trip to Coimbatore and me my staff's stayed here in this hotel. Very nice and safe for all type of travelers. Staffing and even Owner is very friendly with great hospitality.",
    avatar: "https://ui-avatars.com/api/?name=Anushree+Creation&background=361617&color=fff"
  },
  {
    name: "Ram Krishna",
    review:
      "Room was spacious for a family. Service was good. Located very near to Gandipuram main bus station. Breakfast was good. Nice stay with affordable price.",
    avatar: "https://ui-avatars.com/api/?name=Ram+Krishna&background=361617&color=fff"
  },
  {
    name: "Ravi",
    review:
      "Very nice and clean hotel, a best place to stay with family. Nice staffing and value for what we pay.",
    avatar: "https://ui-avatars.com/api/?name=Ravi&background=361617&color=fff"
  },
  {
    name: "Badrirsm",
    review:
      "Excellent service offered by the hotel team. Very well and cleanly maintained Rooms and toilets. Truely great value for money. Above all the owner Mr. Gautam B R is very nice and humble. My best wishes for all.",
    avatar: "https://ui-avatars.com/api/?name=Badrirsm&background=361617&color=fff"
  },
  {
    name: "Ramanujam Muralimohan",
    review:
      "Stayed with my family—super clean rooms, polite staff, great location near Gandhipuram, and delicious food. Special thanks to Mr. Gautam for his helpful guidance. Fantastic stay!",
    avatar: "https://ui-avatars.com/api/?name=Ramanujam+Muralimohan&background=361617&color=fff"
  },
  {
    name: "Livin Joseph",
    review:
      "Good ambience and peaceful place and wonderful service.",
    avatar: "https://ui-avatars.com/api/?name=Livin+Joseph&background=361617&color=fff"
  }
];

export default function Testimonial() {
  // To show 3 columns and 2 rows, we need 6 testimonials. We'll duplicate the existing ones if needed.
  const testimonialsToShow = testimonials.length >= 6
    ? testimonials.slice(0, 6)
    : [
        ...testimonials,
        ...testimonials.slice(0, 6 - testimonials.length)
      ];

  return (
    <section className="py-20 bg-gray-100 text-center relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#fff] via-[#fff] to-[#fff] opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#361617] mb-3 font-primary">
          Guest Testimonials
        </h2>
        <p className="text-[#361617]/80 mb-12 max-w-2xl mx-auto font-secondary">
          Hear from our valued guests about their experiences at Hotel Harikrishna Park.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToShow.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="flex flex-col bg-white rounded-xl text-left overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#f3e0c2] min-h-[340px] relative"
            >
              <div className="p-7 flex flex-col flex-1">
                <FaQuoteLeft className="text-3xl text-[#f8d09c] mb-4 opacity-80" />
                <p className="text-lg text-[#361617] leading-relaxed mb-6 font-secondary italic">
                  {review.review}
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-[#f8d09c]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-[#361617] mr-4 shadow"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-[#361617] text-base font-primary">{review.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
