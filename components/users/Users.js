"use client";
import React from 'react';
import Link from 'next/link'; // If using React Router
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'; // React Icons
import Image from 'next/image'; // If using Next.js

const UserTable = ({ users }) => {
    const handleDelete = (id) => {
        // Implement delete functionality
        console.log(`Delete user with id: ${id}`);
    };
    return (
        
        <div className="tab-inn">
            <div className="table-responsive table-desi">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Country</th>
                            {/* <th>Listings</th> */}
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <span className="list-img">
                                        <Image src={user.image} alt="" width={50} height={50} />
                                    </span>
                                </td>
                                <td>
                                    <Link href={`/users/${user.id}`}>
                                        <span className="list-enq-name">{user.name}</span>
                                        <span className="list-enq-city">{user.city}</span>
                                    </Link>
                                </td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                {/* <td>
                                    <span className="label label-primary">{user.listings}</span>
                                </td> */}
                                <td>
                                    <Link href={`/user-view/${user.id}`}>
                                        <FaEye aria-hidden="true" />
                                    </Link>
                                </td>
                                <td>
                                    <Link href={`/user-edit/${user.id}`}>
                                        <FaPencilAlt aria-hidden="true" />
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#" onClick={() => handleDelete(user.id)}>
                                        <FaTrashAlt aria-hidden="true" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default UserTable;
