import React, { useState } from 'react'
import { Link } from "react-router-dom"
const Modal = ()=>{
    //state for email, password, and password visibility
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState("");

    //email validation regex 
    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)

    //Password Validation regex
    const isValidPassword = (password) =>    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/.test(password);

    //handle form submit
    const handleSubmit = () => {
        // Validation checks
        if (!email || !password || !termsAccepted) {
          setError("Please fill all fields and accept the terms & conditions.");
          return;
        }
      
        if (!isValidEmail(email)) {
          alert("Please enter a valid Gmail address.");
          return;
        }
      
        if (!isValidPassword(password)) {
          alert(
            "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and the '@' symbol."
          );
          return;
        }
      
        // Retrieve existing users from localStorage (or initialize an empty array)
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      
        // Check if the email already exists
        const userExists = savedUsers.some((user) => user.email === email);
      
        if (userExists) {
          alert("User already signed up. Please log in.");
          // Reset fields and close the modal
           setEmail("");
           setPassword("");
           setShowPassword(false);
           setTermsAccepted(false);
           onClose();
          return;
        }
      
        // Add the new user to the users array
        const newUser = { email, password };
        const updatedUsers = [...savedUsers, newUser];
      
        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      
        // Show success alert
        alert("Signup successful!");
      
        // Reset fields and close the modal
        setEmail("");
        setPassword("");
        setShowPassword(false);
        setTermsAccepted(false);
        onClose();
      };
    return(
      <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
        <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6'>
            {/*Header */}
            <div className='text-lg font-bold text-grey-800 mb-4'>Almost there! Create your account
            </div>
            {/*Emial Address INput*/}
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-medium mb-1'>
                    Email address
                </label>
                <input type='email' placeholder='Email address' 
                className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            {/*Password Input*/}
            <div className='mb-4'>
                <label className='block text-grey-700 text-sm font-medium mb-1'>
                    Create a Password</label>
                    <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
                <p className='text-sm text-gray-500 mt-1'>Must be at least 8 characters, no spaces.</p>
            </div>
            {/*Terms & Conditions*/}
            <div className='mb-4'>
                <label className='inline-flex items-center '>
                    <input 
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={()=>setTermsAccepted(!termsAccepted)}
                    className='form-checkbox border-gray-300 rounded text-blue-500 focus:ring-2 focus:ring-blue-500'
                    />
                    <span className='ml-2 text-sm text-gray-700'>
                        I agree to Fitness_fantasia {" "}
                        <a href='#' className='text-blue-600 hover:underline'>
                            Terms & conditions
                        </a>{" "}
                        and{" "}
                        <a href='#' className='text-blue-600 hover:underline'>
                            Privacy Policy
                        </a>
                    </span>
                </label>
            </div>

            {/*Buttons */}
            <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4'
            onClick={handleSubmit}
            >
                Continue
            </button>

            <div className='text-center text-sm text-gray-500 mb-2'>or</div>
            {/*Social Buttons*/}
            <button className='w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center mb-2'>
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google"
                className='w-5 h-5 mr-2' 
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
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already signed up?{" "}
            <button
              className="text-blue-600 hover:underline font-medium"
            >
                <Link to="/login">Login in</Link>
            </button>
          </p>
        </div>
         <p className="text-xs text-gray-500 mt-4 text-center">
          We will never post anything without your permission.
        </p>
        </div>
      </div>
    ) 
}
const Signup = () => {
  return (
    <>
    <div>
        <Modal/>
    </div>
    </>
  )
}

export default Signup