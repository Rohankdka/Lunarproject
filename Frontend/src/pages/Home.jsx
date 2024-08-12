import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Application</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
        Manage your users, themes, and company information all in one place. Easily navigate through the sections using the menu above.
      </p>
      <div className="flex space-x-4">
        <a href="/users" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Manage Users
        </a>
        <a href="/themes" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
          Manage Themes
        </a>
        <a href="/company-info" className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition">
          Company Info
        </a>
      </div>
    </div>
  );
};

export default Home;
