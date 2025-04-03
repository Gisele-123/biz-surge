
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Save, ThumbsUp, ThumbsDown, Users, Target, TrendingUp, Briefcase, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Sample data for demonstration
const ideas = [
  {
    id: 1,
    title: "Eco-Friendly E-commerce Platform",
    description: "A marketplace for sustainable products with carbon footprint tracking and eco-friendly shipping options.",
    longDescription: "This comprehensive platform connects environmentally conscious consumers with verified sustainable product vendors. The system includes real-time carbon footprint tracking for each purchase, eco-friendly shipping options, and a verification system for product sustainability claims. The business model includes a commission on sales and premium listing features for vendors.",
    market: "$5.8B",
    competition: "Medium",
    trend: "+18%",
    tags: ["E-commerce", "Sustainability", "Tech"],
    skills: ["Web Development", "Digital Marketing", "Logistics"],
    saved: true,
    revenue: "$420K - $780K yearly",
    startupCost: "$80K - $150K",
    timeToMarket: "6-12 months",
    teamSize: "4-6 people",
    targetCustomers: ["Environmentally conscious consumers", "Sustainable product manufacturers", "Retail businesses seeking green alternatives"],
    keyFeatures: [
      "Carbon footprint calculator for each product",
      "Verified sustainability badge system",
      "Eco-friendly shipping options integration",
      "Marketplace with commission-based revenue model",
      "Vendor dashboard with sustainability metrics"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Health Monitoring App",
    description: "A mobile application using AI to track health metrics, provide personalized advice, and detect early signs of health issues.",
    longDescription: "This AI-driven health monitoring application uses smartphone sensors and optional wearable devices to track vital health metrics. The system applies machine learning algorithms to provide personalized health insights, early warning of potential health issues, and tailored lifestyle recommendations. The app connects users with healthcare providers when necessary and offers premium subscription features.",
    market: "$12.4B",
    competition: "High",
    trend: "+34%",
    tags: ["Health Tech", "AI", "Mobile"],
    skills: ["AI/ML", "Mobile Development", "Healthcare"],
    saved: false,
    revenue: "$1.2M - $4.5M yearly",
    startupCost: "$200K - $500K",
    timeToMarket: "12-18 months",
    teamSize: "8-12 people",
    targetCustomers: ["Health-conscious individuals", "Chronic disease patients", "Elderly population", "Healthcare providers"],
    keyFeatures: [
      "AI-powered health anomaly detection",
      "Integration with popular wearable devices",
      "Personalized health insights and recommendations",
      "Secure sharing with healthcare providers",
      "Subscription-based premium features"
    ]
  },
  {
    id: 3,
    title: "Decentralized Freelance Marketplace",
    description: "A blockchain-based platform connecting freelancers with clients, featuring smart contracts and cryptocurrency payments.",
    longDescription: "This decentralized platform leverages blockchain technology to create a trustless freelance marketplace. Smart contracts automate milestone-based payments, dispute resolution, and escrow services. The platform features reputation systems secured by blockchain, minimal fees compared to centralized alternatives, and optional cryptocurrency payments with fiat on/off ramps.",
    market: "$3.2B",
    competition: "Low",
    trend: "+22%",
    tags: ["Web3", "Freelance", "Blockchain"],
    skills: ["Blockchain", "Smart Contracts", "UI/UX"],
    saved: false,
    revenue: "$250K - $1.2M yearly",
    startupCost: "$150K - $300K",
    timeToMarket: "8-14 months",
    teamSize: "5-8 people",
    targetCustomers: ["Freelance professionals", "Companies seeking talent", "Digital nomads", "Crypto enthusiasts"],
    keyFeatures: [
      "Smart contract escrow and milestone payments",
      "Decentralized dispute resolution",
      "Blockchain-verified reputation system",
      "Low platform fees (2-3%)",
      "Cross-border cryptocurrency payments"
    ]
  },
  {
    id: 4,
    title: "Virtual Reality Education Platform",
    description: "An immersive VR platform for interactive learning experiences across various subjects and skill levels.",
    longDescription: "This VR education platform creates immersive, interactive learning experiences for students of all ages. The system offers curriculum-aligned content for schools, universities, and professional training, with analytics for educators to track progress. The platform includes a marketplace for third-party educational content creators and supports both consumer VR headsets and specialized lab installations.",
    market: "$8.1B",
    competition: "Medium",
    trend: "+27%",
    tags: ["EdTech", "VR/AR", "Education"],
    skills: ["3D Modeling", "VR Development", "Education"],
    saved: false,
    revenue: "$800K - $2.4M yearly",
    startupCost: "$350K - $700K",
    timeToMarket: "12-16 months",
    teamSize: "6-12 people",
    targetCustomers: ["K-12 schools", "Universities", "Corporate training departments", "Individual learners"],
    keyFeatures: [
      "Immersive 3D educational environments",
      "Interactive learning simulations",
      "Curriculum-aligned content library",
      "Educator analytics dashboard",
      "Content creator marketplace"
    ]
  },
  {
    id: 5,
    title: "Smart Home Energy Management System",
    description: "IoT-based solution to optimize home energy usage, reduce bills, and minimize environmental impact.",
    longDescription: "This smart home system uses IoT sensors and machine learning to optimize energy usage throughout the home. The platform connects to smart appliances, HVAC systems, and electricity meters to monitor and control energy consumption in real-time. Users receive actionable insights to reduce waste, and the system automatically optimizes energy use based on preferences, time-of-day pricing, and renewable energy availability.",
    market: "$7.5B",
    competition: "Medium",
    trend: "+15%",
    tags: ["IoT", "Energy", "Smart Home"],
    skills: ["IoT Development", "Hardware", "Energy"],
    saved: false,
    revenue: "$650K - $1.8M yearly",
    startupCost: "$250K - $600K",
    timeToMarket: "10-14 months",
    teamSize: "5-10 people",
    targetCustomers: ["Homeowners", "Property developers", "Sustainability-focused consumers", "Utility companies"],
    keyFeatures: [
      "Real-time energy monitoring and optimization",
      "Integration with major smart home ecosystems",
      "AI-powered usage predictions and recommendations",
      "Renewable energy optimization",
      "Utility bill savings analysis"
    ]
  }
];

const IdeaDetail = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const ideaId = parseInt(id || '1', 10);
  const idea = ideas.find(idea => idea.id === ideaId) || ideas[0];
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 rounded-full bg-quasar-purple opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 rounded-full bg-quasar-pink opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed} 
        activeItem="recommendations" 
        setActiveItem={() => {}}
      />
      <Header sidebarCollapsed={sidebarCollapsed} />
      
      <div className={cn(
        "pt-16 px-6 transition-all duration-300 min-h-screen",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        <div className="py-8 max-w-5xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Ideas
          </Button>
          
          <div className="quasar-card p-8 animate-in">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold idea-text-gradient">{idea.title}</h1>
              <Button variant="outline" className={idea.saved ? "text-quasar-orange bg-quasar-orange/10" : ""}>
                <Save size={18} className="mr-2" /> {idea.saved ? "Saved" : "Save Idea"}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <DollarSign className="h-8 w-8 text-quasar-green mb-2" />
                    <h3 className="font-medium">Market Size</h3>
                    <p className="text-xl font-bold text-quasar-green">{idea.market}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <TrendingUp className="h-8 w-8 text-quasar-orange mb-2" />
                    <h3 className="font-medium">Market Growth</h3>
                    <p className="text-xl font-bold text-quasar-orange">{idea.trend}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Briefcase className="h-8 w-8 text-quasar-purple mb-2" />
                    <h3 className="font-medium">Competition</h3>
                    <p className="text-xl font-bold">{idea.competition}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">Business Overview</h2>
                <p className="text-muted-foreground">{idea.longDescription}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Investment & Returns</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <DollarSign size={16} />
                      </span>
                      <div>
                        <span className="block font-medium">Estimated Revenue</span>
                        <span className="text-muted-foreground">{idea.revenue}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <Briefcase size={16} />
                      </span>
                      <div>
                        <span className="block font-medium">Startup Cost</span>
                        <span className="text-muted-foreground">{idea.startupCost}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <TrendingUp size={16} />
                      </span>
                      <div>
                        <span className="block font-medium">Time to Market</span>
                        <span className="text-muted-foreground">{idea.timeToMarket}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Team & Implementation</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <Users size={16} />
                      </span>
                      <div>
                        <span className="block font-medium">Recommended Team Size</span>
                        <span className="text-muted-foreground">{idea.teamSize}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <Target size={16} />
                      </span>
                      <div>
                        <span className="block font-medium">Target Market</span>
                        <ul className="text-muted-foreground">
                          {idea.targetCustomers.map((customer, index) => (
                            <li key={index}>• {customer}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {idea.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-quasar-green mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {idea.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Industry & Tech</h2>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, index) => {
                    const colors = [
                      {bg: "bg-quasar-purple/10", text: "text-quasar-purple"},
                      {bg: "bg-quasar-pink/10", text: "text-quasar-pink"},
                      {bg: "bg-quasar-orange/10", text: "text-quasar-orange"}
                    ];
                    const colorIndex = index % colors.length;
                    return (
                      <Badge 
                        key={tag} 
                        className={`text-sm py-1 ${colors[colorIndex].bg} ${colors[colorIndex].text} border-none`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center pt-6 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <ThumbsUp size={16} /> Helpful
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ThumbsDown size={16} /> Not Relevant
                </Button>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <ExternalLink size={16} /> Related Resources
                </Button>
                <Button className="gap-2">
                  Get Full Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
