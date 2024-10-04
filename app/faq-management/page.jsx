"use client"
import { useState } from 'react';

const FAQManagement = () => {
  // State to manage FAQs
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'How to create an account?', answer: 'You can create an account by clicking on the Sign Up button.' },
    { id: 2, question: 'How do I reset my password?', answer: 'Go to the Forgot Password page and follow the instructions.' },
  ]);

  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' });
  const [editFAQ, setEditFAQ] = useState(null); // For editing an existing FAQ
  const [showConfirmation, setShowConfirmation] = useState(null); // For delete confirmation

  // Function to handle form submission for adding or updating FAQ
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editFAQ) {
      // Update existing FAQ
      setFaqs(
        faqs.map((faq) =>
          faq.id === editFAQ.id ? { ...editFAQ, question: newFAQ.question, answer: newFAQ.answer } : faq
        )
      );
    } else {
      // Add new FAQ
      setFaqs([...faqs, { ...newFAQ, id: faqs.length + 1 }]);
    }
    setNewFAQ({ question: '', answer: '' });
    setEditFAQ(null);
  };

  // Function to handle deleting FAQ
  const handleDelete = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
    setShowConfirmation(null);
  };

  // Function to handle editing FAQ
  const handleEdit = (faq) => {
    setEditFAQ(faq);
    setNewFAQ({ question: faq.question, answer: faq.answer });
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-4xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">FAQ Management</h1>

      {/* Form for Adding or Editing FAQs */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Question:</label>
          <input
            type="text"
            value={newFAQ.question}
            onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
            placeholder="Enter your question"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Answer:</label>
          <textarea
            value={newFAQ.answer}
            onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
            placeholder="Enter the answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
        >
          {editFAQ ? 'Update FAQ' : 'Add FAQ'}
        </button>
      </form>

      {/* FAQ List */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Existing FAQs</h2>
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq.id} className="p-4 bg-white rounded-lg shadow-md">
            <p className="font-bold text-gray-800">{faq.question}</p>
            <p className="text-gray-600 mt-2">{faq.answer}</p>

            <div className="mt-4 space-x-4">
              <button
                className="text-indigo-600 hover:text-indigo-800 font-bold"
                onClick={() => handleEdit(faq)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:text-red-800 font-bold"
                onClick={() => setShowConfirmation(faq.id)}
              >
                Delete
              </button>
            </div>

            {/* Confirmation Popup for Deletion */}
            {showConfirmation === faq.id && (
              <div className="mt-4 bg-red-100 p-4 rounded-lg">
                <p className="text-red-800">Are you sure you want to delete this FAQ?</p>
                <button
                  className="mt-2 bg-red-600 text-white font-bold py-1 px-3 rounded hover:bg-red-500"
                  onClick={() => handleDelete(faq.id)}
                >
                  Yes, Delete
                </button>
                <button
                  className="mt-2 ml-4 bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded hover:bg-gray-400"
                  onClick={() => setShowConfirmation(null)}
                >
                  Cancel
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default FAQManagement;
