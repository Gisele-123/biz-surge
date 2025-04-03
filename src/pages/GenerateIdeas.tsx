
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Lightbulb, 
  Sparkles, 
  Filter, 
  ArrowRight, 
  Brain, 
  Target, 
  Check 
} from 'lucide-react';
import { toast } from "sonner";

const GenerateIdeas = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [skills, setSkills] = useState('');
  const [industry, setIndustry] = useState('');
  const [marketSize, setMarketSize] = useState('any');
  const [competition, setCompetition] = useState('any');
  const [generatedIdeas, setGeneratedIdeas] = useState<any[]>([]);
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt to generate ideas");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const dummyIdeas = [
        {
          id: 1,
          title: "AI-Powered Content Recommendation System",
          description: "A platform that analyzes user behavior to deliver personalized content recommendations across different media types.",
          market: "$8.4B",
          competition: "Medium",
          trend: "+22%",
          tags: ["AI/ML", "Content", "Personalization"],
          skills: ["Machine Learning", "Recommendation Systems", "Data Analytics"]
        },
        {
          id: 2,
          title: "Sustainable Fashion Marketplace",
          description: "A marketplace connecting eco-conscious consumers with sustainable fashion brands, featuring carbon footprint tracking.",
          market: "$6.3B",
          competition: "Low",
          trend: "+31%",
          tags: ["E-commerce", "Sustainability", "Fashion"],
          skills: ["Web Development", "Supply Chain", "Marketing"]
        },
        {
          id: 3,
          title: "Remote Team Collaboration Tool",
          description: "An all-in-one platform for remote teams to collaborate, with features focused on asynchronous work and well-being.",
          market: "$11.2B",
          competition: "High",
          trend: "+19%",
          tags: ["SaaS", "Remote Work", "Productivity"],
          skills: ["UX/UI Design", "Backend Development", "Real-time Systems"]
        }
      ];
      
      setGeneratedIdeas(dummyIdeas);
      setIsGenerating(false);
      toast.success("Ideas generated successfully!");
    }, 2000);
  };
  
  const handleSave = (idea: any) => {
    toast.success(`"${idea.title}" saved to your ideas`);
    navigate('/app', { state: { activeItem: 'recommendations' } });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">QUASAR</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/app')}>
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Generate</span> Business Ideas
          </h1>
          <p className="text-muted-foreground">
            Our AI will generate custom business ideas based on your preferences and market trends
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 quasar-card p-6">
            <h2 className="text-xl font-semibold mb-4">What type of business are you interested in?</h2>
            <Textarea 
              placeholder="Describe the type of business you want to create. Include any specific problems you want to solve or industries you're interested in."
              className="min-h-[120px] mb-4"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Your Skills</label>
                <Input 
                  placeholder="e.g., programming, marketing, design" 
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Target Industry</label>
                <Input 
                  placeholder="e.g., healthcare, education, finance" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Market Size</label>
                  <select 
                    className="w-full p-2 border border-border rounded-md bg-background"
                    value={marketSize}
                    onChange={(e) => setMarketSize(e.target.value)}
                  >
                    <option value="any">Any Size</option>
                    <option value="small">Small (&lt;$1B)</option>
                    <option value="medium">Medium ($1B-$10B)</option>
                    <option value="large">Large (&gt;$10B)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Competition</label>
                  <select 
                    className="w-full p-2 border border-border rounded-md bg-background"
                    value={competition}
                    onChange={(e) => setCompetition(e.target.value)}
                  >
                    <option value="any">Any Level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              
              <Button 
                className="mt-auto bg-primary hover:bg-primary/90 text-white"
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>Generating... <Sparkles className="ml-2 animate-pulse" size={18} /></>
                ) : (
                  <>Generate Ideas <Lightbulb className="ml-2" size={18} /></>
                )}
              </Button>
            </div>
          </div>
          
          <div className="quasar-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-quasar-purple/10 flex items-center justify-center">
                <Lightbulb className="text-quasar-purple" size={20} />
              </div>
              <h2 className="text-xl font-semibold">How It Works</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Describe Your Interests</h3>
                  <p className="text-sm text-muted-foreground">Tell us what kind of business you're interested in</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Add Your Skills</h3>
                  <p className="text-sm text-muted-foreground">We'll tailor ideas to your experience</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Set Preferences</h3>
                  <p className="text-sm text-muted-foreground">Narrow down by market size and competition</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Save Your Favorites</h3>
                  <p className="text-sm text-muted-foreground">Add promising ideas to your dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center mb-2">
                <Brain size={16} className="text-quasar-pink mr-2" />
                <span className="font-medium">AI-Powered</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes market trends and opportunities to generate ideas with the highest chance of success
              </p>
            </div>
          </div>
        </div>
        
        {generatedIdeas.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Generated Ideas</h2>
              <Button variant="outline" onClick={() => setGeneratedIdeas([])}>
                Clear Results
              </Button>
            </div>
            
            <div className="space-y-6">
              {generatedIdeas.map((idea) => (
                <div key={idea.id} className="quasar-card p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold idea-text-gradient">{idea.title}</h3>
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
                          {idea.tags.map((tag: string, index: number) => {
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
                          {idea.skills.map((skill: string) => (
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
                      
                      <button 
                        className="quasar-button bg-white border border-border/50 text-foreground hover:bg-gray-50 flex items-center"
                        onClick={() => handleSave(idea)}
                      >
                        <Check size={18} className="mr-2" />
                        Save Idea
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GenerateIdeas;
