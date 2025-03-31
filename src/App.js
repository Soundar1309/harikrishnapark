import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BookingProvider } from "./components/BookingContext"; // Import Booking Context
import "../src/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingSection from "./components/popupbooking"; // Import BookingSection
import ScrollToTop from "./components/ScrollToTop"; // Import the scroll component


import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetails";
import Aboutus from "./pages/About";
import Contact from "./pages/Contact";
import Room from "./pages/Room";

// Layout component to wrap pages with Header & Footer
const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Outlet /> {/* This renders the current route's component */}
      <Footer />
    </>
  );
};

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap with Header & Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Room /> },
      { path: "/room/:id", element: <RoomDetail /> },
      { path: "/about-us", element: <Aboutus /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return (
    <BookingProvider>
      <RouterProvider router={router} />
      <BookingSection />
    </BookingProvider>
  );
};


export default App;
