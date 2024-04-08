import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email and password are valid
    if ((!email || !password) && (touchedEmail || touchedPassword)) {
      setErrorMessage("Email and password are required");
    } else if (!emailRegex.test(email) && touchedEmail) {
      setErrorMessage("Invalid email format");
    } else {
      // Mocked static user data
      const users = [
        { email: "user1@example.com", password: "password1" },
        { email: "user2@example.com", password: "password2" },
        { email: "user3@example.com", password: "password3" },
      ];

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        localStorage.setItem("user", JSON.stringify({ email }));
        setEmail("");
        setPassword("");
        setSuccessMessage("Login successful! Redirecting to welcome page...");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setErrorMessage("Invalid email or password");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
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
          {/* Email input field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
              className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          {/* Password input field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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
              className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
