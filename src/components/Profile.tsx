
import React from 'react';
import { cn } from '@/lib/utils';
import { Award, BookOpen, Code, DollarSign, GraduationCap, MapPin, Save, User } from 'lucide-react';

type ProfileProps = {
  sidebarCollapsed: boolean;
};

const Profile = ({ sidebarCollapsed }: ProfileProps) => {
  return (
    <div className={cn(
      "pt-16 px-6 transition-all duration-300 min-h-screen",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <div className="py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your <span className="text-gradient">Profile</span></h1>
        
        <div className="quasar-card p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-quasar-purple to-quasar-pink flex items-center justify-center text-white text-3xl font-medium">
              JS
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Linda Teta</h2>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin size={16} className="mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <p className="mt-3">
                Tech entrepreneur passionate about sustainable solutions and Web3 technologies.
                Looking to create innovative products that solve real-world problems.
              </p>
            </div>
            <button className="quasar-button bg-primary text-white hover:bg-primary/90">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="quasar-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <GraduationCap className="mr-2" size={20} />
                Skills & Expertise
              </h3>
              <button className="text-sm text-primary hover:underline">Edit</button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-quasar-purple">Technical</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple rounded-full text-sm">Blockchain</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-quasar-pink">Business</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-quasar-pink/10 text-quasar-pink rounded-full text-sm">Project Management</span>
                  <span className="px-3 py-1 bg-quasar-pink/10 text-quasar-pink rounded-full text-sm">Marketing</span>
                  <span className="px-3 py-1 bg-quasar-pink/10 text-quasar-pink rounded-full text-sm">Business Development</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <BookOpen className="mr-2" size={20} />
                Interests
              </h3>
              <button className="text-sm text-primary hover:underline">Edit</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-quasar-teal/10 text-quasar-teal rounded-full text-sm">Sustainability</span>
              <span className="px-3 py-1 bg-quasar-orange/10 text-quasar-orange rounded-full text-sm">AI</span>
              <span className="px-3 py-1 bg-quasar-green/10 text-quasar-green rounded-full text-sm">Web3</span>
              <span className="px-3 py-1 bg-quasar-teal/10 text-quasar-teal rounded-full text-sm">Digital Health</span>
              <span className="px-3 py-1 bg-quasar-orange/10 text-quasar-orange rounded-full text-sm">Education</span>
              <span className="px-3 py-1 bg-quasar-green/10 text-quasar-green rounded-full text-sm">SaaS</span>
              <span className="px-3 py-1 bg-quasar-purple/10 text-quasar-purple rounded-full text-sm">Remote Work</span>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Code className="mr-2" size={20} />
                Experience
              </h3>
              <button className="text-sm text-primary hover:underline">Edit</button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Senior Developer</h4>
                <p className="text-muted-foreground text-sm">TechCorp • 2018 - Present</p>
                <p className="text-sm mt-1">Led development of multiple web applications and blockchain projects.</p>
              </div>
              <div>
                <h4 className="font-medium">Startup Founder</h4>
                <p className="text-muted-foreground text-sm">GreenTech • 2015 - 2018</p>
                <p className="text-sm mt-1">Co-founded a sustainability startup focused on reducing carbon footprints.</p>
              </div>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <DollarSign className="mr-2" size={20} />
                Budget Range
              </h3>
              <button className="text-sm text-primary hover:underline">Edit</button>
            </div>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Investment Capacity</span>
                  <span className="font-bold">$50,000 - $100,000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-quasar-purple to-quasar-pink h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Funding Preferences</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-sm">Self-funded</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-sm">Angel Investment</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-sm">Seed Funding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="quasar-card p-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Award className="mr-2" size={20} />
              Personalization Settings
            </h3>
            <button className="text-sm text-primary hover:underline">Save Changes</button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Recommendation Preferences</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="lowCompetition" className="rounded border-gray-300 text-primary focus:ring-primary" checked />
                  <label htmlFor="lowCompetition">Prioritize low competition markets</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="trendingMarkets" className="rounded border-gray-300 text-primary focus:ring-primary" checked />
                  <label htmlFor="trendingMarkets">Focus on trending markets</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remoteFriendly" className="rounded border-gray-300 text-primary focus:ring-primary" checked />
                  <label htmlFor="remoteFriendly">Remote-friendly businesses</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="passiveIncome" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="passiveIncome">Passive income opportunities</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
