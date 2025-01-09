import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import backgroundImage from "../Assets/back5.jpg";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        backgroundImage: `url(${backgroundImage})`, // Add your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card shadow-lg p-4 rounded animate__animated animate__fadeIn"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for readability
        }}
      >
        <h2 className="text-center mb-4">Registration Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              maxLength="10"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 mb-3"
            style={{ transition: "background-color 0.3s ease" }}
          >
            Register
          </button>
        </form>

        <div className="text-center">
          <p>Or Login Using</p>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2 social-btn"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            Login with Google
          </button>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2 social-btn"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            Login with Facebook
          </button>
          <button
            className="btn btn-outline-secondary w-100 py-2 mb-2 social-btn"
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

export default RegistrationPage;
