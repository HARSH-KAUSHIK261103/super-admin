// Import necessary components and icons
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineAddCircle,MdEdit,MdDeleteForever } from "react-icons/md";

export default function JobCategory() {
  return (
    <div className='float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]'>
    <div className="sb2-2-add-blog sb2-2-1">
      <h2>Job Category</h2>
      <p>
        The .table class adds basic styling (light padding and only horizontal
        dividers) to a table:
      </p>

      <ul className="nav nav-tabs tab-list">
        <li className="active">
          <a data-toggle="tab" href="#home">
            <MdOutlineAddCircle aria-hidden="true" /> <span>Add </span>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu1">
            <MdEdit aria-hidden="true" /> <span>Edit</span>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu2">
            <MdDeleteForever aria-hidden="true" /> <span>Delete</span>
          </a>
        </li>
       
      </ul>

      <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
          <div className="box-inn-sp">
            {/* <div className="inn-title">
              <h4>Listing Information</h4>
              <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
            </div> */}
            <div className="bor">
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="list-title" type="text" className="validate" />
                    <label htmlFor="list-title">Cayegory Name</label>
                  </div>
                  {/* <div className="input-field col s12">
                    <input id="list-name" type="text" className="validate" />
                    <label htmlFor="list-name">Contact Person</label>
                  </div> */}
                </div>

                {/* <div className="row">
                  <div className="input-field col s12">
                    <div className="chips chips-placeholder"></div>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="textarea1">Listing Descriptions:</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s6">
                    <select multiple>
                      <option value="" disabled selected>
                        Choose Category
                      </option>
                      <option value="1">Hotels</option>
                      <option value="2">Educations</option>
                      <option value="3">Medical</option>
                      <option value="3">Health</option>
                      <option value="3">Fitness</option>
                      <option value="3">Tution</option>
                      <option value="3">Software</option>
                      <option value="3">Wedding</option>
                      <option value="3">Party</option>
                      <option value="3">Spa/Club</option>
                    </select>
                    <label>Select Category</label>
                  </div>

                  <div className="input-field col s6">
                    <select multiple>
                      <option value="" disabled selected>
                        Choose Category
                      </option>
                      <option value="1">Hotels</option>
                      <option value="2">Educations</option>
                      <option value="3">Medical</option>
                      <option value="3">Health</option>
                      <option value="3">Fitness</option>
                      <option value="3">Tution</option>
                      <option value="3">Software</option>
                      <option value="3">Wedding</option>
                      <option value="3">Party</option>
                      <option value="3">Spa/Club</option>
                    </select>
                    <label>Select Sub Category</label>
                  </div>
                </div> */}

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
    </div>
  );
}
