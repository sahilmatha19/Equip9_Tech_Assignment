import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage";
import LoginPage from "./Components/LoginPage";
import WelcomePage from "./Components/WelcomePage";

const App = () => {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={appStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
