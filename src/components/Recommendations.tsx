
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronRight, Filter, Lightbulb, Save, Star, Target, ThumbsDown, ThumbsUp } from 'lucide-react';

type RecommendationsProps = {
  sidebarCollapsed: boolean;
};

const Recommendations = ({ sidebarCollapsed }: RecommendationsProps) => {
  const navigate = useNavigate();
  
  const ideas = [
    {
      id: 1,
      title: "Eco-Friendly E-commerce Platform",
      description: "A marketplace for sustainable products with carbon footprint tracking and eco-friendly shipping options.",
      market: "$5.8B",
      competition: "Medium",
      trend: "+18%",
      tags: ["E-commerce", "Sustainability", "Tech"],
      skills: ["Web Development", "Digital Marketing", "Logistics"],
      saved: true
    },
    {
      id: 2,
      title: "AI-Powered Health Monitoring App",
      description: "A mobile application using AI to track health metrics, provide personalized advice, and detect early signs of health issues.",
      market: "$12.4B",
      competition: "High",
      trend: "+34%",
      tags: ["Health Tech", "AI", "Mobile"],
      skills: ["AI/ML", "Mobile Development", "Healthcare"],
      saved: false
    },
    {
      id: 3,
      title: "Decentralized Freelance Marketplace",
      description: "A blockchain-based platform connecting freelancers with clients, featuring smart contracts and cryptocurrency payments.",
      market: "$3.2B",
      competition: "Low",
      trend: "+22%",
      tags: ["Web3", "Freelance", "Blockchain"],
      skills: ["Blockchain", "Smart Contracts", "UI/UX"],
      saved: false
    },
    {
      id: 4,
      title: "Virtual Reality Education Platform",
      description: "An immersive VR platform for interactive learning experiences across various subjects and skill levels.",
      market: "$8.1B",
      competition: "Medium",
      trend: "+27%",
      tags: ["EdTech", "VR/AR", "Education"],
      skills: ["3D Modeling", "VR Development", "Education"],
      saved: false
    },
    {
      id: 5,
      title: "Smart Home Energy Management System",
      description: "IoT-based solution to optimize home energy usage, reduce bills, and minimize environmental impact.",
      market: "$7.5B",
      competition: "Medium",
      trend: "+15%",
      tags: ["IoT", "Energy", "Smart Home"],
      skills: ["IoT Development", "Hardware", "Energy"],
      saved: false
    }
  ];

  return (
    <div className={cn(
      "pt-16 px-6 transition-all duration-300 min-h-screen",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <div className="py-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Business <span className="text-gradient">Ideas</span></h1>
            <p className="text-muted-foreground">Personalized recommendations based on your profile and market trends</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="quasar-button bg-white border border-border/50 text-foreground hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
            <button className="quasar-button bg-primary text-white hover:bg-primary/90 flex items-center">
              <Lightbulb size={18} className="mr-2" />
              Generate Ideas
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {ideas.map((idea) => (
            <div 
              key={idea.id} 
              className="quasar-card p-6 hover:border-primary/50 transition-all duration-300 animate-in"
              style={{ animationDelay: `${(idea.id - 1) * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold idea-text-gradient">{idea.title}</h3>
                    <button className={cn(
                      "p-2 rounded-full transition-colors",
                      idea.saved 
                        ? "text-quasar-orange bg-quasar-orange/10" 
                        : "text-muted-foreground hover:text-quasar-orange hover:bg-quasar-orange/5"
                    )}>
                      <Save size={18} />
                    </button>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {idea.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Market Size</p>
                      <p className="font-semibold text-quasar-green">{idea.market}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Competition</p>
                      <p className="font-semibold">{idea.competition}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Market Growth</p>
                      <p className="font-semibold text-quasar-green">{idea.trend}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm text-muted-foreground mb-2">Market Tags</div>
                    <div className="flex flex-wrap gap-2">
                      {idea.tags.map((tag, index) => {
                        const colors = [
                          {bg: "bg-quasar-purple/10", text: "text-quasar-purple"},
                          {bg: "bg-quasar-pink/10", text: "text-quasar-pink"},
                          {bg: "bg-quasar-orange/10", text: "text-quasar-orange"}
                        ];
                        const colorIndex = index % colors.length;
                        return (
                          <span 
                            key={tag} 
                            className={`px-3 py-1 rounded-full text-sm ${colors[colorIndex].bg} ${colors[colorIndex].text}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm text-muted-foreground mb-2">Required Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {idea.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-muted/50 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex lg:flex-col justify-between gap-4 lg:border-l lg:pl-6 lg:border-border/50">
                  <button 
                    className="quasar-button bg-primary text-white hover:bg-primary/90 flex items-center"
                    onClick={() => navigate(`/idea/${idea.id}`)}
                  >
                    <Target size={18} className="mr-2" />
                    Explore
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                      <ThumbsUp size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                      <ThumbsDown size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="quasar-card p-8 mt-8 text-center">
          <div className="w-16 h-16 rounded-full bg-quasar-purple/10 flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="text-quasar-purple" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Want more personalized ideas?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Complete your profile and provide more details about your preferences to receive better recommendations.
          </p>
          <button className="quasar-button bg-primary text-white hover:bg-primary/90 mt-4">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
