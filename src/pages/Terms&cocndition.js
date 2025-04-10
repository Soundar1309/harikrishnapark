import React from "react";
import { Helmet } from "react-helmet";


const TermsAndConditions = () => {
  return (
    <div className="bg-white text-black px-6 lg:mt-28 pt-10 pb-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Terms & Conditions - Hotel Harikrishna Park</title>
        <meta name="description" content="Please review the terms and conditions for booking and staying at Hotel Harikrishna Park." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-6 text-base">
        Welcome to the official website of Hotel Harikrishna Park. By accessing or using our site, you agree to the following terms:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Booking Policy</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Room bookings can be made online or directly at the hotel.</li>
          <li>A valid ID is required at check-in.</li>
          <li>Full payment is required upon arrival.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Check-In & Check-Out Policy</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>For direct bookings:</strong> 24/7 check-in and check-out available.</li>
          <li><strong>For online travel platform bookings:</strong> 12:00 PM to 12:00 PM.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Payments</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>We accept credit/debit cards, UPI, net banking, and cash.</li>
          <li>All transactions must be completed in Indian Rupees (INR).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Guest Conduct</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Guests must maintain hotel decorum and respect the property.</li>
          <li>Hotel Harikrishna Park reserves the right to deny service for disruptive behavior.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Website Use</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Website content is the property of Hotel Harikrishna Park.</li>
          <li>You may not copy, reproduce, or misuse content without permission.</li>
          <li>Use of the site must comply with Indian law.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p>
          Hotel Harikrishna Park is not liable for indirect or incidental damages arising from the use of our website or services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Governing Law</h2>
        <p>
          All disputes are subject to the jurisdiction of courts in Coimbatore, Tamil Nadu, India.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
