import { useBooking } from "../components/BookingContext";
import { useState } from "react";
import { createPortal } from "react-dom"; // Portal for modal popup

export default function BookingSection() {
  const { isOpen, setIsOpen } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    adults: "1", // Default 1 adult
    kids: "0", // Default 0 kids
    checkin: "",
    checkout: "",
  });
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "number" ? (value === "" ? "" : Number(value)) : value, // Convert to number, allow empty
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.adults) {
      newErrors.adults = "Number of adults is required";
    } else if (formData.adults < 1 || formData.adults > 4) {
      newErrors.adults = "Adults must be between 1 and 4";
    }

    if (!formData.kids) {
      newErrors.kids = "Number of kids is required";
    } else if (formData.kids < 0 || formData.kids > 2) {
      newErrors.kids = "Kids must be between 0 and 2";
    }

    if (!formData.checkin) newErrors.checkin = "Check-in date is required";
    if (!formData.checkout) {
      newErrors.checkout = "Check-out date is required";
    } else if (new Date(formData.checkout) <= new Date(formData.checkin)) {
      newErrors.checkout = "Check-out date must be after check-in date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setIsOpen(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          adults: "1",
          kids: "0",
          checkin: "",
          checkout: "",
        });
      }, 3000);
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] relative z-50 mt-8">
        <button className="absolute top-2 right-2 text-gray-600" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        {showThankYou ? (
          <div className="text-center py-4">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-600">Your booking request has been received. We'll contact you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">Book Your Stay!</h3>
            <form onSubmit={handleSubmit} className="space-y-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full p-1.5 border rounded text-sm ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full p-1.5 border rounded text-sm ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className={`w-full p-1.5 border rounded text-sm ${errors.mobile ? "border-red-500" : ""}`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-700">Adults/Kids</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      id="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      min="1"
                      max="4"
                      className="w-1/2 p-1.5 border rounded text-sm"
                    />
                    <input
                      type="number"
                      id="kids"
                      value={formData.kids}
                      onChange={handleChange}
                      min="0"
                      max="2"
                      className="w-1/2 p-1.5 border rounded text-sm"
                    />
                  </div>
                  {(errors.adults || errors.kids) && <p className="text-red-500 text-xs">{errors.adults || errors.kids}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700">Check-in</label>
                  <input
                    type="date"
                    id="checkin"
                    value={formData.checkin}
                    onChange={handleChange}
                    className={`w-full p-1.5 border rounded text-sm ${errors.checkin ? "border-red-500" : ""}`}
                  />
                  {errors.checkin && <p className="text-red-500 text-xs">{errors.checkin}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700">Check-out</label>
                  <input
                    type="date"
                    id="checkout"
                    value={formData.checkout}
                    onChange={handleChange}
                    className={`w-full p-1.5 border rounded text-sm ${errors.checkout ? "border-red-500" : ""}`}
                  />
                  {errors.checkout && <p className="text-red-500 text-xs">{errors.checkout}</p>}
                </div>
              </div>
              <button type="submit" className="w-full bg-[#361617] text-white py-2 rounded hover:bg-[#552c14] mt-2">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
