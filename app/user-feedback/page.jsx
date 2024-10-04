"use client"
import { useState, useEffect } from 'react';

const FeedbackPage = () => {
  // State to store feedbacks and overall statistics
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState({});

  // Synthetic feedback data (you can replace it with real data from your backend or database)
  useEffect(() => {
    const syntheticFeedback = [
      { name: 'John Doe', rating: 5, comments: 'Great platform!', date: new Date() },
      { name: 'Jane Smith', rating: 4, comments: 'Very useful, but room for improvement.', date: new Date() },
      { name: 'Alex Green', rating: 3, comments: 'Average experience.', date: new Date() },
      { name: 'Sam Brown', rating: 5, comments: 'Absolutely loved it!', date: new Date() },
      { name: 'Chris Blue', rating: 2, comments: 'Not satisfied.', date: new Date() },
      // Add more synthetic data here
    ];

    setFeedbackList(syntheticFeedback);
    calculateOverallRating(syntheticFeedback);
  }, []);

  // Function to calculate average rating and distribution
  const calculateOverallRating = (feedbacks) => {
    const totalRating = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
    const avgRating = (totalRating / feedbacks.length).toFixed(1);
    setAverageRating(avgRating);

    const distribution = feedbacks.reduce((acc, feedback) => {
      acc[feedback.rating] = (acc[feedback.rating] || 0) + 1;
      return acc;
    }, {});
    setRatingDistribution(distribution);
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">User Feedback & Ratings</h1>

      {/* Overall Rating Statistics */}
      <div className="mb-8 text-center">
        <h2 className="text-lg font-bold text-gray-700">Overall Statistics</h2>
        <p className="text-gray-600 mt-2">
          <strong>Total Feedbacks:</strong> {feedbackList.length}
        </p>
        <p className="text-gray-600">
          <strong>Average Rating:</strong> {averageRating} / 5
        </p>
      </div>

      {/* Rating Breakdown */}
      <div className="mb-8 text-center">
        <h3 className="text-lg font-bold text-gray-700">Rating Distribution</h3>
        <ul className="text-gray-600">
          {[5, 4, 3, 2, 1].map((rating) => (
            <li key={rating}>
              <strong>{rating} Stars:</strong> {ratingDistribution[rating] || 0} feedback(s)
            </li>
          ))}
        </ul>
      </div>

      {/* Feedback List */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">All User Feedback</h3>
        <ul className="space-y-4">
          {feedbackList.map((feedback, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md">
              <p><strong>{feedback.name}</strong> (Rating: {feedback.rating})</p>
              <p className="mt-2">{feedback.comments}</p>
              <p className="text-sm text-gray-500">Submitted on: {feedback.date.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FeedbackPage;
