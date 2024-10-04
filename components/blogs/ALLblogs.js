"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const BlogPostsTable = ({ posts}) => {
    const handleEdit = (id) => {
        // Implement edit functionality, e.g., navigate to edit page
        console.log(`Edit post with ID: ${id}`);
      };
    
      const handleDelete = (id) => {
        // Implement delete functionality, e.g., remove from state or make API call
        console.log(`Delete post with ID: ${id}`);
        // Example: Remove post from state
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      };
  return (
    <div className="sb2-2-1">
      <h2>All Blog Posts</h2>
      <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Categories</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <tr key={post.id || index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.categories.join(', ')}</td>
                <td>{post.date}</td>
                <td>
                  <button
                    onClick={() => onEdit(post.id)}
                    className="sb2-2-1-edit btn-icon"
                    aria-label="Edit Post"
                  >
                    <FaPencilAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(post.id)}
                    className="sb2-2-1-delete btn-icon"
                    aria-label="Delete Post"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                No blog posts available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      
    </div>
  );
};

// BlogPostsTable.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       title: PropTypes.string.isRequired,
//       categories: PropTypes.arrayOf(PropTypes.string).isRequired,
//       date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onEdit: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default BlogPostsTable;
