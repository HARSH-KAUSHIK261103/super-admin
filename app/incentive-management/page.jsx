"use client"
import { useState } from 'react';

const IncentiveManagement = () => {
  // Sample incentives data
  const [incentives, setIncentives] = useState([
    { id: 1, name: 'Basic Referral', rewardType: 'Cash', rewardAmount: '$10', criteria: '1 Successful Referral' },
    { id: 2, name: 'Premium Referral', rewardType: 'Discount', rewardAmount: '20% Off', criteria: '5 Successful Referrals' },
  ]);

  // State for form fields
  const [newIncentive, setNewIncentive] = useState({
    name: '',
    rewardType: '',
    rewardAmount: '',
    criteria: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    setNewIncentive({
      ...newIncentive,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new incentive
  const handleAddIncentive = (e) => {
    e.preventDefault();
    const newId = incentives.length + 1;
    setIncentives([...incentives, { id: newId, ...newIncentive }]);
    setNewIncentive({ name: '', rewardType: '', rewardAmount: '', criteria: '' });
  };

  // Delete an incentive
  const handleDeleteIncentive = (id) => {
    setIncentives(incentives.filter((incentive) => incentive.id !== id));
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-6xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Incentive Management</h1>

      {/* Form to add new incentive */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Incentive</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleAddIncentive}>
          <div>
            <label className="block text-gray-700 mb-2">Incentive Name</label>
            <input
              type="text"
              name="name"
              value={newIncentive.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter incentive name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Reward Type</label>
            <input
              type="text"
              name="rewardType"
              value={newIncentive.rewardType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter reward type (e.g. Cash, Discount)"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Reward Amount</label>
            <input
              type="text"
              name="rewardAmount"
              value={newIncentive.rewardAmount}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter reward amount"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Eligibility Criteria</label>
            <input
              type="text"
              name="criteria"
              value={newIncentive.criteria}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter criteria (e.g. 1 Successful Referral)"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-500"
            >
              Add Incentive
            </button>
          </div>
        </form>
      </div>

      {/* Table to display existing incentives */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Current Incentives</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4">Incentive Name</th>
              <th className="py-2 px-4">Reward Type</th>
              <th className="py-2 px-4">Reward Amount</th>
              <th className="py-2 px-4">Eligibility Criteria</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incentives.map((incentive) => (
              <tr key={incentive.id} className="border-b">
                <td className="py-2 px-4 text-center">{incentive.name}</td>
                <td className="py-2 px-4 text-center">{incentive.rewardType}</td>
                <td className="py-2 px-4 text-center">{incentive.rewardAmount}</td>
                <td className="py-2 px-4 text-center">{incentive.criteria}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                    onClick={() => handleDeleteIncentive(incentive.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default IncentiveManagement;
