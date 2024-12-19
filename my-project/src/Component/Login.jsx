import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Retrieve all users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if user exists
      const user = users.find((u) => u.email === email && u.password === password);
  
      if (user) {
        setMessage("Login successful!");
      } else {
        const emailExists = users.some((u) => u.email === email);
        setMessage(
          emailExists
            ? "Incorrect password. Please try again."
            : "No user found with this email. Please sign up first."
        );
      }
    };
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center min-h-[75vh] ">
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Member Login</h1>
      {message && (
        <div
          className={`mb-4 p-2 rounded ${
            message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border rounded p-2 text-gray-900"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 block w-full border rounded p-2 text-gray-900"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 hover:text-gray-800"
            >
               {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
      <div className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div>
      <div className="text-center mt-4">
        <span>Not a member yet? </span>
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up now
        </a>
      </div>
        {/*Social Buttons*/}
        <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center mb-2">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 flex items-center justify-center">
          <img
            src="https://www.svgrepo.com/show/468781/facebook.svg"
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          Continue with Facebook
        </button>
        {/* Footer */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          We will never post anything without your permission.
        </p>
      </div>
    </div>
  );
};

export default Login;
