"use client"
import React, { useState } from 'react';

const InvoiceManagement = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, employer: 'Company A', invoiceNumber: 'INV-001', date: '2024-09-01', amount: 500, description: 'Job Posting Package' },
    { id: 2, employer: 'Company B', invoiceNumber: 'INV-002', date: '2024-09-05', amount: 300, description: 'Advertisement Fees' },
  ]);

  const [newInvoice, setNewInvoice] = useState({
    employer: '',
    invoiceNumber: '',
    date: '',
    amount: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({ ...newInvoice, [name]: value });
  };

  const createInvoice = () => {
    if (newInvoice.employer && newInvoice.invoiceNumber && newInvoice.date && newInvoice.amount && newInvoice.description) {
      setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice }]);
      setNewInvoice({ employer: '', invoiceNumber: '', date: '', amount: '', description: '' });
    }
  };

  const sendInvoice = (invoice) => {
    alert(`Invoice ${invoice.invoiceNumber} sent to ${invoice.employer}!`);
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Invoice Management</h1>

      {/* Form for creating a new invoice */}
      <form className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="employer">Employer Name:</label>
          <input
            type="text"
            id="employer"
            name="employer"
            value={newInvoice.employer}
            placeholder="Enter Employer Name"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="invoiceNumber">Invoice Number:</label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={newInvoice.invoiceNumber}
            placeholder="Enter Invoice Number"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newInvoice.date}
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="amount">Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={newInvoice.amount}
            placeholder="Enter Amount"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="description">Service Description:</label>
          <textarea
            id="description"
            name="description"
            value={newInvoice.description}
            placeholder="Enter Service Description"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={createInvoice}
          >
            Create Invoice
          </button>
        </div>
      </form>

      {/* List of Invoices */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Invoices</h2>
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Employer</th>
            <th className="p-3">Invoice Number</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b">
              <td className="p-3">{invoice.employer}</td>
              <td className="p-3">{invoice.invoiceNumber}</td>
              <td className="p-3">{invoice.date}</td>
              <td className="p-3">${invoice.amount}</td>
              <td className="p-3">{invoice.description}</td>
              <td className="p-3">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mr-2"
                  onClick={() => sendInvoice(invoice)}
                >
                  Send Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default InvoiceManagement;
