// src/pages/UserList.js

import React, { useState } from 'react';
import AddUser from './AddUser';

function UserList() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleAddUserClick = () => {
    setShowAddUserForm(!showAddUserForm); // Toggle form visibility
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User List</h2>
        <button
          onClick={handleAddUserClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {showAddUserForm ? 'Cancel' : 'Add User'}
        </button>
      </div>

      {showAddUserForm && (
        <div className="mb-6">
          <AddUser /> {/* Display the AddUser form */}
        </div>
      )}

      {/* Placeholder for user list, replace with actual user data */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <p>No users available. Add a user to get started!</p>
      </div>
    </div>
  );
}

export default UserList;
