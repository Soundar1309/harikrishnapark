import React from "react";
import { Helmet } from "react-helmet";
import HotelSchema from "../components/HotelSchema";  

const RefundCancellationPolicy = () => {
  return (
    <>
    <HotelSchema />
    <div className="bg-white text-black px-6 lg:mt-24 md:mt-20 sm:mt-10 pt-20 pb-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Refund & Cancellation - Hotel Harikrishna Park</title>
        <meta name="description" content="View our refund and cancellation policy before booking your stay at Hotel Harikrishna Park." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-center">Refund & Cancellation Policy</h1>

      <p className="mb-6 text-base">
        We aim to offer flexible and fair cancellation terms to our guests.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Cancellation Policy</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Cancellations made 48 hours or more before check-in:</strong> Full refund</li>
          <li><strong>Cancellations made within 24–48 hours before check-in:</strong> 50% cancellation fee</li>
          <li><strong>Cancellations less than 24 hours or no-shows:</strong> No refund</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Refund Methods</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Refunds are provided via all payment methods, depending on the original mode of payment.</li>
          <li>Refunds will be processed within 7 business days after cancellation confirmation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Booking Modifications</h2>
        <p className="mb-2">
          Room modifications are subject to availability and must be requested at least 24 hours before check-in.
        </p>
        <p>
          For cancellations and assistance, contact us at:
        </p>
        <ul className="mt-2 ml-6 list-disc space-y-1">
          <li><strong>Email:</strong> <a href="mailto:support@harikrishnapark.in" className="underline">support@harikrishnapark.in</a></li>
          <li><strong>Phone:</strong> +91 95855 12307, +91 95977 90311</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default RefundCancellationPolicy;
