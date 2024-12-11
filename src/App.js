import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import TraditionalCuisines from './components/TraditionalCuisines';
import MonumentsPage from './pages/MonumentsPage';
import MonumentsQuiz from "./pages/MonumentsQuiz";
import CultureQuiz from "./pages/CultureQuiz";
import MonumentDetails from './pages/MonumentDetails';
import AdminDashboard from './components/AdminDashboard';
import UpdateMonument from './components/UpdateMonument';
import DeleteMonument from './components/DeleteMonument';
import AboutUs from './components/AboutUs'; // Import AboutUs component
import ContactUs from './components/ContactUs'; // Import ContactUs component
import { AuthProvider } from './context/AuthContext';
import ArtsPage from './pages/ArtsPage';
import Culture from './pages/Culture';
import VirtualTours from './pages/VirtualTours'; 
import { TourBookingProvider } from './context/TourBookingContext';
import BookingPage from './pages/BookingPage';
import BookedToursPage from './pages/BookedToursPage';
import Quiz from './pages/Quiz';
import QuizResult from './pages/QuizResult';
import CulturalCalendar from './components/CulturalCalendar'; // Import AuthProvider for context
import './App.css';

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

function MainApp() {
  return (
    <div className="container">
      <TourBookingProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/update" element={<UpdateMonument />} />
        <Route path="/delete" element={<DeleteMonument />} />
        <Route path="/monuments" element={<MonumentsPage />} />
        <Route path="/quiz/monuments" element={<MonumentsQuiz />} />
        <Route path="/quiz/culture" element={<CultureQuiz />} />
        <Route path="/monument/:id" element={<MonumentDetails />} />
        <Route path="/arts" element={<ArtsPage /> } />
        <Route path="/traditional-cuisines" element={<TraditionalCuisines />} />
        <Route path="/virtual-tours" element={<VirtualTours />} /> {/* Virtual Tours Route */}
        <Route path="/culture" element={<Culture />} /> 
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quizresult" element={<QuizResult />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* About Us route */}
        <Route path="/contactus" element={<ContactUs />} /> {/* Contact Us route */}
        <Route path="/book-tour" element={<BookingPage />} />
        <Route path="/booked-tours" element={<BookedToursPage />} />
        <Route path="/cultural-calender" element={<CulturalCalendar />} />
        
      </Routes>
      </TourBookingProvider>
    </div>
  );
}


export default App;
