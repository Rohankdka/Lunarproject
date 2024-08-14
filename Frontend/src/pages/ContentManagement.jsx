import React from 'react';

function ContentManagement() {
  // Placeholder data
  const contents = [
    { id: 1, title: 'First Article', status: 'Published' },
    { id: 2, title: 'Second Article', status: 'Draft' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Content Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg mb-6">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 text-left">ID</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Title</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content => (
            <tr key={content.id} className="border-b">
              <td className="py-3 px-6">{content.id}</td>
              <td className="py-3 px-6">{content.title}</td>
              <td className="py-3 px-6">{content.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add forms and functionalities for creating/editing/deleting content */}
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Add New Content</button>
    </div>
  );
}

export default ContentManagement;
