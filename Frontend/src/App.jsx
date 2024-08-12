import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './pages/UserList';
import ThemeList from './pages/ThemeList';
import CompanyInfo from './pages/CompanyInfo';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link className="text-blue-500 hover:underline" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/users">Users</Link>
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/themes">Themes</Link>
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/company-info">Company Info</Link>
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/themes" element={<ThemeList />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
