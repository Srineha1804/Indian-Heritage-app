import React from 'react';
import './CulturalCalendar.css';

const events = {
  January: [  { date: 1, name: 'New Year Celebration', color: 'red' },
    { date: 14, name: 'Sankranti', color: 'green' },
    { date: 26, name: 'Republic Day', color: 'orange' },],
  February: [{ date: 14, name: 'Valentine’s Day', color: 'purple'}],
  March: [{ date: 25, name: 'Holi Festival', color: 'orange' },{ date: 8, name: 'Maha Shivaratri', color: 'red' },
    { date: 28, name: 'Good Friday', color: 'purple' },],
  April: [{ date: 14, name: 'Baisakhi', color: 'green' }],
  May: [{ date: 1, name: 'Labor Day', color: 'blue' }],
  June: [{ date: 21, name: 'International Yoga Day', color: 'purple' }],
  July: [{ date: 17, name: 'Muharram', color: 'yellow' }],
  August: [{ date: 15, name: 'Independence Day', color: 'orange' }, { date: 19, name: 'Raksha Bandhan', color: 'teal' }],
  September: [{ date: 5, name: 'Teacher’s Day', color: 'teal' }, { date: 15, name: 'onam', color: 'green' }],
  October: [{ date: 31, name: 'Diwali', color: 'gold' }, { date: 12, name: 'Dussehra', color: 'brown' }, { date: 2, name: 'Mahatma Gandhi Jayanti', color: 'pink' }],
  November: [{ date: 14, name: 'Children’s Day', color: 'violet' }, { date: 7, name: 'chhat Puja', color: 'blue' }],
  December: [{ date: 25, name: 'Christmas', color: 'red' }],
};

// Function to get the number of days in a month
const getDaysInMonth = (month, year = 2024) => {
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
  return new Date(year, monthIndex + 1, 0).getDate();
};

// Function to get the starting day of the month (0 = Sunday, 1 = Monday, ...)
const getStartDayOfMonth = (month, year = 2024) => {
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
  return new Date(year, monthIndex, 1).getDay();
};

const CulturalCalendar = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <h1 className="calendar-heading" >Event's Calendar</h1>
      <h2 className="calendar-heading">2024</h2>
      <div className="calendar">
        {Object.keys(events).map((month) => {
          const daysInMonth = getDaysInMonth(month);
          const startDay = getStartDayOfMonth(month);
          const eventDays = events[month].reduce((acc, event) => {
            acc[event.date] = event;
            return acc;
          }, {});

          return (
            <div key={month} className="calendar-box">
              <h3>{month}</h3>
              <div className="calendar-grid">
                {/* Weekday Headers */}
                {weekdays.map((day, index) => (
                  <div key={index} className="calendar-weekday">
                    {day}
                  </div>
                ))}
                {/* Empty slots for days before the start of the month */}
                {Array.from({ length: startDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="calendar-day empty"></div>
                ))}
                {/* Days in the month */}
                {Array.from({ length: daysInMonth }, (_, index) => {
                  const day = index + 1;
                  const event = eventDays[day];
                  return (
                    <div
                      key={day}
                      className={`calendar-day ${event ? 'event-day' : ''}`}
                      style={event ? { backgroundColor: event.color } : {}}
                      title={event ? event.name : ''}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CulturalCalendar;
