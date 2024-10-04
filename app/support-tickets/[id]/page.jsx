"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TicketDetails = ({ params }) => {
  const router = useRouter();
  const { id } = params;  // Access route parameters

  const [tickets, setTickets] = useState([
    { id: 1, user: 'Job Seeker A', subject: 'Issue with job application', status: 'Open', description: 'Cannot apply to job posts.' },
    { id: 2, user: 'Job Provider B', subject: 'Billing issue', status: 'Resolved', description: 'Incorrect billing for job postings.' },
  ]);

  const ticket = tickets.find(t => t.id === parseInt(id));

  const [response, setResponse] = useState('');

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleResponseSubmit = () => {
    alert('Response sent successfully!');
    setResponse('');

    // Mark the ticket as Resolved
    setTickets(
      tickets.map(ticket => ticket.id === parseInt(id) ? { ...ticket, status: 'Resolved' } : ticket)
    );

    // Redirect back to tickets list
    router.push('/support-tickets');
  };

  if (!ticket) return <p>Loading...</p>;

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
            <div className="row">
                  <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Ticket Details</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">{ticket.subject}</h2>
        <p className="mb-4"><strong>User:</strong> {ticket.user}</p>
        <p className="mb-4"><strong>Status:</strong> {ticket.status}</p>
        <p className="mb-4"><strong>Description:</strong> {ticket.description}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Write your response:</h3>
        <textarea
          className="w-full p-3 border rounded-lg shadow-sm"
          value={response}
          onChange={handleResponseChange}
          placeholder="Write your response here..."
        ></textarea>

        <div className="mt-4 flex justify-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={handleResponseSubmit}
          >
            Send Response
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TicketDetails;
