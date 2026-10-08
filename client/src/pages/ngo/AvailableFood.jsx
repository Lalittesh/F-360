import React, { useState, useEffect } from 'react';

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchAvailableFood = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('foodsphere_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/donations/available`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (res.ok) {
        setFoods(data);
      } else {
        setError(data.message || 'Failed to fetch available food');
      }
    } catch (err) {
      setError('Server error while loading food');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableFood();
  }, []);

  const handleRequest = async (donationId) => {
    try {
      const token = localStorage.getItem('foodsphere_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/requests`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ donationId })
      });
      
      if (res.ok) {
        // Remove the requested item from the list visually
        setFoods(foods.filter(f => f._id !== donationId));
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to request food');
      }
    } catch (err) {
      alert('Server error while requesting food');
    }
  };

  const filteredFoods = foods.filter(food => 
    food.foodName.toLowerCase().includes(search.toLowerCase()) ||
    food.restaurant?.name?.toLowerCase().includes(search.toLowerCase()) ||
    food.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">Available Food</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Browse surplus food available for pickup in your area.</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
          <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
        </div>
      )}

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-6 md:px-8 py-5 border-b border-surface-variant/40 bg-surface-container-low/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant uppercase tracking-widest font-medium">
             <span className="material-symbols-outlined text-[18px]">search</span>
             Donation Board
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">search</span>
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food, restaurants..." 
              className="w-full md:w-64 bg-surface-container border border-surface-variant/60 rounded-lg py-2 pl-9 pr-3 text-body-sm focus:outline-none focus:border-primary/50 transition-colors" 
            />
          </div>
        </div>
        
        {loading ? (
          <div className="p-10 text-center text-on-surface-variant animate-pulse">Loading available donations...</div>
        ) : filteredFoods.length === 0 ? (
          <div className="p-10 text-center text-on-surface-variant">No available food found matching your criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-container-low/30 border-b border-surface-variant/30">
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Food Name</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Restaurant</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Category</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Quantity</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Expiry</th>
                  <th className="px-6 md:px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/30">
                {filteredFoods.map((food) => (
                  <tr key={food._id} className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">{food.foodName}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{food.restaurant?.name || 'Unknown'}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{food.category}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">{food.quantity}</td>
                    <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">
                      {new Date(food.expiryDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 md:px-8 py-5 text-right">
                      <button 
                        onClick={() => handleRequest(food._id)}
                        className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-primary-container text-on-primary hover:bg-primary hover:shadow-md transition-all font-medium jewel-sapphire-glow"
                      >
                        Request
                      </button>
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

export default AvailableFood;
