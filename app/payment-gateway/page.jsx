"use client"
import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PaymentGatewayIntegration = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const syntheticData = generateSyntheticData();
        setData(syntheticData);
    }, []);

    const generateSyntheticData = () => {
        const daysInMonth = 30;
        const paymentGateways = ['Credit/Debit Card', 'PayPal', 'Stripe', 'Bank Transfer'];

        const data = {
            month: {
                dailyTransactions: [],
                gatewayUsage: {},
            },
            total: {
                transactions: 0,
                revenue: 0,
            },
            gateways: {
                'Credit/Debit Card': 0,
                'PayPal': 0,
                'Stripe': 0,
                'Bank Transfer': 0,
            },
        };

        let totalTransactions = 0;
        let totalRevenue = 0;

        // Initialize payment gateway usage
        paymentGateways.forEach(gateway => {
            data.month.gatewayUsage[gateway] = 0;
        });

        // Generate synthetic data for transactions and revenue over the last month (30 days)
        for (let i = 0; i < daysInMonth; i++) {
            const creditCardTransactions = Math.floor(Math.random() * 50);
            const paypalTransactions = Math.floor(Math.random() * 30);
            const stripeTransactions = Math.floor(Math.random() * 40);
            const bankTransferTransactions = Math.floor(Math.random() * 20);

            const dailyTotal = creditCardTransactions + paypalTransactions + stripeTransactions + bankTransferTransactions;
            const dailyRevenue = dailyTotal * Math.random() * 100;

            data.month.dailyTransactions.push(dailyTotal);

            // Add to gateway usage
            data.month.gatewayUsage['Credit/Debit Card'] += creditCardTransactions;
            data.month.gatewayUsage['PayPal'] += paypalTransactions;
            data.month.gatewayUsage['Stripe'] += stripeTransactions;
            data.month.gatewayUsage['Bank Transfer'] += bankTransferTransactions;

            totalTransactions += dailyTotal;
            totalRevenue += dailyRevenue;
        }

        data.total.transactions = totalTransactions;
        data.total.revenue = totalRevenue.toFixed(2); // rounding to two decimal places for revenue

        return data;
    };

    if (!data) return <div>Loading...</div>;

    const monthLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    // Data for monthly transaction breakdown (bar chart)
    const monthlyTransactionsGraphData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Transactions',
                data: data.month.dailyTransactions,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    // Data for payment gateway distribution (pie chart)
    const gatewayUsageData = {
        labels: Object.keys(data.month.gatewayUsage),
        datasets: [
            {
                label: 'Payment Gateway Usage',
                data: Object.values(data.month.gatewayUsage),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            },
        ],
    };

    const graphStyle = {
        width: '600px', // Adjusted size to make smaller
        height: '300px', // Adjusted size to make smaller
    };

    return (
        <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
            <h1>Payment Gateway Integration</h1>

            {/* Display total transactions and revenue */}
            <p>Total Transactions this Month: {data.total.transactions}</p>
            <p>Total Revenue this Month: ${data.total.revenue}</p>

            {/* Monthly Transaction Breakdown */}
            <div>
                <h2>Monthly Transaction Breakdown</h2>
                <Bar data={monthlyTransactionsGraphData} style={graphStyle} />
                <p>Total Transactions for this Month: {data.total.transactions}</p>
            </div>

            {/* Payment Gateway Usage */}
            <div>
                <h2>Payment Gateway Usage</h2>
                <Pie data={gatewayUsageData} style={graphStyle} />

                {/* Payment Gateway Data Below the Pie Chart */}
                <div>
                    <h3>Transactions by Payment Gateway</h3>
                    <table style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Payment Gateway</th>
                                <th>Transactions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data.month.gatewayUsage).map((gateway, index) => (
                                <tr key={index}>
                                    <td>{gateway}</td>
                                    <td>{data.month.gatewayUsage[gateway]}</td>
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

export default PaymentGatewayIntegration;
