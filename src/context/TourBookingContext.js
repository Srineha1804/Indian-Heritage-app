import React, { createContext, useState } from 'react';

export const TourBookingContext = createContext();

export const TourBookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  return (
    <TourBookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </TourBookingContext.Provider>
  );
};
