import React, { useState, useEffect } from 'react';

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem('foodsphere_token');
        const res = await fetch(`${import.meta.env.VITE_API_URL}/donations/my`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        
        if (res.ok) {
          setDonations(data);
        } else {
          setError(data.message || 'Failed to fetch donations');
        }
      } catch (err) {
        setError('Server error while loading donations');
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary text-label-sm font-label-sm font-semibold border border-tertiary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Available
          </span>
        );
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
      case 'Expired':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/30 text-error text-label-sm font-label-sm font-semibold border border-error/20">
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Expired
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
      <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface tracking-tight mb-2">My Donations</h1>
        <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant">History and status of your food donations.</p>
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
             <span className="material-symbols-outlined text-[18px]">history</span>
             Donation Log
          </div>
        </div>
        
        {loading ? (
          <div className="p-8 md:p-10 text-center text-on-surface-variant animate-pulse">Loading donations...</div>
        ) : donations.length === 0 ? (
          <div className="p-8 md:p-10 text-center text-on-surface-variant">No donations found.</div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-variant/30">
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Name</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Category</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Donation Date</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                    <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant/30">
                  {donations.map((item) => (
                    <tr key={item._id} className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{item.foodName}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{item.category}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{item.quantity}</td>
                      <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">
                        {new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right">
                        <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col p-4 gap-4 bg-surface/30">
              {donations.map((item) => (
                <div key={item._id} className="bg-surface-bright border border-surface-variant/50 p-5 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-title-md font-title-md text-on-surface leading-tight">{item.foodName}</h4>
                      <p className="text-label-md text-on-surface-variant mt-1">{item.category}</p>
                    </div>
                    <div className="shrink-0">{getStatusBadge(item.status)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-surface-variant/30">
                    <div>
                      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Quantity</p>
                      <p className="text-body-md text-on-surface font-medium">{item.quantity}</p>
                    </div>
                    <div>
                      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Date</p>
                      <p className="text-body-md text-on-surface font-medium">{new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-xl text-label-lg font-label-lg bg-surface-container-low border border-surface-variant/80 hover:bg-surface-container transition-colors text-on-surface">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
