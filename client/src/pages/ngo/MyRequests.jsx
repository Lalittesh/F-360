import React, { useState, useEffect } from 'react';

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyRequests = async () => {
      try {
        const token = localStorage.getItem('foodsphere_token');
        const res = await fetch(`${import.meta.env.VITE_API_URL}/requests/my`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        
        if (res.ok) {
          setRequests(data);
        } else {
          setError(data.message || 'Failed to fetch requests');
        }
      } catch (err) {
        setError('Server error while loading requests');
      } finally {
        setLoading(false);
      }
    };
    fetchMyRequests();
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-label-sm font-label-sm font-semibold border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Requested
          </span>
        );
      case 'Claimed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/30 text-primary text-label-sm font-label-sm font-semibold border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Claimed
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant/40 text-on-surface-variant text-label-sm font-label-sm font-semibold border border-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Completed
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">My Requests</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Track your requested food donations and their statuses.</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
          <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
        </div>
      )}

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-6 md:px-8 py-5 border-b border-surface-variant/40 bg-surface-container-low/20">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant uppercase tracking-widest font-medium">
             <span className="material-symbols-outlined text-[18px]">history</span>
             Request Log
          </div>
        </div>
        
        {loading ? (
          <div className="p-10 text-center text-on-surface-variant animate-pulse">Loading requests...</div>
        ) : requests.length === 0 ? (
          <div className="p-10 text-center text-on-surface-variant">You have not made any requests yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low/30 border-b border-surface-variant/30">
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Name</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Restaurant</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Request Date</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/30">
                {requests.map((req) => (
                  <tr key={req._id} className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{req.donation?.foodName}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.restaurant?.name || 'Unknown'}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.quantity}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">
                      {new Date(req.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      {getStatusBadge(req.status)}
                    </td>
                    <td className="px-6 md:px-8 py-5 text-right">
                      <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;
