import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { BookingProvider } from "./components/BookingContext";
import "../src/index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingSection from "./components/PopupBooking";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetails";
import Aboutus from "./pages/About";
import Contact from "./pages/Contact";
import Room from "./pages/Room";
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsAndConditions from "./pages/Terms&cocndition";
import RefundCancellationPolicy from "./pages/Refund&cancellation";
import ThankYou from "./pages/thank-you";
import { Helmet } from 'react-helmet';


// ✅ Layout includes BookingSection now
const Layout = () => {
  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QD1HNKEKS1"></script>

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16970085733"></script>

        {/* Combined gtag config */}
        <script>{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QD1HNKEKS1');
    gtag('config', 'AW-16970085733');
  `}</script>

        {/* Meta Pixel */}
        <script>{`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1857840984978073');
    fbq('track', 'PageView');
  `}</script>

        {/* ✅ FIXED Meta Pixel <noscript> with string child */}
        <noscript>{`
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1857840984978073&ev=PageView&noscript=1" />
  `}</noscript>
      </Helmet>

      <Header />
      <ScrollToTop />
      <Outlet />
      <BookingSection />
      <Footer />

      <a
        href="https://wa.me/919585512307"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[#4dc247] p-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
      >
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" />
        </svg>
      </a>


    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Room /> },
      { path: "/room/:id", element: <RoomDetail /> },
      { path: "/about-us", element: <Aboutus /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-and-condition", element: <TermsAndConditions /> },
      { path: "/refund-and-cancellation", element: <RefundCancellationPolicy /> },
      { path: "/thank-you", element: <ThankYou /> },
    ],
  },
]);

const App = () => {
  return (
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  );
};

export default App;
