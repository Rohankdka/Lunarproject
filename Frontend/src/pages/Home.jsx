import React from 'react';

function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to Your CMS</h1>
      <p className="text-lg text-gray-700 mb-8">
        Manage your content, users, themes, and settings all in one place.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="/users" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Manage Users</a>
        <a href="/content" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">Manage Content</a>
        <a href="/themes" className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Customize Themes</a>
      </div>
    </div>
  );
}

export default Home;
