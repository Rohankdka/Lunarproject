import React, { useState } from 'react';

function Settings() {
  const [siteTitle, setSiteTitle] = useState('My CMS');
  const [defaultLanguage, setDefaultLanguage] = useState('English');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Handle saving settings logic
    alert('Settings Saved!');
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Site Title</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Default Language</label>
          <select
            className="w-full mt-2 px-4 py-2 border rounded-lg"
            value={defaultLanguage}
            onChange={(e) => setDefaultLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={maintenanceMode}
            onChange={(e) => setMaintenanceMode(e.target.checked)}
          />
          <label className="text-gray-700">Enable Maintenance Mode</label>
        </div>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
