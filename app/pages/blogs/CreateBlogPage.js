"use client"
import React, { useState } from 'react';

const AddPost = () => {
  const [postName, setPostName] = useState('');
  const [file, setFile] = useState(null);
  const [blogDescription, setBlogDescription] = useState('');
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [authorName, setAuthorName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setCategory(options);
  };

  const handleSubCategoryChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSubCategory(options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      postName,
      file,
      blogDescription,
      category,
      subCategory,
      authorName
    });
  };

  return (
    <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
    <div className="row">
    <div className="sb2-2-add-blog sb2-2-1">
      <div className="box-inn-sp">
        <div className="inn-title">
          <h4>Add New Post</h4>
          <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
        </div>
        <div className="bor">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="list-title"
                  type="text"
                  className="validate"
                  value={postName}
                  onChange={(e) => setPostName(e.target.value)}
                  required
                />
                <label htmlFor="list-title">Post Name</label>
              </div>
              <div className="input-field col s12">
                <div className="file-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={handleFileChange} required />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload Blog Banner"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  value={blogDescription}
                  onChange={(e) => setBlogDescription(e.target.value)}
                  required
                ></textarea>
                <label htmlFor="textarea1">Blog Descriptions:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <select multiple onChange={handleCategoryChange} required>
                  <option value="" disabled selected>
                    Choose Category
                  </option>
                  <option value="1">Hotels</option>
                  <option value="2">Education</option>
                  <option value="3">Medical</option>
                  <option value="4">Health</option>
                  <option value="5">Fitness</option>
                  <option value="6">Tuition</option>
                  <option value="7">Software</option>
                  <option value="8">Wedding</option>
                  <option value="9">Party</option>
                  <option value="10">Spa/Club</option>
                </select>
                <label>Select Category</label>
              </div>
              <div className="input-field col s12">
                <select multiple onChange={handleSubCategoryChange} required>
                  <option value="" disabled selected>
                    Choose Sub Category
                  </option>
                  <option value="1">Hotels</option>
                  <option value="2">Education</option>
                  <option value="3">Medical</option>
                  <option value="4">Health</option>
                  <option value="5">Fitness</option>
                  <option value="6">Tuition</option>
                  <option value="7">Software</option>
                  <option value="8">Wedding</option>
                  <option value="9">Party</option>
                  <option value="10">Spa/Club</option>
                </select>
                <label>Select Sub Category</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="post-auth"
                  type="text"
                  className="validate"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
                <label htmlFor="post-auth">Author Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddPost;
