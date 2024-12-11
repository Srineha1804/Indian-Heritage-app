import React, { useContext } from 'react';
import { TourBookingContext } from '../context/TourBookingContext';
import './BookedToursPage.css'; // Optional CSS for styling

function BookedToursPage() {
  const { bookings } = useContext(TourBookingContext);

  return (
    <div className="admin-booked-tours">
      <h2>Booked Tours</h2>
      {bookings.length > 0 ? (
        <table className="booked-tours-table">
          <thead>
            <tr>
              <th>Heritage Site</th>
              <th>Date</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Package</th>
              <th>Family Members</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.site}</td>
                <td>{booking.date}</td>
                <td>{booking.userName}</td>
                <td>{booking.contact}</td>
                <td>{booking.package}</td>
                <td>{booking.familyMembers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
}

export default BookedToursPage;
