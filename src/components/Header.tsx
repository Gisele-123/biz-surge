
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type HeaderProps = {
  sidebarCollapsed: boolean;
};

const Header = ({ sidebarCollapsed }: HeaderProps) => {
  return (
    <div className={cn(
      "fixed top-0 right-0 z-20 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-border/50 flex items-center justify-between px-6 transition-all duration-300",
      sidebarCollapsed ? "left-16" : "left-64"
    )}>
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        <input 
          type="text" 
          placeholder="Search ideas..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-muted/50"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-quasar-purple to-quasar-pink flex items-center justify-center text-white font-medium">
          JS
        </div>
      </div>
    </div>
  );
};

export default Header;
