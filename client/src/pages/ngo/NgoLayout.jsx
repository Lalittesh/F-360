import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const NgoLayout = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/ngo', icon: 'dashboard' },
    { name: 'Available Food', path: '/ngo/available-food', icon: 'restaurant_menu' },
    { name: 'My Requests', path: '/ngo/requests', icon: 'list_alt' },
    { name: 'Profile', path: '/ngo/profile', icon: 'domain' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-surface font-body-md text-on-surface">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-fixed/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Sidebar */}
      <nav className="relative z-20 w-full md:w-[280px] border-b md:border-b-0 md:border-r border-surface-variant/40 flex flex-col pt-6 md:pt-8 md:sticky md:top-0 md:h-screen pearl-glass bg-surface/50">
        <div className="flex items-center gap-3 px-6 pb-8 text-on-surface">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
          </div>
          <h2 className="text-title-lg font-title-lg tracking-tight font-semibold">FoodSphere</h2>
        </div>
        
        <div className="flex flex-row md:flex-col gap-2 px-4 pb-4 overflow-x-auto md:overflow-visible flex-1 custom-scrollbar">
          {navItems.map(item => {
            const isActive = location.pathname === item.path || (item.path !== '/ngo' && location.pathname.startsWith(item.path));
            const isExact = item.path === '/ngo' ? location.pathname === '/ngo' : isActive;

            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 min-w-max md:min-w-0 ${isExact ? 'bg-primary-container/30 text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-label-lg font-label-lg">{item.name}</span>
              </Link>
            )
          })}
          
          <div className="hidden md:block mt-auto mb-6 px-0">
            <Link to="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error-container/20 transition-all duration-200">
              <span className="material-symbols-outlined text-xl">logout</span>
              <span className="text-label-lg font-label-lg">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="relative z-10 flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default NgoLayout;
