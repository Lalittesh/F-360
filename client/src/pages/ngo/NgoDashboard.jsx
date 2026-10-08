import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NgoDashboard = () => {
  const ngoName = localStorage.getItem("foodsphere_ngo_name") || localStorage.getItem("foodsphere_name") || "Hope Foundation";

  const [stats, setStats] = useState({ totalRequests: 0, availableFood: 0, claimedReceived: 0 });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('foodsphere_token');
        const headers = { Authorization: `Bearer ${token}` };

        const [statsRes, recentRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/requests/stats`, { headers }),
          fetch(`${import.meta.env.VITE_API_URL}/requests/my`, { headers })
        ]);

        if (statsRes.ok && recentRes.ok) {
          const statsData = await statsRes.json();
          const recentData = await recentRes.json();
          
          setStats(statsData);
          setRecent(recentData.slice(0, 5)); // Just take top 5 for recent
        }
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
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
    <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-variant/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-variant/40 text-label-sm font-label-sm text-primary uppercase tracking-widest mb-4 shadow-sm pearl-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse jewel-gold-glow"></span>
            NGO Dashboard
          </div>
          <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">
            Welcome, {ngoName}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant">Your central hub for finding and requesting surplus food.</p>
        </div>
        
        <div className="flex flex-col items-end gap-4">
          <Link to="/ngo/profile" className="shrink-0" title="View Profile">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=150&h=150&fit=crop" 
              alt="NGO Logo" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-surface-variant/60 object-cover shadow-sm hover:scale-105 hover:border-primary/50 transition-all duration-200"
            />
          </Link>
          <Link to="/ngo/available-food" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">search</span>
            <span className="hidden sm:inline">Find Food</span>
            <span className="sm:hidden">Find</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative overflow-hidden bg-surface-bright border border-surface-variant/50 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">list_alt</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Total Requests</span>
            <span className="block text-display-sm font-display-sm text-on-surface font-semibold">
              {loading ? '...' : stats.totalRequests}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-surface-bright border border-secondary/20 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1 jewel-emerald-glow">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-secondary transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">restaurant_menu</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Available Food</span>
            <span className="block text-display-sm font-display-sm text-secondary font-semibold">
              {loading ? '...' : stats.availableFood}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-surface-bright border border-primary/20 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1 jewel-sapphire-glow">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">volunteer_activism</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Claimed/Received</span>
            <span className="block text-display-sm font-display-sm text-primary font-semibold">
              {loading ? '...' : stats.claimedReceived}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-6 md:px-8 py-6 border-b border-surface-variant/40 flex items-center justify-between">
          <h3 className="text-title-lg font-title-lg text-on-surface font-medium">Recent Requests</h3>
          <Link to="/ngo/requests" className="text-label-md font-label-md text-primary hover:text-primary-container transition-colors">View All</Link>
        </div>
        
        {loading ? (
           <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading recent requests...</div>
        ) : recent.length === 0 ? (
           <div className="p-8 text-center text-on-surface-variant">No requests yet. Click "Find Food" to start.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/30">
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Name</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Restaurant</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/30">
                {recent.map((req) => (
                  <tr key={req._id} className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{req.donation?.foodName}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.restaurant?.name || 'Restaurant'}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{req.donation?.quantity}</td>
                    <td className="px-6 md:px-8 py-5">
                      {getStatusBadge(req.status)}
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

export default NgoDashboard;
