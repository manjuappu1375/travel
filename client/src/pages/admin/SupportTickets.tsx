import React from 'react';

type Ticket = {
  id: number;
  user: string;
  subject: string;
  status: 'open' | 'in progress' | 'closed';
};

const mockTickets: Ticket[] = [
  {
    id: 101,
    user: 'John Doe',
    subject: 'Booking issue with Manali tour',
    status: 'open',
  },
  {
    id: 102,
    user: 'Jane Smith',
    subject: 'Payment not reflecting',
    status: 'in progress',
  },
  {
    id: 103,
    user: 'Ali Khan',
    subject: 'Cancel request for Goa trip',
    status: 'closed',
  },
];

const getStatusColor = (status: Ticket['status']) => {
  switch (status) {
    case 'open':
      return '#f44336';
    case 'in progress':
      return '#ff9800';
    case 'closed':
      return '#4caf50';
    default:
      return '#9e9e9e';
  }
};

const SupportTickets: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📬 Support Tickets</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Ticket ID</th>
            <th style={{ padding: '10px' }}>User</th>
            <th style={{ padding: '10px' }}>Subject</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTickets.map((ticket) => (
            <tr key={ticket.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px' }}>{ticket.id}</td>
              <td style={{ padding: '10px' }}>{ticket.user}</td>
              <td style={{ padding: '10px' }}>{ticket.subject}</td>
              <td style={{ padding: '10px', color: getStatusColor(ticket.status), fontWeight: 'bold' }}>
                {ticket.status.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTickets;
