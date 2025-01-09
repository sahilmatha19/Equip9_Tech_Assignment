import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "animate.css"; // Import Animate.css for animations
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import backgroundImage from "../Assets/back5.jpg"; // Import your background image

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    mobileNumber: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Good ${data.greeting}, ${data.firstName} ${data.lastName}`);
        navigate("/WelcomePage"); // Redirect to WelcomePage after successful login
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`, // Apply background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        animation: "fadeIn 1.5s ease-in-out", // Apply animation for background fade-in
      }}
    >
      <div
        className="card shadow-lg p-4 rounded animate__animated animate__fadeIn animate__delay-1s"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent card background
          borderRadius: "12px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2 className="text-center mb-4">Login Page</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={credentials.mobileNumber}
              onChange={handleChange}
              className="form-control p-3"
              required
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease", // Smooth transition on focus
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control p-3"
              required
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease", // Smooth transition on focus
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 mb-3"
            style={{
              backgroundColor: "#2575fc",
              borderRadius: "8px",
              border: "none",
              transition: "background-color 0.3s ease", // Transition effect on hover
            }}
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p>Or Login Using</p>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            Login with Google
          </button>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            Login with Facebook
          </button>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            Login with Apple ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
