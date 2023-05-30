import React from 'react';

const Sidebar = ({ selectedMenuItem, setSelectedMenuItem }) => {
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="sidebar border">
      <ul className="menu">
        <li
          className={`border menu-item ${selectedMenuItem === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('dashboard')}
        >
          Dashboard
        </li>
        <li
          className= {`border menu-item ${selectedMenuItem === 'reports' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('reports')}
        >
          Reports
        </li>
        <li
          className={`border menu-item ${selectedMenuItem === 'analytics' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('analytics')}
        >
          Analytics
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
