
import React from 'react';
import { Home, Lightbulb, User, BarChart3, Settings, Menu, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
};

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'recommendations', label: 'Ideas', icon: Lightbulb },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar = ({ collapsed, setCollapsed, activeItem, setActiveItem }: SidebarProps) => {
  return (
    <div 
      className={cn(
        "fixed top-0 left-0 h-full z-30 transition-all duration-300 bg-white dark:bg-gray-900 border-r border-border/50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gradient">QUASAR</h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <div className="p-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "flex items-center w-full p-3 mb-1 rounded-lg transition-colors",
              activeItem === item.id 
                ? "bg-primary/10 text-primary" 
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            <item.icon size={20} />
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
