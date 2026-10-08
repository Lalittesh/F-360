import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const RestaurantLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Dashboard', path: '/restaurant', icon: 'dashboard' },
    { name: 'Incoming Requests', path: '/restaurant/incoming-requests', icon: 'notifications_active' },
    { name: 'Donate Food', path: '/restaurant/donate', icon: 'volunteer_activism' },
    { name: 'My Donations', path: '/restaurant/donations', icon: 'list_alt' },
    { name: 'Profile', path: '/restaurant/profile', icon: 'restaurant' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-surface font-body-md text-on-surface">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary-fixed/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Mobile Header */}
      <div className="md:hidden relative z-30 flex items-center justify-between p-4 border-b border-surface-variant/40 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-secondary shadow-sm">
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
          </div>
          <h2 className="text-title-md font-title-md tracking-tight font-semibold">Restaurant</h2>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <nav className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 w-[280px] border-r border-surface-variant/40 flex flex-col pt-6 md:pt-8 md:sticky md:top-0 h-screen pearl-glass bg-surface/95 md:bg-surface/50 shadow-2xl md:shadow-none`}>
        <div className="flex items-center justify-between px-6 pb-8 text-on-surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            </div>
            <h2 className="text-title-lg font-title-lg tracking-tight font-semibold">Restaurant</h2>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden p-1 text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex flex-col gap-2 px-4 pb-4 flex-1 custom-scrollbar overflow-y-auto overflow-x-hidden">
          {navItems.map(item => {
            const isActive = location.pathname === item.path || (item.path !== '/restaurant' && location.pathname.startsWith(item.path));
            // Slight fix for exact matching dashboard
            const isExact = item.path === '/restaurant' ? location.pathname === '/restaurant' : isActive;

            return (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isExact ? 'bg-secondary-container/30 text-secondary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-label-lg font-label-lg">{item.name}</span>
              </Link>
            )
          })}
          
          <div className="mt-auto mb-6 px-0 md:block">
            <Link 
              to="/login" 
              onClick={() => {
                localStorage.removeItem('foodsphere_token');
                localStorage.removeItem('foodsphere_role');
                localStorage.removeItem('foodsphere_name');
                localStorage.removeItem('foodsphere_restaurant_name');
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error-container/20 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
              <span className="text-label-lg font-label-lg">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="relative z-10 flex-1 p-4 md:p-10 lg:p-12 overflow-y-auto overflow-x-hidden custom-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default RestaurantLayout;
