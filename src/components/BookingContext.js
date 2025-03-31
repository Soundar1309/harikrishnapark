import { createContext, useContext, useState } from "react";

// Create Context
const BookingContext = createContext();

// Booking Provider
export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook for using the booking context
export function useBooking() {
  return useContext(BookingContext);
}
