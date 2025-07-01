import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSlider from '../components/HeroSlider';
import Header from '../components/Header';
import HotelSchema from "../components/HotelSchema";


const Home = () => {
  return (
    <>
      <HotelSchema />
      <Helmet>
        <title>Best Hotel to Stay in Coimbatore – Hotel Harikrishna Park</title>
        <meta
          name="description"
          content="Hotel Harikrishna Park, the best hotel to stay in Coimbatore. Luxury & Comfort. A home away from home, Unparalleled hospitality and top-notch services."
        />
      </Helmet>
      <Header />
      <HeroSlider />
    </>
  );
};

export default Home;
