"use client"
import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const syntheticData = generateSyntheticTransactionData();
        setTransactions(syntheticData);
    }, []);

    const generateSyntheticTransactionData = () => {
        const daysInMonth = 30;
        const paymentMethods = ['Credit/Debit Card', 'PayPal', 'Stripe', 'Bank Transfer'];
        const userTypes = ['Job Provider', 'Job Seeker'];
        const transactionHistory = [];

        for (let i = 0; i < 50; i++) { // Generating 50 random transactions
            const transactionID = `TXN${Math.floor(Math.random() * 1000000)}`;
            const date = `2024-09-${Math.floor(Math.random() * daysInMonth) + 1}`;
            const amount = (Math.random() * 100).toFixed(2);
            const paymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
            const userType = userTypes[Math.floor(Math.random() * userTypes.length)];

            transactionHistory.push({
                transactionID,
                date,
                amount,
                paymentMethod,
                userType,
            });
        }

        return transactionHistory;
    };

    return (
        <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
        <div>
            <h1>Transaction History</h1>

            {/* Transaction Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Transaction ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>User Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Payment Method</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.transactionID}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.userType}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.paymentMethod}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        </div>
    );
};

export default TransactionHistory;
