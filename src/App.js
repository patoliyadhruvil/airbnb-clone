// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase"; // Make sure this is correctly importing your Firebase setup
import { onAuthStateChanged } from "firebase/auth";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up an observer on Auth object
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state based on user's authentication status
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
  
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Conditional rendering based on authentication */}
          <Route
            path="/"
            element={user ? (
              <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
                {/* Filters */}
                <Filters />
                {/* Rentals */}
                <Rentals />
              </div>
            ) : (
              <Login />
            )}
          />

          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
  
  );
}

export default App;
