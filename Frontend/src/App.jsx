// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser"; // Import AddUser component
import ContentManagement from "./pages/ContentManagement";
import ThemeList from "./pages/ThemeList";
import CompanyInfo from "./pages/CompanyInfo";
import Settings from "./pages/Settings";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} /> {/* Add this route */}
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/themes" element={<ThemeList />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
