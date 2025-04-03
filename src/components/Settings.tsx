
import React from 'react';
import { cn } from '@/lib/utils';
import { Bell, Lock, Moon, Shield, User, Zap } from 'lucide-react';

type SettingsProps = {
  sidebarCollapsed: boolean;
};

const Settings = ({ sidebarCollapsed }: SettingsProps) => {
  return (
    <div className={cn(
      "pt-16 px-6 transition-all duration-300 min-h-screen",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <div className="py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          <span className="text-gradient">Settings</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1">
            <div className="sticky top-24 quasar-card p-4">
              <div className="space-y-1">
                <button className="w-full flex items-center p-3 bg-primary/10 text-primary rounded-lg text-left">
                  <User size={18} className="mr-3" />
                  <span>Account</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-muted/50 rounded-lg text-left">
                  <Bell size={18} className="mr-3" />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-muted/50 rounded-lg text-left">
                  <Lock size={18} className="mr-3" />
                  <span>Privacy</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-muted/50 rounded-lg text-left">
                  <Shield size={18} className="mr-3" />
                  <span>Security</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-muted/50 rounded-lg text-left">
                  <Zap size={18} className="mr-3" />
                  <span>Preferences</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-muted/50 rounded-lg text-left">
                  <Moon size={18} className="mr-3" />
                  <span>Appearance</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="quasar-card p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value="john.smith@example.com"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="quasar-button bg-primary text-white hover:bg-primary/90">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            
            <div className="quasar-card p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="quasar-button bg-primary text-white hover:bg-primary/90">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
            
            <div className="quasar-card p-6">
              <h2 className="text-xl font-semibold mb-4">Blockchain Connectivity</h2>
              <div className="space-y-4">
                <div className="p-4 border border-border/50 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Internet Computer</h3>
                      <p className="text-sm text-muted-foreground mt-1">Connect to ICP for decentralized data storage</p>
                    </div>
                    <button className="quasar-button bg-white border border-border/50 text-foreground hover:bg-gray-50">
                      Connect
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border border-border/50 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Wallet Authentication</h3>
                      <p className="text-sm text-muted-foreground mt-1">Connect your crypto wallet for secure authentication</p>
                    </div>
                    <button className="quasar-button bg-white border border-border/50 text-foreground hover:bg-gray-50">
                      Connect
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <div className="flex items-start">
                    <div className="mt-1 text-primary">
                      <Shield size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Data Privacy</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your data is encrypted and stored securely on the Internet Computer blockchain. Only you have access to your personal information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
