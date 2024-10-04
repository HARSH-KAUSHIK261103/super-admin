"use client"; // This line makes it a Client Component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const List = ({ listings }) => {
    const handleDelete = (id) => {
        // Implement delete functionality
        console.log(`Delete listing with id: ${id}`);
        // Add logic to actually delete the listing here
    };

    return (
        <div className="tab-inn">
            <div className="table-responsive table-desi">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Job Type</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>View</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((listing) => (
                            <tr key={listing.id}>
                                <td>
                                    <span className="list-img">
                                        <Image src={listing.image} alt={listing.name} width={50} height={50} />
                                    </span>
                                    <span className="list-enq-name">{listing.name}</span>
                                </td>
                                <td>
                                    <Link href={`/listings/${listing.id}`}>
                                        {/* <span className="list-enq-name">{listing.name}</span> */}
                                        <span className="list-enq-city">{listing.title}</span>
                                    </Link>
                                </td>
                                <td>{listing.type}</td>
                                <td>{listing.Phone}</td>
                                <td>{listing.email}</td>
                                {/* <td>{listing.country}</td> */}
                                <td>
                                    <Link href={`/listing-view/${listing.id}`}>
                                        <FaEye aria-hidden="true" />
                                    </Link>
                                </td>
                                {/* <td>
                                    <Link href={`/listing-edit/${listing.id}`}>
                                        <FaPencilAlt aria-hidden="true" />
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#" onClick={() => handleDelete(listing.id)}>
                                        <FaTrashAlt aria-hidden="true" />
                                    </Link>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
