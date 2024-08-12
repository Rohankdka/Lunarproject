import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage({ text: "", type: "" });

    if (username.trim() === "" || password.trim() === "") {
      setMessage({ text: "Please fill in all fields.", type: "error" });
    } else {
      // Simulate successful login
      setMessage({ text: "Login successful!", type: "success" });
      // You can redirect or perform other actions here
    }
  };

  const renderMessage = () => {
    if (message.text) {
      const messageClass =
        message.type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : "bg-red-100 border border-red-400 text-red-700";

      const icon =
        message.type === "success" ? (
          <svg
            className="w-6 h-6 text-green-500 inline-block mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-red-500 inline-block mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        );

      return (
        <div
          className={`${messageClass} pop-in px-4 py-3 rounded fixed top-4 right-4`}
          role="alert"
        >
          {icon}
          <span className="block sm:inline">{message.text}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <style>{`
        .pop-in {
          animation: popIn 0.5s ease-in-out forwards;
          transform: scale(0);
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-8 pt-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login
          </h2>

          {renderMessage()}

          <div className="mb-4">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 px-3 py-2 bg-white border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-3 py-2 bg-white border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none"
            >
              Login
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-medium text-sm text-indigo-500 hover:text-indigo-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
