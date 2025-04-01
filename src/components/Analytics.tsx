
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { BarChart3, TrendingUp, PieChart, LineChart, Calendar, Download } from 'lucide-react';
import { toast } from "sonner";

type AnalyticsProps = {
  sidebarCollapsed: boolean;
};

const Analytics = ({ sidebarCollapsed }: AnalyticsProps) => {
  const [dateFilter, setDateFilter] = useState('last30');
  
  const handleExport = () => {
    toast.success("Analytics data exported successfully");
  };
  
  return (
    <div className={cn(
      "pt-16 px-6 transition-all duration-300 min-h-screen",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <div className="py-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Market <span className="text-gradient">Analytics</span></h1>
            <p className="text-muted-foreground">Insights on market trends and business opportunities</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="quasar-button bg-white border border-border/50 text-foreground hover:bg-gray-50 flex items-center">
              <Calendar size={18} className="mr-2" />
              Last 30 Days
            </button>
            <button 
              className="quasar-button bg-primary text-white hover:bg-primary/90 flex items-center relative z-10"
              onClick={handleExport}
            >
              <Download size={18} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Top Market</p>
                <h3 className="text-xl font-bold mt-1">AI/ML</h3>
              </div>
              <div className="bg-quasar-purple/10 p-3 rounded-full">
                <TrendingUp className="text-quasar-purple" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+42% YoY Growth</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Emerging Trend</p>
                <h3 className="text-xl font-bold mt-1">Web3</h3>
              </div>
              <div className="bg-quasar-pink/10 p-3 rounded-full">
                <TrendingUp className="text-quasar-pink" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+35% QoQ Growth</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Low Competition</p>
                <h3 className="text-xl font-bold mt-1">EdTech</h3>
              </div>
              <div className="bg-quasar-orange/10 p-3 rounded-full">
                <BarChart3 className="text-quasar-orange" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>23% market gap</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">High Potential</p>
                <h3 className="text-xl font-bold mt-1">Climate Tech</h3>
              </div>
              <div className="bg-quasar-teal/10 p-3 rounded-full">
                <PieChart className="text-quasar-teal" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-quasar-green text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>$14.2B market size</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="quasar-card p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Market Growth Trends</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple text-sm rounded-full">Tech</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Health</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Finance</button>
              </div>
            </div>
            <div className="h-64 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-quasar-purple/5 to-quasar-pink/5"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-quasar-purple/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart size={24} className="text-muted-foreground mr-2" />
                <p className="text-muted-foreground">Interactive market trend chart coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <h3 className="text-xl font-semibold mb-6">Opportunity Score</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">AI/ML</span>
                  <span className="font-medium">9.2/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-quasar-purple h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Web3</span>
                  <span className="font-medium">8.7/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-quasar-pink h-2 rounded-full w-[87%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">EdTech</span>
                  <span className="font-medium">8.4/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-quasar-orange h-2 rounded-full w-[84%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Climate Tech</span>
                  <span className="font-medium">9.0/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-quasar-teal h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Health Tech</span>
                  <span className="font-medium">8.8/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-quasar-green h-2 rounded-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="quasar-card p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">AI Adoption in SMEs</h4>
              <p className="text-sm text-muted-foreground">Small to medium enterprises are rapidly adopting AI solutions, creating a $42B market opportunity by 2025.</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">Sustainable E-commerce Growth</h4>
              <p className="text-sm text-muted-foreground">Consumers increasingly prioritize sustainability, driving 28% growth in eco-friendly marketplaces.</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">Web3 Infrastructure Gap</h4>
              <p className="text-sm text-muted-foreground">There's a significant shortage of developer tools and infrastructure in the Web3 space, presenting opportunities.</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">Remote Work Solutions</h4>
              <p className="text-sm text-muted-foreground">Despite market saturation, specialized remote work tools for specific industries show 34% growth.</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">EdTech in Emerging Markets</h4>
              <p className="text-sm text-muted-foreground">Educational technology targeting emerging markets shows 45% year-over-year growth with low competition.</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <h4 className="font-medium mb-2 idea-text-gradient">HealthTech Personalization</h4>
              <p className="text-sm text-muted-foreground">Personalized healthcare solutions leveraging AI and wearable data are projected to grow by 52% by 2026.</p>
            </div>
          </div>
        </div>
        
        <div className="quasar-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-quasar-purple/10 flex items-center justify-center mx-auto mb-4 animate-float">
            <BarChart3 className="text-quasar-purple" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Want deeper market insights?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Upgrade to our premium tier to access detailed market reports, competitive analysis, and funding opportunity data.
          </p>
          <button className="quasar-button bg-primary text-white hover:bg-primary/90 mt-4">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
