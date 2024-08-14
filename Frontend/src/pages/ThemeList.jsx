import React from 'react';

function ThemeList() {
  // Placeholder data
  const themes = [
    { id: 1, name: 'Light Theme', status: 'Active' },
    { id: 2, name: 'Dark Theme', status: 'Inactive' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Theme Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg mb-6">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 text-left">ID</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Theme Name</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {themes.map(theme => (
            <tr key={theme.id} className="border-b">
              <td className="py-3 px-6">{theme.id}</td>
              <td className="py-3 px-6">{theme.name}</td>
              <td className="py-3 px-6">{theme.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add functionalities for activating/deactivating themes */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add New Theme</button>
    </div>
  );
}

export default ThemeList;
