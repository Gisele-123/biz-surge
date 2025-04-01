
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Filter, Search, Tag, Play, Upload, DollarSign, ShoppingCart, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';

type Idea = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  technologies: string[];
  skills: string[];
  thumbnail: string;
  hasDemo: boolean;
  seller: string;
  sellerAvatar: string;
};

// Sample data for demonstration
const sampleIdeas: Idea[] = [
  {
    id: '1',
    title: 'Smart Farming Monitoring System',
    description: 'An IoT-based system that monitors soil health, crop growth, and weather conditions to optimize farming practices.',
    price: 299,
    category: 'Agriculture',
    technologies: ['IoT', 'AI', 'Mobile App'],
    skills: ['App Development', 'IoT Engineering', 'Machine Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    seller: 'EcoTech Solutions',
    sellerAvatar: '',
  },
  {
    id: '2',
    title: 'Decentralized Medical Records',
    description: 'Blockchain-based system for secure, patient-controlled medical records sharing between healthcare providers.',
    price: 499,
    category: 'Healthcare',
    technologies: ['Blockchain', 'Cryptography', 'Web App'],
    skills: ['Blockchain Development', 'Security Engineering', 'UI/UX Design'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    seller: 'HealthChain',
    sellerAvatar: '',
  },
  {
    id: '3',
    title: 'AR Educational Platform',
    description: 'Augmented reality platform for interactive learning experiences in K-12 education.',
    price: 349,
    category: 'Education',
    technologies: ['AR', 'Mobile App', '3D Modeling'],
    skills: ['AR Development', 'Educational Content', '3D Design'],
    thumbnail: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: false,
    seller: 'EduVision',
    sellerAvatar: '',
  },
  {
    id: '4',
    title: 'Smart City Transport Optimization',
    description: 'AI-powered system to optimize public transportation routes and schedules based on real-time demand.',
    price: 599,
    category: 'Transport',
    technologies: ['AI', 'Big Data', 'Cloud Computing'],
    skills: ['Data Science', 'Backend Development', 'Systems Architecture'],
    thumbnail: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    seller: 'UrbanMobility',
    sellerAvatar: '',
  }
];

const technologies = ['AI', 'Blockchain', 'IoT', 'AR/VR', 'Mobile App', 'Web App', 'Big Data', 'Cloud Computing', '3D Modeling', 'Robotics'];
const categories = ['Agriculture', 'Healthcare', 'Education', 'Transport', 'Finance', 'Entertainment', 'Retail', 'Real Estate', 'Energy', 'Manufacturing'];

const Market = ({ sidebarCollapsed }: { sidebarCollapsed: boolean }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>(sampleIdeas);
  const [showTechFilter, setShowTechFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  
  // Filter ideas based on search and filters whenever the dependencies change
  useEffect(() => {
    const filtered = sampleIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            idea.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTech = selectedTech.length === 0 || 
                          selectedTech.some(tech => idea.technologies.includes(tech));
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(idea.category);
      
      return matchesSearch && matchesTech && matchesCategory;
    });
    
    setFilteredIdeas(filtered);
  }, [searchTerm, selectedTech, selectedCategories]);

  const toggleTechFilter = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const toggleCategoryFilter = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSelectedTech([]);
    setSelectedCategories([]);
    setSearchTerm('');
  };

  return (
    <div className={cn(
      "p-6 transition-all duration-300 min-h-screen bg-gradient-to-br from-background to-background/90",
      sidebarCollapsed ? "ml-16" : "ml-64", 
      "mt-16" // Account for header height
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Idea Marketplace</h1>
          <p className="text-muted-foreground">Discover, buy, and sell innovative business ideas with demos</p>
        </div>

        <Tabs defaultValue="browse" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="browse">Browse Ideas</TabsTrigger>
            <TabsTrigger value="purchased">My Purchases</TabsTrigger>
            <TabsTrigger value="my-ideas">My Ideas</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Search ideas..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {activeTab === 'browse' && (
              <div className="flex gap-4">
                <div className="relative">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      setShowTechFilter(!showTechFilter);
                      setShowCategoryFilter(false);
                    }}
                  >
                    <Filter size={16} /> Technology
                  </Button>
                  {showTechFilter && (
                    <div className="absolute z-20 right-0 mt-2 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border/50 w-64">
                      <div className="grid grid-cols-2 gap-2">
                        {technologies.map(tech => (
                          <Badge
                            key={tech}
                            variant={selectedTech.includes(tech) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleTechFilter(tech)}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      setShowCategoryFilter(!showCategoryFilter);
                      setShowTechFilter(false);
                    }}
                  >
                    <Tag size={16} /> Industry
                  </Button>
                  {showCategoryFilter && (
                    <div className="absolute z-20 right-0 mt-2 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border/50 w-64">
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map(category => (
                          <Badge
                            key={category}
                            variant={selectedCategories.includes(category) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleCategoryFilter(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {(selectedTech.length > 0 || selectedCategories.length > 0 || searchTerm) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {/* Show active filters */}
          {(selectedTech.length > 0 || selectedCategories.length > 0) && (
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedTech.map(tech => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => toggleTechFilter(tech)}
                >
                  {tech} ×
                </Badge>
              ))}
              {selectedCategories.map(category => (
                <Badge 
                  key={category} 
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => toggleCategoryFilter(category)}
                >
                  {category} ×
                </Badge>
              ))}
            </div>
          )}

          <TabsContent value="browse" className="mt-0">
            {filteredIdeas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIdeas.map((idea) => (
                  <Card key={idea.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48 w-full bg-muted">
                      <img 
                        src={idea.thumbnail} 
                        alt={idea.title}
                        className="w-full h-full object-cover"
                      />
                      {idea.hasDemo && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary/80 text-primary-foreground flex items-center gap-1">
                            <Play size={12} /> Demo
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{idea.title}</CardTitle>
                          <CardDescription className="text-sm">{idea.seller}</CardDescription>
                        </div>
                        <Badge variant="secondary">{idea.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm line-clamp-3 text-muted-foreground">{idea.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {idea.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="font-bold text-lg flex items-center">
                        <DollarSign size={18} className="text-muted-foreground mr-1" />
                        {idea.price}
                      </div>
                      <Link to={`/purchase-idea/${idea.id}`}>
                        <Button className="gap-2"><ShoppingCart size={16} /> Purchase</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 quasar-card">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No ideas found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="purchased">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No purchased ideas yet</h3>
              <p className="text-muted-foreground mb-6">Browse the marketplace to find innovative business ideas.</p>
              <Button onClick={() => setActiveTab('browse')}>Browse Ideas</Button>
            </div>
          </TabsContent>

          <TabsContent value="my-ideas">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">You haven't uploaded any ideas</h3>
              <p className="text-muted-foreground mb-6">Share your innovative ideas and demos with potential buyers.</p>
              <Button onClick={() => navigate('/upload-idea')}>
                <Upload size={16} className="mr-2" /> Upload New Idea
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Market;
