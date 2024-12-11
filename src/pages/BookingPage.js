// src/pages/BookingPage.js
import React, { useState, useContext } from 'react';
import { TourBookingContext } from '../context/TourBookingContext';
import './BookingPage.css';

const heritageSites = [
  { id: 1, name: 'Taj Mahal' },
  { id: 2, name: 'Red Fort' },
  { id: 3, name: 'Qutub Minar' },
  { id: 4, name: 'Gateway of India' },
  { id: 5, name: 'Charminar' },
  // Add more heritage sites as needed
];

const packages = [
  { id: 1, name: 'Basic Package', days: 1, amount: 100 },
  { id: 2, name: 'Premium Package', days: 3, amount: 250 },
  { id: 3, name: 'Luxury Package', days: 5, amount: 500 },
];

function BookingPage() {
  const [selectedSite, setSelectedSite] = useState('');
  const [date, setDate] = useState('');
  const [userName, setUserName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [familyMembers, setFamilyMembers] = useState(0);
  const [confirmation, setConfirmation] = useState(false);

  const { addBooking } = useContext(TourBookingContext);

  const handleBooking = (e) => {
    e.preventDefault();

    // Debugging log to check the current values
    console.log("Selected Site:", selectedSite);
    console.log("Selected Package:", selectedPackage);
    console.log("Family Members:", familyMembers);
    console.log("Name:", userName);
    console.log("Contact:", contact);
    console.log("Date:", date);

    // Check if all fields are filled
    if (selectedSite && date && userName && contact && selectedPackage && familyMembers >= 0) {
      const booking = {
        site: selectedSite,
        date,
        userName,
        contact,
        package: selectedPackage,
        familyMembers,
      };

      addBooking(booking);
      setConfirmation(true);
      resetForm();
    } else {
      alert('Please fill in all the fields.');
    }
  };

  const resetForm = () => {
    setSelectedSite('');
    setDate('');
    setUserName('');
    setContact('');
    setSelectedPackage('');
    setFamilyMembers(0);
  };

  return (
    <div className="booking-page">
      <h2 className="yellow-text">Book a Tour</h2>
      <form onSubmit={handleBooking} className="booking-form">
        <div>
          <label>Select Heritage Site:</label>
          <select
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
            required
          >
            <option value="">-- Select Site --</option>
            {heritageSites.map((site) => (
              <option key={site.id} value={site.name}>
                {site.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            pattern="[0-9]{10}" // 10-digit phone number pattern
            required
          />
        </div>
        <div>
          <label>Select Package:</label>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            required
          >
            <option value="">-- Select Package --</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.name}>
                {pkg.name} - {pkg.days} Days - ${pkg.amount}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Number of Family Members:</label>
          <input
            type="number"
            value={familyMembers}
            onChange={(e) => setFamilyMembers(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <button type="submit">Book Tour</button>
      </form>
      {confirmation && (
        <div className="confirmation-message">
          <h3>Booking Confirmed!</h3>
          <p className="yellow-text">Thank you, {userName}. Your tour of {selectedSite} is booked for {date}.</p>
          <p className="yellow-text">Package: {selectedPackage}</p>
          <p className="yellow-text">Family Members: {familyMembers}</p>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
