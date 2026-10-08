import React from 'react';

const MyDonations = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 pb-6 border-b border-surface-variant/30">
        <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-2">My Donations</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">History and status of your food donations.</p>
      </div>

      <div className="bg-surface-bright border border-surface-variant/40 rounded-[24px] overflow-hidden ambient-warm-card">
        <div className="px-6 md:px-8 py-5 border-b border-surface-variant/40 bg-surface-container-low/20">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant uppercase tracking-widest font-medium">
             <span className="material-symbols-outlined text-[18px]">history</span>
             Donation Log
          </div>
        </div>
        <div className="overflow-x-auto">
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
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">Pasta Primavera</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Cooked Meals</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">15 servings</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Oct 8, 2026</td>
                <td className="px-6 md:px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary text-label-sm font-label-sm font-semibold border border-tertiary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Available
                  </span>
                </td>
                <td className="px-6 md:px-8 py-5 text-right">
                  <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">Assorted Sandwiches</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Bakery</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">20 pieces</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Oct 7, 2026</td>
                <td className="px-6 md:px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-label-sm font-label-sm font-semibold border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Requested
                  </span>
                </td>
                <td className="px-6 md:px-8 py-5 text-right">
                  <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">Vegetable Soup</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Cooked Meals</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">10 liters</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Oct 6, 2026</td>
                <td className="px-6 md:px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/30 text-primary text-label-sm font-label-sm font-semibold border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Claimed
                  </span>
                </td>
                <td className="px-6 md:px-8 py-5 text-right">
                  <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">Steamed Rice & Curry</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Cooked Meals</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">30 servings</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Oct 5, 2026</td>
                <td className="px-6 md:px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant/40 text-on-surface-variant text-label-sm font-label-sm font-semibold border border-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Completed
                  </span>
                </td>
                <td className="px-6 md:px-8 py-5 text-right">
                  <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors opacity-70">
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface font-medium">Fresh Salads</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Fruits & Veg</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">12 bowls</td>
                <td className="px-6 md:px-8 py-5 text-body-md font-body-md text-on-surface-variant">Oct 1, 2026</td>
                <td className="px-6 md:px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/30 text-error text-label-sm font-label-sm font-semibold border border-error/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Expired
                  </span>
                </td>
                <td className="px-6 md:px-8 py-5 text-right">
                  <button className="px-4 py-2 rounded-lg text-label-sm font-label-sm bg-surface-container border border-surface-variant/60 hover:bg-surface-container-high transition-colors text-on-surface font-medium">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
