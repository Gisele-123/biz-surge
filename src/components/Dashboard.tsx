
import React from 'react';
import { Rocket, Target, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

type DashboardProps = {
  sidebarCollapsed: boolean;
};

const Dashboard = ({ sidebarCollapsed }: DashboardProps) => {
  return (
    <div className={cn(
      "pt-16 px-6 transition-all duration-300 min-h-screen",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, <span className="text-gradient">John</span></h1>
        <p className="text-muted-foreground">Let's discover your next business opportunity</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Ideas Generated</p>
                <h3 className="text-2xl font-bold mt-1">24</h3>
              </div>
              <div className="bg-quasar-purple/10 p-3 rounded-full">
                <Rocket className="text-quasar-purple" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+8% from last week</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Saved Ideas</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="bg-quasar-pink/10 p-3 rounded-full">
                <Target className="text-quasar-pink" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+12% from last week</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Potential Market</p>
                <h3 className="text-2xl font-bold mt-1">$1.2M</h3>
              </div>
              <div className="bg-quasar-orange/10 p-3 rounded-full">
                <TrendingUp className="text-quasar-orange" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+5% from last month</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Network Growth</p>
                <h3 className="text-2xl font-bold mt-1">267</h3>
              </div>
              <div className="bg-quasar-teal/10 p-3 rounded-full">
                <Users className="text-quasar-teal" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+15% from last month</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="quasar-card p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Your Personalized Ideas</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((idea) => (
                <div key={idea} className="border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <h4 className="font-medium idea-text-gradient">Sustainable E-commerce Platform</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Create a marketplace for eco-friendly products with carbon footprint tracking
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-quasar-green/10 text-quasar-green text-xs rounded-full">Sustainability</span>
                    <span className="px-2 py-1 bg-quasar-purple/10 text-quasar-purple text-xs rounded-full">E-commerce</span>
                    <span className="px-2 py-1 bg-quasar-teal/10 text-quasar-teal text-xs rounded-full">Tech</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-primary hover:underline text-sm font-medium">View all recommendations →</button>
          </div>
          
          <div className="quasar-card p-6">
            <h3 className="text-xl font-semibold mb-4">Market Trends</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quasar-purple rounded-full mr-2"></div>
                <span className="flex-1">Sustainable Products</span>
                <span className="text-quasar-green">+23%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quasar-pink rounded-full mr-2"></div>
                <span className="flex-1">AI Solutions</span>
                <span className="text-quasar-green">+42%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quasar-orange rounded-full mr-2"></div>
                <span className="flex-1">Web3 Technologies</span>
                <span className="text-quasar-green">+18%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quasar-teal rounded-full mr-2"></div>
                <span className="flex-1">Remote Work Tools</span>
                <span className="text-quasar-green">+15%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quasar-green rounded-full mr-2"></div>
                <span className="flex-1">Health Tech</span>
                <span className="text-quasar-green">+31%</span>
              </div>
            </div>
            <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-quasar-purple to-quasar-pink opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center">
                  Interactive market trend chart 
                  <br />coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
