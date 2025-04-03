
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Lightbulb, ArrowRight, Sparkles, Brain, BarChart3, DollarSign, Star, Mail, Phone, MapPin, Share2, MessageSquare, CheckCircle2, ShoppingCart, Check } from 'lucide-react';
import { toast } from "sonner";

const QuasarHome = () => {
  const navigate = useNavigate();
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your message! We'll get back to you soon.");
  };

  const handleMarketplaceClick = () => {
    toast.info("Please log in to access the marketplace", {
      action: {
        label: "Log in",
        onClick: () => navigate("/login")
      }
    });
  };

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
                    <Link to="#features">
                      <Button variant="ghost">Features</Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost" onClick={handleMarketplaceClick}>Marketplace</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="#pricing">
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left lg:pr-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Transform</span> Your Ideas Into Reality
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Quasar helps entrepreneurs validate, share, and monetize innovative business ideas through an AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Link to="/signup">
                  <Button size="lg" className="px-8">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={handleMarketplaceClick}>
                  Explore Marketplace <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-quasar-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -z-10 top-0 -right-4 w-72 h-72 bg-quasar-pink/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -z-10 -bottom-8 left-20 w-72 h-72 bg-quasar-orange/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                    alt="Entrepreneur using Quasar platform" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30" id="features">
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

      {/* Pricing Section - Added new section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our pricing is designed to be flexible and fair, based on the type and value of ideas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Basic Ideas</h3>
                <div className="mt-4 text-3xl font-bold">Free</div>
                <p className="text-muted-foreground mt-2">Starting point for entrepreneurs</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Concept-level business ideas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Industry and technology details</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Basic skill requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Limited market insights</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full mt-auto" onClick={handleMarketplaceClick}>
                Browse Free Ideas
              </Button>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-primary/50 flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Premium Ideas</h3>
                <div className="mt-4 text-3xl font-bold">$149 - $499</div>
                <p className="text-muted-foreground mt-2">For serious entrepreneurs</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Detailed business model & strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Interactive demo prototypes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Market validation data</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Implementation roadmap</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Revenue projection models</span>
                </li>
              </ul>
              
              <Button className="w-full mt-auto" onClick={handleMarketplaceClick}>
                Explore Premium Ideas
              </Button>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Enterprise Ideas</h3>
                <div className="mt-4 text-3xl font-bold">$500+</div>
                <p className="text-muted-foreground mt-2">For investors & businesses</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Everything in Premium tier</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Full ownership rights transfer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Implementation consultation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Technical specification documents</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full mt-auto" onClick={handleMarketplaceClick}>
                View Enterprise Solutions
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Pricing varies based on the complexity, market potential, and included resources for each idea. All purchases include lifetime access to idea documentation.
            </p>
            <Link to="/signup">
              <Button variant="outline">
                Sign up to browse all ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate minds behind Quasar working to empower entrepreneurs worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop&crop=faces" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Gisele Akuzwe Migisha</h3>
              <p className="text-primary mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground mb-3">
                Serial entrepreneur with 3 successful exits
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&crop=faces" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Auda Beta Bera</h3>
              <p className="text-primary mb-2">CTO</p>
              <p className="text-sm text-muted-foreground mb-3">
                Former ML Research Lead at Google
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=faces" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Divine Itangamahoro</h3>
              <p className="text-primary mb-2">COO</p>
              <p className="text-sm text-muted-foreground mb-3">
                15+ years scaling startups globally
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&crop=faces" 
                  alt="CMO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Mweisgye Teta Linda</h3>
              <p className="text-primary mb-2">CMO</p>
              <p className="text-sm text-muted-foreground mb-3">
                Former marketing lead at Stripe
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&crop=faces" 
                  alt="CMO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ganza Aime Daniella</h3>
              <p className="text-primary mb-2">COO</p>
              <p className="text-sm text-muted-foreground mb-3">
                Former marketing lead at Stripe
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how Quasar has helped entrepreneurs turn their ideas into successful businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50 relative">
              <div className="absolute -top-5 left-8 text-5xl text-primary opacity-30">"</div>
              <div className="mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-quasar-orange fill-quasar-orange" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "Quasar helped me validate my business idea in days instead of months. The AI recommendations were spot on, and I'm now running a profitable startup that I launched in just 6 weeks."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=faces" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Founder, EcoMarket</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50 relative">
              <div className="absolute -top-5 left-8 text-5xl text-primary opacity-30">"</div>
              <div className="mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-quasar-orange fill-quasar-orange" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "I sold my first business idea on Quasar's marketplace for $15,000. The platform made it easy to showcase my concept with validation data, which made all the difference to potential buyers."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=faces" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Torres</h4>
                  <p className="text-sm text-muted-foreground">Serial Entrepreneur</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50 relative">
              <div className="absolute -top-5 left-8 text-5xl text-primary opacity-30">"</div>
              <div className="mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-quasar-orange fill-quasar-orange" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "As an investor, Quasar gives me access to validated business ideas with real data. I've funded three startups I discovered on the platform, and all are performing exceptionally well."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&crop=faces" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rebecca Lee</h4>
                  <p className="text-sm text-muted-foreground">Angel Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about Quasar? Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px]" required />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-card p-8 rounded-lg border border-border/50 h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hello@quasar.io</p>
                      <p className="text-muted-foreground">support@quasar.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Office</h4>
                      <p className="text-muted-foreground">
                        123 Innovation Drive<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-muted/50 p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a href="#" className="bg-muted/50 p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a href="#" className="bg-muted/50 p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a href="#" className="bg-muted/50 p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                  <li><Link to="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
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
