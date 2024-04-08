import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedPhone, setTouchedPhone] = useState(false);
  const [touchedAddress, setTouchedAddress] = useState(false);
  const [touchedPincode, setTouchedPincode] = useState(false);
  const [touchedCity, setTouchedCity] = useState(false);
  const [touchedState, setTouchedState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      (!email || !password || email.trim() === "" || password.trim() === "") &&
      (touchedEmail || touchedPassword)
    ) {
      setErrorMessage("Email and password are required");
      return;
    } else if (!emailRegex.test(email) && touchedEmail) {
      setErrorMessage("Invalid email format");
    } else if (!phone && touchedPhone && phone.trim() === "") {
      setErrorMessage("Phone is required");
    } else if (!address && touchedAddress && address.trim() === "") {
      setErrorMessage("Address is required");
    } else if (!city && touchedCity && city.trim() === "") {
      setErrorMessage("City is required");
    } else if (!pincode && touchedPincode && pincode.trim() === "") {
      setErrorMessage("Pincode is required");
    } else if (!state && touchedState && state.trim() === "") {
      setErrorMessage("State is required");
    } else {
      // Construct a user object with all form values
      const newUser = {
        email,
        password,
        phone,
        address,
        pincode,
        city,
        state,
      };

      // Log all form values to console
      console.log(newUser);

      // Reset all form fields to empty strings
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      setPincode("");
      setCity("");
      setState("");
      setSuccessMessage(
        "Registration successful! Redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register an account
          </h2>
        </div>
        {errorMessage && (
          <FlashMessage
            type="error"
            message={errorMessage}
            setMessage={setErrorMessage}
          />
        )}
        {successMessage && (
          <FlashMessage
            type="success"
            message={successMessage}
            setMessage={setSuccessMessage}
          />
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  setTouchedEmail(true);
                  if (!email) {
                    setErrorMessage("Email is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  setTouchedPassword(true);
                  if (!password) {
                    setErrorMessage("Password is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => {
                  setTouchedPhone(true);
                  if (!phone) {
                    setErrorMessage("phone is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onBlur={() => {
                  setTouchedAddress(true);
                  if (!address) {
                    setErrorMessage("address is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Address"
              />
            </div>
            <div>
              <label htmlFor="pincode" className="sr-only">
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                autoComplete="postal-code"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                onBlur={() => {
                  setTouchedPincode(true);
                  if (!pincode) {
                    setErrorMessage("Pincode is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Pincode"
              />
            </div>
            <div>
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onBlur={() => {
                  setTouchedCity(true);
                  if (!city) {
                    setErrorMessage("City is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="address-level1"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={() => {
                  setTouchedState(true);
                  if (!state) {
                    setErrorMessage("State is required");
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="State"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
