import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import ReportsContent from './ReportsContent';
import AnalyticsContent from './AnalyticsContent';
import { AuthProvider,useAuth } from "../../contexts/AuthContext"


export const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');
  const { login,currentUser } = useAuth()

  const renderContentComponent = () => {
    switch (selectedMenuItem) {
      case 'dashboard':
        return <DashboardContent />;
      case 'reports':
        return <ReportsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      default:
        return null;
    }
  };

  return (

    
    <div className="flex border grid grid-cols-2 gap-4">
      <div className="border col-span-2" ><a>Welcome to Genie {currentUser && currentUser.email}</a></div>
      <div className="border col-span-1 w-[50%]">
      <Sidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      </div>
      <div className="col-span-1" >
        {renderContentComponent()}
      </div>
    
    </div>
  );
};

export default Dashboard;
