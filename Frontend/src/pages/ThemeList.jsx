import React, { useState } from 'react';

const ThemeList = () => {
  const [themeName, setThemeName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const themeData = { themeName };
    // Call API to create theme
  };

  return (
    <form className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Create Theme</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Theme Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">
        Create Theme
      </button>
    </form>
  );
};

export default ThemeList;
