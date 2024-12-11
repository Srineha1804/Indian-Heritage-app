import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { isLoggedIn, role, handleLogout } = useContext(AuthContext);
  
  console.log(isLoggedIn, role); // Debugging: check values of isLoggedIn and role
  
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Links shown only when the user is not logged in */}
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </>
        ) : role === 'admin' ? (
          <>
            {/* Links shown only when the user is logged in as an admin */}
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/booked-tours">Booked Tours</Link>
            </li>
            <li>
              <Link to="/update">Update Monuments</Link>
            </li>
            <li>
              <Link to="/delete">Delete Monuments</Link>
            </li>
            <li>
              <Link to="/quizresult">Quiz Result</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </>
        ) : (
          <>
           
            <li>
              <Link to="/monuments">Monuments</Link>
            </li>
            <li>
              <Link to="/arts">Arts</Link>
            </li>
            <li>
              <Link to="/virtual-tours">Virtual Tours</Link>
            </li>
            <li>
              <Link to="/culture">Culture</Link>
            </li>
            <li>
              <Link to="/book-tour">Book Tour</Link>
            </li>
            <li>
              <Link to="/traditional-cuisines">Traditional Cuisines</Link>
            </li>
            <li>
              <Link to="/quizzes">Quiz</Link>
            </li>
           <li>
            <Link to="cultural-calender">CulturalCalendar</Link>
           </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/aboutus">About Us</Link>
//         </li>
//         <li>
//           <Link to="/contactus">Contact Us</Link>
//         </li>
//         <li>
//           <Link to="/monuments">Monuments</Link>
//         </li>
//         <li>
//           <Link to="/arts">Arts</Link>
//         </li>
//         <li>
//           <Link to="/virtual-tours">Virtual Tours</Link>
//         </li>
//         <li>
//           <Link to="/culture">Culture</Link>
//         </li>
//         <li>
//           <Link to="/traditional-cuisines">Traditional Cuisines</Link>
//         </li>
//         <li>
//           <Link to="/quizzes">Quiz</Link>
//         </li>
//         <li>
//           <Link to="/signup">SignUp</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
