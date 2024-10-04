"use client"
import React, { useState } from 'react';

const SubscriptionPlans = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Basic Plan', price: 19.99, duration: '1 Month', features: 'Up to 10 job postings' },
    { id: 2, name: 'Pro Plan', price: 49.99, duration: '3 Months', features: 'Unlimited job postings' },
  ]);

  const [newPlan, setNewPlan] = useState({ name: '', price: '', duration: '', features: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editPlanId, setEditPlanId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // State to show delete confirmation dialog
  const [planToDelete, setPlanToDelete] = useState(null); // Store the plan to be deleted

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan({ ...newPlan, [name]: value });
  };

  const createPlan = () => {
    if (newPlan.name && newPlan.price && newPlan.duration && newPlan.features) {
      setPlans([...plans, { id: plans.length + 1, ...newPlan }]);
      resetForm();
    }
  };

  const startEditPlan = (plan) => {
    setIsEditing(true);
    setEditPlanId(plan.id);
    setNewPlan({ name: plan.name, price: plan.price, duration: plan.duration, features: plan.features });
  };

  const updatePlan = () => {
    setPlans(plans.map((plan) => (plan.id === editPlanId ? { id: editPlanId, ...newPlan } : plan)));
    resetForm();
  };

  const confirmDeletePlan = (plan) => {
    setShowDeleteConfirm(true); // Show the confirmation dialog
    setPlanToDelete(plan); // Store the plan to be deleted
  };

  const deletePlan = () => {
    if (planToDelete) {
      setPlans(plans.filter((plan) => plan.id !== planToDelete.id)); // Delete the plan
    }
    setShowDeleteConfirm(false); // Hide the confirmation dialog
    setPlanToDelete(null); // Reset the plan to be deleted
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false); // Hide the confirmation dialog
    setPlanToDelete(null); // Reset the plan to be deleted
  };

  const resetForm = () => {
    setNewPlan({ name: '', price: '', duration: '', features: '' });
    setIsEditing(false);
    setEditPlanId(null);
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Subscription Plans</h1>

      {/* Form for creating/editing subscription plans */}
      <form className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="name">Plan Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newPlan.name}
            placeholder="Enter Plan Name"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newPlan.price}
            placeholder="Enter Price"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={newPlan.duration}
            placeholder="e.g., 1 Month, 3 Months"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-600" htmlFor="features">Features:</label>
          <input
            type="text"
            id="features"
            name="features"
            value={newPlan.features}
            placeholder="Enter Features"
            onChange={handleInputChange}
            className="p-3 border rounded-lg shadow-sm"
          />
        </div>

        <div className="col-span-2 flex justify-center space-x-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={isEditing ? updatePlan : createPlan}
          >
            {isEditing ? 'Update Plan' : 'Create Plan'}
          </button>
          {isEditing && (
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Subscription Plans Table */}
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Plan Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Features</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id} className="border-b">
              <td className="p-3">{plan.name}</td>
              <td className="p-3">${plan.price}</td>
              <td className="p-3">{plan.duration}</td>
              <td className="p-3">{plan.features}</td>
              <td className="p-3">
                <button
                  className="text-blue-500 hover:underline mr-2"
                  onClick={() => startEditPlan(plan)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => confirmDeletePlan(plan)} // Call the confirmDeletePlan function
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Are you sure you want to delete this plan?</h3>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={deletePlan} // Confirm delete
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                onClick={cancelDelete} // Cancel delete
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default SubscriptionPlans;
