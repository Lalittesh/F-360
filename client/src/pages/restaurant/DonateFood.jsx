import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonateFood = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    foodName: '',
    category: '',
    quantity: '',
    preparationDate: '',
    expiryDate: '',
    pickupAddress: localStorage.getItem("foodsphere_address") || '',
    description: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const token = localStorage.getItem('foodsphere_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/donations`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        navigate('/restaurant/donations');
      } else {
        setError(data.message || 'Failed to submit donation');
      }
    } catch (err) {
      setError('Server error during submission');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">Donate Food</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Provide details about the surplus food you are donating.</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
          <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
        </div>
      )}

      <div className="bg-surface-bright border border-secondary/20 rounded-[32px] p-8 md:p-10 ambient-warm-card relative overflow-hidden pearl-glass">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 rounded-full blur-[60px] pointer-events-none"></div>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0,100 C 100,50 300,150 500,80" fill="none" stroke="#e6ca65" strokeDasharray="4,8" strokeWidth="1.2"></path>
        </svg>

        <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-2 space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Food Name</label>
            <input type="text" name="foodName" value={formData.foodName} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant" placeholder="e.g. Pasta Primavera" required />
          </div>

          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Food Category</label>
            <div className="relative">
              <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all appearance-none" required>
                <option value="">Select a category</option>
                <option value="Cooked Meals">Cooked Meals</option>
                <option value="Rice & Grains">Rice & Grains</option>
                <option value="Bakery">Bakery</option>
                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                <option value="Packaged Food">Packaged Food</option>
                <option value="Other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">expand_more</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Quantity</label>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant" placeholder="e.g. 15 servings or 5 kg" required />
          </div>

          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Preparation Date & Time</label>
            <input type="datetime-local" name="preparationDate" value={formData.preparationDate} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" required />
          </div>

          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Expiry / Best Before</label>
            <input type="datetime-local" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" required />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Pickup Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">location_on</span>
              <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 pl-11 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" required />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Description (Optional)</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all min-h-[120px] resize-y placeholder:text-outline-variant" placeholder="Any special instructions for pickup or storage..."></textarea>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">Food Image (Optional)</label>
            <div className="border-2 border-dashed border-surface-variant/80 rounded-xl p-8 text-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-outline mb-2">cloud_upload</span>
              <p className="text-body-sm text-on-surface-variant mb-4">Image upload is simulated in this phase</p>
              <input type="file" className="text-body-sm text-on-surface file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary-container/50 file:text-secondary hover:file:bg-secondary-container/80 transition-all cursor-pointer" accept="image/*" />
            </div>
          </div>

          <div className="md:col-span-2 mt-6 pt-6 border-t border-surface-variant/40 flex justify-end">
            <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
              {isSubmitting ? 'Submitting...' : 'Submit Donation'}
              {!isSubmitting && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateFood;
