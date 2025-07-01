import React from "react";
import { Helmet } from "react-helmet";
import HotelSchema from "../components/HotelSchema";



const PrivacyPolicy = () => {
  return ( 
    <>
      <HotelSchema />
    <div className="bg-white text-black px-6 lg:mt-24 md:mt-20 sm:mt-10 pt-20 pb-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Privacy Policy - Hotel Harikrishna Park</title>
        <meta name="description" content="Read our privacy policy at Hotel Harikrishna Park in Coimbatore." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-6 text-base">
        At Hotel Harikrishna Park, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, ID details, and payment information for bookings and communication.</p>
        <p><strong>Non-Personal Information:</strong> IP address, browser type, and pages visited for improving user experience.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To confirm and manage bookings</li>
          <li>To provide customer service</li>
          <li>To process payments</li>
          <li>To enhance and optimize our website</li>
          <li>To comply with legal requirements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Data Protection</h2>
        <p>We use secure methods to protect your personal data, but note that no internet transmission is 100% secure.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Sharing of Information</h2>
        <p className="mb-2">We do not sell or share your data with third parties except:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>When required to process payments</li>
          <li>When required by law</li>
          <li>With your explicit consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p>You may request to access, update, or delete your data at any time by contacting us.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:support@harikrishnapark.in" className="underline">support@harikrishnapark.in</a><br />
          <strong>Phone:</strong> +91 95855 12307, +91 95977 90311
        </p>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicy;
