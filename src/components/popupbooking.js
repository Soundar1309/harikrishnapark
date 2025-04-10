import { useBooking } from "../components/BookingContext";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

export default function BookingSection() {
  const { isOpen, setIsOpen } = useBooking();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    roomType: "",
    adults: "1",
    kids: "0",
    checkin: "",
    checkout: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.roomType) newErrors.roomType = "Room type is required";
    if (!formData.adults || formData.adults < 1 || formData.adults > 4)
      newErrors.adults = "Adults must be between 1 and 4";
    if (formData.kids < 0 || formData.kids > 2)
      newErrors.kids = "Kids must be between 0 and 2";
    if (!formData.checkin) newErrors.checkin = "Check-in date is required";
    if (!formData.checkout) {
      newErrors.checkout = "Check-out date is required";
    } else if (new Date(formData.checkout) <= new Date(formData.checkin)) {
      newErrors.checkout = "Check-out must be after check-in";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitted) {
      alert("You've already submitted a booking. Please wait.");
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycby6jLOjgdAqTKRPq9xMH4SHEl_uwmLngi94rpUrGMBnkXh1E8r89CdVbjsiiod_RY2DaQ/exec";

      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, val]) =>
        formPayload.append(key, val)
      );

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: formPayload,
        });

        const result = await response.text();
        console.log("Server response:", result);

        if (result.includes("Success")) {
          setIsOpen(false);
          setIsSubmitted(true);
          navigate("/thank-you");
          setTimeout(() => {
            navigate("/");
            setIsSubmitted(false);
          }, 5000);

          setFormData({
            name: "",
            email: "",
            mobile: "",
            roomType: "",
            adults: "1",
            kids: "0",
            checkin: "",
            checkout: "",
          });
        } else {
          alert("Booking failed: " + result);
        }
      } catch (error) {
        console.error("Error submitting to Google Sheet:", error);
        alert("Error submitting booking. Try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  const roomTypes = [
    "Executive Economy (Deluxe Room)",
    "Family Suite Room",
    "Family Suite (Connecting Room)",
  ];

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center">
          Book Your Stay!
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <InputField
              id="name"
              label="Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              id="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              id="mobile"
              label="Mobile Number"
              placeholder="10-digit number [Not include the +91]"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
              className="col-span-2"
            />
            <div className="col-span-2">
              <label className="text-sm font-medium">Room Type</label>
              <select
                id="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={`w-full p-2 border rounded text-sm ${
                  errors.roomType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a room type</option>
                {roomTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.roomType && (
                <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>
              )}
            </div>
            <InputField
              id="adults"
              type="number"
              label="Adults"
              placeholder="1 to 4"
              value={formData.adults}
              onChange={handleChange}
              error={errors.adults}
            />
            <InputField
              id="kids"
              type="number"
              label="Kids"
              placeholder="0 to 2"
              value={formData.kids}
              onChange={handleChange}
              error={errors.kids}
            />
            <InputField
              id="checkin"
              type="date"
              label="Check-in"
              value={formData.checkin}
              onChange={handleChange}
              error={errors.checkin}
            />
            <InputField
              id="checkout"
              type="date"
              label="Check-out"
              value={formData.checkout}
              onChange={handleChange}
              error={errors.checkout}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#361617] text-white py-2 rounded hover:bg-[#552c14] mt-2 flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}

function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  className,
  placeholder,
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded text-sm ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
