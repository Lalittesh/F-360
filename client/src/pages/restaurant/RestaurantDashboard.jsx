import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantDashboard = () => {
  const restaurantName = localStorage.getItem("foodsphere_restaurant_name") || localStorage.getItem("foodsphere_name") || "Partner";

  const [stats, setStats] = useState({ total: 0, available: 0, claimed: 0 });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('foodsphere_token');
        const headers = { Authorization: `Bearer ${token}` };

        const [statsRes, recentRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/donations/stats`, { headers }),
          fetch(`${import.meta.env.VITE_API_URL}/donations/my`, { headers })
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
    <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-variant/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-variant/40 text-label-sm font-label-sm text-secondary uppercase tracking-widest mb-4 shadow-sm pearl-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse jewel-gold-glow"></span>
            Partner Dashboard
          </div>
          <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">
            Welcome, {restaurantName}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant">Together, surplus food becomes someone's next meal.</p>
        </div>
        
        <div className="flex flex-col items-end gap-4">
          <Link to="/restaurant/profile" className="shrink-0" title="View Profile">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=150&h=150&fit=crop" 
              alt="Restaurant Logo" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-surface-variant/60 object-cover shadow-sm hover:scale-105 hover:border-secondary/50 transition-all duration-200"
            />
          </Link>
          <Link to="/restaurant/donate" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            <span className="hidden sm:inline">Donate Food</span>
            <span className="sm:hidden">Donate</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative overflow-hidden bg-surface-bright border border-surface-variant/50 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">inventory_2</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Total Donations</span>
            <span className="block text-display-sm font-display-sm text-on-surface font-semibold">
              {loading ? '...' : stats.total}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-surface-bright border border-tertiary/20 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1 jewel-emerald-glow">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-tertiary transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">energy_savings_leaf</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Available</span>
            <span className="block text-display-sm font-display-sm text-tertiary font-semibold">
              {loading ? '...' : stats.available}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-surface-bright border border-primary/20 rounded-[24px] p-6 md:p-8 ambient-warm-card group transition-all duration-300 hover:-translate-y-1 jewel-sapphire-glow">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-9xl">task_alt</span>
          </div>
          <div className="relative z-10">
            <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Claimed</span>
            <span className="block text-display-sm font-display-sm text-primary font-semibold">
              {loading ? '...' : stats.claimed}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-6 md:px-8 py-6 border-b border-surface-variant/40 flex items-center justify-between">
          <h3 className="text-title-lg font-title-lg text-on-surface font-medium">Recent Donations</h3>
          <Link to="/restaurant/donations" className="text-label-md font-label-md text-secondary hover:text-secondary-container transition-colors">View All</Link>
        </div>
        
        {loading ? (
           <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading recent donations...</div>
        ) : recent.length === 0 ? (
           <div className="p-8 text-center text-on-surface-variant">No donations yet. Click "Donate Food" to start.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/30">
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Name</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Date</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/30">
                {recent.map((item) => (
                  <tr key={item._id} className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{item.foodName}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{item.quantity}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">
                      {new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      {getStatusBadge(item.status)}
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

export default RestaurantDashboard;
