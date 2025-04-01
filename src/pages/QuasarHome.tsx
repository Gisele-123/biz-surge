
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Lightbulb, ArrowRight, Sparkles, Brain, BarChart3, DollarSign } from 'lucide-react';

const QuasarHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">QUASAR</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          <div>
                            <NavigationMenuLink className="font-medium">Idea Generation</NavigationMenuLink>
                            <p className="text-sm text-muted-foreground">AI-powered business idea generation</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-primary" />
                          <div>
                            <NavigationMenuLink className="font-medium">Idea Validation</NavigationMenuLink>
                            <p className="text-sm text-muted-foreground">Validate your ideas with market data</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <div>
                            <NavigationMenuLink className="font-medium">Analytics</NavigationMenuLink>
                            <p className="text-sm text-muted-foreground">Track your idea performance</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/market">
                      <Button variant="ghost">Marketplace</Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="#">
                      <Button variant="ghost">Pricing</Button>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Transform</span> Your Ideas Into Reality
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Quasar helps entrepreneurs validate, share, and monetize innovative business ideas through an AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/market">
                <Button size="lg" variant="outline">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Quasar Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines AI technology with market insights to help you build successful businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Idea Generation</h3>
              <p className="text-muted-foreground">
                Generate innovative business ideas tailored to your interests, skills, and market trends.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Idea Marketplace</h3>
              <p className="text-muted-foreground">
                Buy and sell innovative business ideas complete with demos and validation data.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monetize Your Creativity</h3>
              <p className="text-muted-foreground">
                Turn your business concepts into passive income by selling them to eager entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="quasar-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of innovators using Quasar to create, validate, and monetize their business ideas.
            </p>
            <Link to="/signup">
              <Button size="lg">Sign up now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h1 className="text-2xl font-bold text-gradient mb-4">QUASAR</h1>
              <p className="text-muted-foreground">
                The AI-powered platform for entrepreneurs to validate, share, and monetize innovative business ideas.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
              <div>
                <h3 className="text-sm font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Marketplace</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Guides</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Quasar. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuasarHome;
