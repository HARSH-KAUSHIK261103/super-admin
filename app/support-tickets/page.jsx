"use client"
// import React, { useState } from 'react';

// const SupportTickets = () => {
//   const [tickets, setTickets] = useState([
//     { id: 1, user: 'Job Seeker A', subject: 'Issue with job application', status: 'Open', description: 'Cannot apply to job posts.' },
//     { id: 2, user: 'Job Provider B', subject: 'Billing issue', status: 'Resolved', description: 'Incorrect billing for job postings.' },
//   ]);

//   const [newTicket, setNewTicket] = useState({
//     user: '',
//     subject: '',
//     description: '',
//   });

//   const [responseText, setResponseText] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTicket({ ...newTicket, [name]: value });
//   };

//   const createTicket = () => {
//     if (newTicket.user && newTicket.subject && newTicket.description) {
//       setTickets([...tickets, { id: tickets.length + 1, status: 'Open', ...newTicket }]);
//       setNewTicket({ user: '', subject: '', description: '' });
//     }
//   };

//   const respondToTicket = (id) => {
//     alert(`Response sent for Ticket ID: ${id}`);
//     setResponseText('');
//   };

//   const markAsResolved = (id) => {
//     setTickets(
//       tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'Resolved' } : ticket)
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Support Ticket Management</h1>

//       {/* Form for creating a new support ticket */}
//       {/* <form className="grid grid-cols-2 gap-6 mb-6">
//         <div className="col-span-2 flex flex-col">
//           <label className="mb-2 text-sm text-gray-600" htmlFor="user">User Name:</label>
//           <input
//             type="text"
//             id="user"
//             name="user"
//             value={newTicket.user}
//             placeholder="Enter User Name"
//             onChange={handleInputChange}
//             className="p-3 border rounded-lg shadow-sm"
//           />
//         </div>
//         <div className="col-span-2 flex flex-col">
//           <label className="mb-2 text-sm text-gray-600" htmlFor="subject">Subject:</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={newTicket.subject}
//             placeholder="Enter Subject"
//             onChange={handleInputChange}
//             className="p-3 border rounded-lg shadow-sm"
//           />
//         </div>
//         <div className="col-span-2 flex flex-col">
//           <label className="mb-2 text-sm text-gray-600" htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={newTicket.description}
//             placeholder="Describe the issue"
//             onChange={handleInputChange}
//             className="p-3 border rounded-lg shadow-sm"
//           />
//         </div>
//         <div className="col-span-2 flex justify-center">
//           <button
//             type="button"
//             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//             onClick={createTicket}
//           >
//             Create Ticket
//           </button>
//         </div>
//       </form> */}

//       {/* List of Support Tickets */}
//       <h2 className="text-xl font-bold text-gray-800 mb-4">Support Tickets</h2>
//       <table className="table-auto w-full bg-white rounded-lg shadow-lg">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="p-3">User</th>
//             <th className="p-3">Subject</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tickets.map((ticket) => (
//             <tr key={ticket.id} className="border-b">
//               <td className="p-3">{ticket.user}</td>
//               <td className="p-3">{ticket.subject}</td>
//               <td className="p-3">
//                 <span className={`px-3 py-1 rounded-lg ${ticket.status === 'Resolved' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
//                   {ticket.status}
//                 </span>
//               </td>
//               <td className="p-3">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mr-2"
//                   onClick={() => respondToTicket(ticket.id)}
//                 >
//                   Respond
//                 </button>
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                   onClick={() => markAsResolved(ticket.id)}
//                 >
//                   Mark as Resolved
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SupportTickets;
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const SupportTickets = () => {
//   const [tickets, setTickets] = useState([
//     { id: 1, user: 'Job Seeker A', subject: 'Issue with job application', status: 'Open', description: 'Cannot apply to job posts.' },
//     { id: 2, user: 'Job Provider B', subject: 'Billing issue', status: 'Resolved', description: 'Incorrect billing for job postings.' },
//   ]);

//   const router = useRouter();

//   const markAsResolved = (id) => {
//     setTickets(
//       tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'Resolved' } : ticket)
//     );
//   };

//   const redirectToRespondPage = (id) => {
//     router.push(`/tickets/${id}`);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Support Ticket Management</h1>

//       {/* List of Support Tickets */}
//       <h2 className="text-xl font-bold text-gray-800 mb-4">Support Tickets</h2>
//       <table className="table-auto w-full bg-white rounded-lg shadow-lg">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="p-3">User</th>
//             <th className="p-3">Subject</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tickets.map((ticket) => (
//             <tr key={ticket.id} className="border-b">
//               <td className="p-3">{ticket.user}</td>
//               <td className="p-3">{ticket.subject}</td>
//               <td className="p-3">
//                 <span className={`px-3 py-1 rounded-lg ${ticket.status === 'Resolved' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
//                   {ticket.status}
//                 </span>
//               </td>
//               <td className="p-3">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mr-2"
//                   onClick={() => redirectToRespondPage(ticket.id)}
//                 >
//                   Respond
//                 </button>
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                   onClick={() => markAsResolved(ticket.id)}
//                 >
//                   Mark as Resolved
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SupportTickets;

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router version of useRouter

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    { id: 1, user: 'Job Seeker A', subject: 'Issue with job application', status: 'Open', description: 'Cannot apply to job posts.' },
    { id: 2, user: 'Job Provider B', subject: 'Billing issue', status: 'Resolved', description: 'Incorrect billing for job postings.' },
  ]);

  const router = useRouter(); // Use the new `useRouter` from 'next/navigation'

  const markAsResolved = (id) => {
    setTickets(
      tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'Resolved' } : ticket)
    );
  };

  const redirectToRespondPage = (id) => {
    router.push(`/support-tickets/${id}`);
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Support Ticket Management</h1>

      {/* List of Support Tickets */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Support Tickets</h2>
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">User</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-b">
              <td className="p-3">{ticket.user}</td>
              <td className="p-3">{ticket.subject}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-lg ${ticket.status === 'Resolved' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {ticket.status}
                </span>
              </td>
              <td className="p-3">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mr-2"
                  onClick={() => redirectToRespondPage(ticket.id)}
                >
                  Respond
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  onClick={() => markAsResolved(ticket.id)}
                >
                  Mark as Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default SupportTickets;