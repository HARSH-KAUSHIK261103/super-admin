"use client"
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const ReferralAnalytics = () => {
  // Referral data (sample data)
  const [referralData, setReferralData] = useState({
    totalReferrals: 120,
    successfulReferrals: 40,
    conversionRate: '33%',
    participants: 85,
    monthlyData: [
      { month: 'January', referrals: 20, successful: 5 },
      { month: 'February', referrals: 15, successful: 3 },
      { month: 'March', referrals: 30, successful: 10 },
      { month: 'April', referrals: 10, successful: 4 },
      { month: 'May', referrals: 45, successful: 18 },
    ],
  });

  // Bar chart data
  const chartData = {
    labels: referralData.monthlyData.map((data) => data.month),
    datasets: [
      {
        label: 'Total Referrals',
        backgroundColor: '#4F46E5', // Purple color
        data: referralData.monthlyData.map((data) => data.referrals),
      },
      {
        label: 'Successful Referrals',
        backgroundColor: '#10B981', // Green color
        data: referralData.monthlyData.map((data) => data.successful),
      },
    ],
  };

  // Bar chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-6xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Referral Program Analytics</h1>

      {/* Referral Overview */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Referrals</h2>
          <p className="text-3xl font-bold text-indigo-600">{referralData.totalReferrals}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Successful Referrals</h2>
          <p className="text-3xl font-bold text-green-500">{referralData.successfulReferrals}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Conversion Rate</h2>
          <p className="text-3xl font-bold text-blue-600">{referralData.conversionRate}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Active Participants</h2>
          <p className="text-3xl font-bold text-yellow-500">{referralData.participants}</p>
        </div>
      </div>

      {/* Bar Chart for Referrals */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Monthly Referrals and Success Rates</h2>
        <div className="h-96">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ReferralAnalytics;
