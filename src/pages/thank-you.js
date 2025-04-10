import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


export default function ThankYou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f8d09c] to-[#fbeed2] px-4">
       <Helmet>
        {/* Google Ads base tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16970085733"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16970085733');
          gtag('event', 'conversion', {'send_to': 'AW-16970085733/Rxx-CLK3jbQaEOXq-5s_'});
        `}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </motion.div>
        <h1 className="text-3xl font-extrabold text-[#6f391d] mb-2">
          Thank You!
        </h1>
        <p className="text-[#6f391d] text-base mb-1">
          Your booking has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to homepage in <span className="font-semibold">{seconds}</span> second{seconds !== 1 && "s"}...
        </p>
      </motion.div>
    </div>
  );
}
