"use client"
import React, { useState } from 'react';

const EditAboutus = () => {
  const [Mission, setMission] = useState('');
  const [Story, setStory] = useState(null);
 

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
      Mission,
      Story,
      
    });
  };

  return (
    <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
    <div className="row">
        <div className='flex flex-row gap-4 mb-8'>
        <a href='#about'><button type='button' className="p-[10px] px-[20px] h-[56px] bg-white inline-flex items-center justify-center cursor-pointer transition-all duration-[400ms] ease-in-out rounded-md fw-medium">Edit About us</button></a>
        <a href='#terms'><button type='button' className="p-[10px] px-[20px] h-[56px] bg-white inline-flex items-center justify-center cursor-pointer transition-all duration-[400ms] ease-in-out rounded-md fw-medium">Edit Terms&Conditions </button></a>

        </div>
    <div id='about' className="sb2-2-add-blog sb2-2-1">
      <div className="box-inn-sp">
        <div className="inn-title">
          <h4>Edit About ous page</h4>
          <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
        </div>
        <div className="bor">
          <form onSubmit={handleSubmit}>
            <div className="row flex flex-col gap-4">
              <div className="input-field col s12">
                <input
                  id="list-title"
                  type="text"
                  className="validate"
                  value={Mission}
                  onChange={(e) => setMission(e.target.value)}
                  required
                />
                <label htmlFor="list-title">Our Mission</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="list-title"
                  type="text"
                  className="validate"
                  value={Story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                />
                <label htmlFor="list-title">Our Story</label>
              </div>

              
              </div>
              <div className="input-field col s12">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large p-[10px] px-[20px] h-[56px] bg-white inline-flex items-center justify-center cursor-pointer transition-all duration-[400ms] ease-in-out rounded-md fw-medium mt-8"
                  value="Submit"
                />
              </div>
          </form>
        </div>
      </div>
    </div>
    {/* <div id='terms' className="sb2-2-add-blog sb2-2-1">
      <div className="box-inn-sp">
        <div className="inn-title">
          <h4>Edit About ous page</h4>
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
                  value={Mission}
                  onChange={(e) => setMission(e.target.value)}
                  required
                />
                <label htmlFor="list-title">Our Mission</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="list-title"
                  type="text"
                  className="validate"
                  value={Story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                />
                <label htmlFor="list-title">Our Mission</label>
              </div>

              
              </div>
              <div className="input-field col s12">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large"
                  value="Submit"
                />
              </div>
          </form>
        </div>
      </div>
    </div> */}
    </div>
    </div>
  );
};

export default EditAboutus;
