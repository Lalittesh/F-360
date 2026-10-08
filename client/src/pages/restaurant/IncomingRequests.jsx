import React, { useState, useEffect } from 'react';

const IncomingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('foodsphere_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/requests/restaurant`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (res.ok) {
        setRequests(data);
      } else {
        setError(data.message || 'Failed to fetch incoming requests');
      }
    } catch (err) {
      setError('Server error while loading requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem('foodsphere_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/requests/${id}/${action}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        // Optimistically update or re-fetch
        fetchRequests();
      } else {
        const data = await res.json();
        alert(data.message || `Failed to ${action} request`);
      }
    } catch (err) {
      alert(`Error trying to ${action} request`);
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-label-sm font-label-sm font-semibold border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Pending
          </span>
        );
      case 'Approved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/30 text-primary text-label-sm font-label-sm font-semibold border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Approved
          </span>
        );
      case 'Rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/30 text-error text-label-sm font-label-sm font-semibold border border-error/20">
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Rejected
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
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
      <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface tracking-tight mb-2">Incoming Requests</h1>
        <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant">Manage food requests from partner NGOs.</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
          <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
        </div>
      )}

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[20px] md:rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-5 md:px-8 py-4 md:py-5 border-b border-surface-variant/40 bg-surface-container-low/20">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant uppercase tracking-widest font-medium">
             <span className="material-symbols-outlined text-[18px]">notifications</span>
             Request Inbox
          </div>
        </div>
        
        {loading ? (
          <div className="p-8 md:p-10 text-center text-on-surface-variant animate-pulse">Loading requests...</div>
        ) : requests.length === 0 ? (
          <div className="p-8 md:p-10 text-center text-on-surface-variant">You have no incoming requests at the moment.</div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-variant/30">
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">NGO Name</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Item</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Request Date</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant/30">
                  {requests.map((req) => (
                    <tr key={req._id} className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{req.ngo?.name || 'Unknown NGO'}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.foodName}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.quantity}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">
                        {new Date(req.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        {getStatusBadge(req.status)}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right flex justify-end gap-2">
                        {req.status === 'Requested' ? (
                          <>
                            <button onClick={() => handleAction(req._id, 'accept')} className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-primary-container text-on-primary hover:bg-primary transition-colors font-medium">Accept</button>
                            <button onClick={() => handleAction(req._id, 'reject')} className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-transparent border border-error/50 text-error hover:bg-error-container/20 transition-colors font-medium">Reject</button>
                          </>
                        ) : (
                          <span className="text-label-sm text-on-surface-variant">No actions</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col p-4 gap-4 bg-surface/30">
              {requests.map((req) => (
                <div key={req._id} className="bg-surface-bright border border-surface-variant/50 p-5 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-title-md font-title-md text-on-surface leading-tight">{req.ngo?.name || 'Unknown NGO'}</h4>
                      <p className="text-label-md text-on-surface-variant mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">restaurant_menu</span> {req.donation?.foodName}
                      </p>
                    </div>
                    <div className="shrink-0">{getStatusBadge(req.status)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-surface-variant/30">
                    <div>
                      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Quantity</p>
                      <p className="text-body-md text-on-surface font-medium">{req.donation?.quantity}</p>
                    </div>
                    <div>
                      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Date</p>
                      <p className="text-body-md text-on-surface font-medium">{new Date(req.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {req.status === 'Requested' ? (
                    <div className="flex flex-col gap-2">
                      <button onClick={() => handleAction(req._id, 'accept')} className="w-full py-3 rounded-xl text-label-lg font-label-lg bg-primary-container text-on-primary hover:bg-primary transition-colors">
                        Accept Request
                      </button>
                      <button onClick={() => handleAction(req._id, 'reject')} className="w-full py-3 rounded-xl text-label-lg font-label-lg bg-transparent border border-error/50 text-error hover:bg-error-container/20 transition-colors">
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-label-sm text-on-surface-variant py-2">
                      No further actions available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IncomingRequests;
