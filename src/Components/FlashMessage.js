import React, { useEffect } from "react";

const FlashMessage = ({ type, message, setMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, setMessage]);

  let bgColorClass;
  if (type === "success") {
    bgColorClass = "bg-green-100 border border-green-400 text-green-700";
  } else if (type === "error") {
    bgColorClass = "bg-red-100 border border-red-400 text-red-700";
  }

  return (
    <div className={`rounded-md px-4 py-3 ${bgColorClass} mb-4`} role="alert">
      <p>{message}</p>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={() => setMessage("")}
      >
        <svg
          className="h-6 w-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default FlashMessage;
