import React, { useState, useEffect } from 'react';

const RestaurantProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Load initial data from localStorage if available, or use defaults
  const [profile, setProfile] = useState({
    name: localStorage.getItem("foodsphere_restaurant_name") || localStorage.getItem("foodsphere_name") || "The Grand Eatery",
    contactPerson: localStorage.getItem("foodsphere_contact_person") || "Jane Doe",
    email: localStorage.getItem("foodsphere_restaurant_email") || localStorage.getItem("foodsphere_email") || "contact@grandeatery.com",
    phone: localStorage.getItem("foodsphere_phone") || "+1 (555) 123-4567",
    address: localStorage.getItem("foodsphere_address") || "123 Culinary Lane, Food District, City 1001"
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
    
    // Save to localStorage so it persists locally
    localStorage.setItem("foodsphere_restaurant_name", formData.name);
    localStorage.setItem("foodsphere_contact_person", formData.contactPerson);
    localStorage.setItem("foodsphere_restaurant_email", formData.email);
    localStorage.setItem("foodsphere_phone", formData.phone);
    localStorage.setItem("foodsphere_address", formData.address);
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">Restaurant Profile</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Manage your establishment's details and contact info.</p>
      </div>

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[32px] p-8 md:p-12 ambient-warm-card relative overflow-hidden pearl-glass">
        {/* Subtle decorative elements inside card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-fixed/5 rounded-full blur-[80px] pointer-events-none"></div>
        <svg className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10,100 C 50,20 150,0 200,80 C 250,160 100,200 50,150" fill="none" stroke="#dfb76c" strokeWidth="2" strokeDasharray="4,8"></path>
        </svg>

        <div className="relative z-10 flex items-start gap-8 flex-col md:flex-row">
          <div className="w-32 h-32 shrink-0 rounded-[24px] bg-surface-container border border-surface-variant/60 overflow-hidden shadow-inner group relative">
             <img 
               src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=300&fit=crop" 
               alt="Restaurant Logo" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
             />
             {isEditing && (
               <div className="absolute inset-0 bg-on-surface/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                 <span className="material-symbols-outlined text-surface">photo_camera</span>
                 <span className="text-label-sm text-surface font-medium mt-1">Change</span>
               </div>
             )}
          </div>

          <div className="flex-1 space-y-6 w-full">
            {!isEditing ? (
              // VIEW MODE
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
                <div className="space-y-1">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Restaurant Name</label>
                  <div className="text-title-lg font-title-lg text-on-surface font-semibold">{profile.name}</div>
                </div>
                
                <div className="space-y-1">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Contact Person</label>
                  <div className="text-body-lg font-body-lg text-on-surface font-medium">{profile.contactPerson}</div>
                </div>

                <div className="space-y-1">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Email Address</label>
                  <div className="flex items-center gap-2 text-body-lg font-body-lg text-on-surface font-medium">
                    <span className="material-symbols-outlined text-lg text-outline">mail</span>
                    {profile.email}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                  <div className="flex items-center gap-2 text-body-lg font-body-lg text-on-surface font-medium">
                    <span className="material-symbols-outlined text-lg text-outline">call</span>
                    {profile.phone}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Address</label>
                  <div className="flex items-center gap-2 text-body-lg font-body-lg text-on-surface font-medium">
                    <span className="material-symbols-outlined text-lg text-outline">location_on</span>
                    {profile.address}
                  </div>
                </div>
              </div>
            ) : (
              // EDIT MODE
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <div className="space-y-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Restaurant Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Contact Person</label>
                  <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all" />
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-surface-variant/40 flex justify-end gap-4">
              {!isEditing ? (
                <button onClick={() => setIsEditing(true)} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-low border border-surface-variant/80 text-on-surface rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-surface-container hover:border-secondary/30 transition-all duration-200 active:scale-[0.98]">
                  <span className="material-symbols-outlined text-sm text-secondary">edit</span>
                  <span>Edit Profile</span>
                </button>
              ) : (
                <>
                  <button onClick={handleCancel} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-surface-variant/80 text-on-surface-variant rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-surface-container hover:text-on-surface transition-all duration-200">
                    Cancel
                  </button>
                  <button onClick={handleSave} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-[0.98]">
                    <span className="material-symbols-outlined text-sm">save</span>
                    <span>Save Changes</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfile;
