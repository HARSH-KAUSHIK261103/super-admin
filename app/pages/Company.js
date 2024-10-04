import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdSubject, MdPlayForWork, MdMoreVert } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

const Company = ({ title, subtitle, campaigns }) => {
    return (
        <div className="col-md-6">
            <div className="box-inn-sp">
                <div className="inn-title">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                    <button className='dropdown-button drop-down-meta'>
                        <MdMoreVert />
                    </button>
                    <ul className='dropdown-content'>
                        <li><Link href="#!">Add New</Link></li>
                        <li><Link href="#!">Edit</Link></li>
                        <li><Link href="#!">Update</Link></li>
                        <li className="divider"></li>
                        <li><Link href="#!"><RiDeleteBin5Line /> Delete</Link></li>
                        <li><Link href="#!"><MdSubject /> View All</Link></li>
                        <li><Link href="#!"><MdPlayForWork /> Download</Link></li>
                    </ul>
                </div>
                <div className="tab-inn">
                    <div className="table-responsive table-desi">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Country/State</th>
                                    <th>Client</th>
                                    <th>Changes</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((campaign, index) => (
                                    <tr key={index}>
                                        <td><span className="txt-dark weight-500">{campaign.location}</span></td>
                                        <td>{campaign.client}</td>
                                        <td>
                                            <span className={campaign.change >= 0 ? "txt-success" : "txt-danger"}>
                                                <FaAngleUp aria-hidden="true" />
                                                <span>{campaign.change}%</span>
                                            </span>
                                        </td>
                                        <td><span className="txt-dark weight-500">{campaign.budget}</span></td>
                                        <td>
                                            <span className={`label ${campaign.status === 'Active' ? 'label-success' : campaign.status === 'Closed' ? 'label-danger' : 'label-default'}`}>
                                                {campaign.status}
                                            </span>
                                        </td>
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

export default Company;
