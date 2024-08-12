import React, { useState } from 'react';
// import { createUser } from '../services/api';

const UserList = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userRole, setUserRole] = useState('User');
  const [companyId, setCompanyId] = useState(1);
  const [userFile, setUserFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName,
      userPassword,
      emailAddress,
      userAddress,
      userPhone,
      userRole,
      loginStatus: false,
      userProfile: userFile ? URL.createObjectURL(userFile) : '',
      companyId,
      userFile,
    };
    await createUser(userData);
  };

  return (
    <form className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Create User</h2>
      <div className="mb-4">
        <label className="block text-gray-700">User Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Role</label>
        <select
          className="w-full px-4 py-2 border rounded-lg"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Profile Picture</label>
        <input
          type="file"
          className="w-full px-4 py-2 border rounded-lg"
          onChange={(e) => setUserFile(e.target.files[0])}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Create User
      </button>
    </form>
  );
};

export default UserList;
