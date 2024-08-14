import React, { useState } from 'react';

function CompanyInfo() {
  const [companyName, setCompanyName] = useState('Your Company Name');
  const [address, setAddress] = useState('1234 Street, City, Country');
  const [contactEmail, setContactEmail] = useState('contact@company.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Company Information Updated!');
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Company Information</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Contact Email</label>
          <input
            type="email"
            className="w-full mt-2 px-4 py-2 border rounded-lg"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
          Update Information
        </button>
      </form>
    </div>
  );
}

export default CompanyInfo;
