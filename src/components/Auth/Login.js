// src/components/Auth/Login.js
import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  
  // State for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Navigate to home page after successful login
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed. Please try again.");
    }
  };

  // Handle Email and Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError(""); // Reset error message
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to home page after successful login
    } catch (error) {
      console.error("Email login failed:", error);
      setError("Email or password is incorrect. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-md rounded-md text-center">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}

        {/* Email and Password Login Form */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-[#ff5a60] text-white px-6 py-3 rounded-md hover:bg-[#f9787c] transition mb-4 w-full"
          >
            Login with Email
          </button>
        </form>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="bg-[#4285F4] text-white px-6 py-3 rounded-md hover:bg-[#66aaff] transition w-full"
        >
          Login with Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-4">
          Already have an account?{" "}
          <a href="/signup" className="text-[#ff5a60] hover:underline">Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
