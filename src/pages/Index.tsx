
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Profile from '@/components/Profile';
import Recommendations from '@/components/Recommendations';
import Analytics from '@/components/Analytics';
import Settings from '@/components/Settings';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard sidebarCollapsed={sidebarCollapsed} />;
      case 'profile':
        return <Profile sidebarCollapsed={sidebarCollapsed} />;
      case 'recommendations':
        return <Recommendations sidebarCollapsed={sidebarCollapsed} />;
      case 'analytics':
        return <Analytics sidebarCollapsed={sidebarCollapsed} />;
      case 'settings':
        return <Settings sidebarCollapsed={sidebarCollapsed} />;
      default:
        return <Dashboard sidebarCollapsed={sidebarCollapsed} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 rounded-full bg-quasar-purple opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 rounded-full bg-quasar-pink opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed} 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
      />
      <Header sidebarCollapsed={sidebarCollapsed} />
      
      {renderContent()}
    </div>
  );
};

export default Index;
