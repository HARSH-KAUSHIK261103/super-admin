"use client"
import { useState } from 'react';

const PayoutManagement = () => {
  // Sample data for payouts
  const [payouts, setPayouts] = useState([
    { id: 1, user: 'John Doe', amount: 50, method: 'PayPal', status: 'Pending' },
    { id: 2, user: 'Jane Smith', amount: 30, method: 'Bank Transfer', status: 'Completed' },
    { id: 3, user: 'Sam Wilson', amount: 75, method: 'Cash', status: 'Pending' },
  ]);

  // Handle payout processing
  const processPayout = (id, newStatus) => {
    setPayouts(payouts.map(payout => payout.id === id ? { ...payout, status: newStatus } : payout));
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%]  absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-5xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Payout Management</h1>

      {/* Payout Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Method</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map(payout => (
              <tr key={payout.id} className="border-b">
                <td className="px-4 py-2">{payout.user}</td>
                <td className="px-4 py-2">${payout.amount}</td>
                <td className="px-4 py-2">{payout.method}</td>
                <td className={`px-4 py-2 ${payout.status === 'Pending' ? 'text-yellow-600' : payout.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                  {payout.status}
                </td>
                <td className="px-4 py-2">
                  {payout.status === 'Pending' && (
                    <div className="space-x-2">
                      <button
                        onClick={() => processPayout(payout.id, 'Completed')}
                        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => processPayout(payout.id, 'Failed')}
                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500"
                      >
                        Reject
                      </button>
                    </div>
                  )}
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

export default PayoutManagement;
