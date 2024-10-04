"use client"
import { useState } from 'react';

const ReferralCodes = () => {
  // State to store referral code and usage details
  const [referralCode, setReferralCode] = useState('');
  const [codeGenerated, setCodeGenerated] = useState(false);

  // Function to generate a unique referral code
  const generateReferralCode = () => {
    const generatedCode = `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    setReferralCode(generatedCode);
    setCodeGenerated(true);
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-4xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Referral Code Management</h1>

      {/* Generate Referral Code Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Generate Your Unique Referral Code</h2>
        
        {codeGenerated ? (
          <div>
            <p className="text-lg text-green-600 mb-4">Your Referral Code:</p>
            <p className="text-3xl font-bold text-indigo-600">{referralCode}</p>
            <p className="text-sm text-gray-500 mt-4">Share this code with others to invite them to the platform.</p>
          </div>
        ) : (
          <button
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-200"
            onClick={generateReferralCode}
          >
            Generate Referral Code
          </button>
        )}
      </div>

      {/* Manage Referral Code Section */}
      {codeGenerated && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Your Referral Code</h2>
          <p className="text-lg text-gray-600">Your current referral code is:</p>
          <p className="text-2xl font-bold text-indigo-600">{referralCode}</p>

          {/* Additional management features can go here */}
          <p className="mt-4 text-sm text-gray-500">You can track how many people have used your referral code and manage rewards.</p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ReferralCodes;
