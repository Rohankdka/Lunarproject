import React, { useState } from 'react';

const CompanyInfo = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyData = {
      companyName,
      companyAddress,
      companyPrimaryPhone: companyPhone,
      // Add other fields accordingly
    };
    // Call API to create company info
  };

  return (
    <form className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Create Company Info</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Company Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company Phone</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg">
        Create Company Info
      </button>
    </form>
  );
};

export default CompanyInfo;
