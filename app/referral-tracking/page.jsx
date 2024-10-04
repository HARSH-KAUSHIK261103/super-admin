"use client"
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ReferralTracking = () => {
  // Sample referral data
  const [referrals, setReferrals] = useState([
    { id: 1, user: 'John Doe', referredUser: 'Jane Smith', status: 'Successful' },
    { id: 2, user: 'Alice Brown', referredUser: 'Bob Johnson', status: 'Pending' },
    { id: 3, user: 'Tom White', referredUser: 'Lucy Green', status: 'Unsuccessful' },
    { id: 4, user: 'Anna Blue', referredUser: 'David Black', status: 'Successful' },
  ]);

  const totalReferrals = referrals.length;
  const successfulReferrals = referrals.filter((ref) => ref.status === 'Successful').length;

  // Data for the bar chart
  const chartData = {
    labels: ['Successful Referrals', 'Unsuccessful Referrals'],
    datasets: [
      {
        label: 'Referrals',
        data: [
          successfulReferrals,
          totalReferrals - successfulReferrals, // Unsuccessful
        ],
        backgroundColor: ['#4CAF50', '#FF5722'],
      },
    ],
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-6xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Referral Tracking</h1>

      {/* Summary Section */}
      <div className="mb-8 flex justify-around">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Referrals</h2>
          <p className="text-2xl font-bold text-indigo-600">{totalReferrals}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-800">Successful Referrals</h2>
          <p className="text-2xl font-bold text-green-600">{successfulReferrals}</p>
        </div>
      </div>

      {/* Bar Chart for Referrals */}
      {/* <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Referral Success Rate</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Bar data={chartData} />
        </div>
      </div> */}

      {/* Referrals Table */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Referral Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Referred User</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((referral) => (
              <tr key={referral.id} className="border-b">
                <td className="py-2 px-4 text-center">{referral.user}</td>
                <td className="py-2 px-4 text-center">{referral.referredUser}</td>
                <td
                  className={`py-2 px-4 text-center font-bold ${
                    referral.status === 'Successful' ? 'text-green-600' : referral.status === 'Unsuccessful' ? 'text-red-600' : 'text-yellow-600'
                  }`}
                >
                  {referral.status}
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

export default ReferralTracking;
