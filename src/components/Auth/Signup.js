// src/components/Auth/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust the path according to your file structure

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to the home page after successful signup
    } catch (error) {
      setError(error.message); // Set error message if signup fails
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-md rounded-md text-center">
        <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-[#ff5a60] text-white px-6 py-3 rounded-md hover:bg-[#f9787c] transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#ff5a60] hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
