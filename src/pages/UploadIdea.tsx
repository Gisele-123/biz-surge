
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Upload, X, Plus, ArrowLeft, DollarSign } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";

const technologies = ['AI', 'Blockchain', 'IoT', 'AR/VR', 'Mobile App', 'Web App', 'Big Data', 'Cloud Computing', '3D Modeling', 'Robotics'];
const categories = ['Agriculture', 'Healthcare', 'Education', 'Transport', 'Finance', 'Entertainment', 'Retail', 'Real Estate', 'Energy', 'Manufacturing'];
const skills = ['App Development', 'UI/UX Design', 'Data Science', 'Machine Learning', 'Blockchain Development', 'Cloud Engineering', 'IoT Engineering', 'AR/VR Development', '3D Modeling', 'Robotics Engineering'];

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  category: z.string().min(1, "Please select a category"),
  technologies: z.array(z.string()).min(1, "Please select at least one technology"),
  skills: z.array(z.string()).min(1, "Please select at least one required skill"),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  isPremium: z.boolean().default(false),
  hasDemo: z.boolean().default(false),
  thumbnailUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  detailedDescription: z.string().optional(),
  marketAnalysis: z.string().optional(),
  implementationGuide: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const UploadIdea = () => {
  const navigate = useNavigate();
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [demoPreview, setDemoPreview] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      technologies: [],
      skills: [],
      price: 0,
      isPremium: false,
      hasDemo: false,
      thumbnailUrl: "",
      demoUrl: "",
      detailedDescription: "",
      marketAnalysis: "",
      implementationGuide: "",
    },
  });

  const isPremium = form.watch("isPremium");
  const hasDemo = form.watch("hasDemo");

  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies(prev => {
      if (prev.includes(tech)) {
        const newTechs = prev.filter(t => t !== tech);
        form.setValue("technologies", newTechs);
        return newTechs;
      } else {
        const newTechs = [...prev, tech];
        form.setValue("technologies", newTechs);
        return newTechs;
      }
    });
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => {
      if (prev.includes(skill)) {
        const newSkills = prev.filter(s => s !== skill);
        form.setValue("skills", newSkills);
        return newSkills;
      } else {
        const newSkills = [...prev, skill];
        form.setValue("skills", newSkills);
        return newSkills;
      }
    });
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload the file to a server and get a URL back
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);
      form.setValue("thumbnailUrl", previewUrl);
    }
  };

  const handleDemoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload the file to a server and get a URL back
      const previewUrl = URL.createObjectURL(file);
      setDemoPreview(previewUrl);
      form.setValue("demoUrl", previewUrl);
    }
  };

  function onSubmit(values: FormValues) {
    // This would typically send the data to a server
    console.log(values);
    
    toast.success("Your idea has been uploaded successfully!");
    navigate("/market");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-background/90 p-4">
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 rounded-full bg-quasar-purple opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 rounded-full bg-quasar-pink opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <Link to="/market" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
          </Link>
          <h1 className="text-3xl font-bold text-gradient">Upload Your Idea</h1>
          <p className="text-muted-foreground">Share your innovative business ideas with potential buyers</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>New Idea Submission</CardTitle>
            <CardDescription>
              Fill out the form below to list your idea on the marketplace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="details">Details & Media</TabsTrigger>
                    <TabsTrigger value="premium" disabled={!isPremium}>Premium Content</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Idea Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter a catchy title for your idea" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Short Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Provide a brief description of your idea (visible to all users)"
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price (USD)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input 
                                  type="number" 
                                  placeholder="0" 
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Set to 0 for free ideas
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="technologies"
                        render={() => (
                          <FormItem>
                            <FormLabel>Technologies Used</FormLabel>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                                  className="cursor-pointer"
                                  onClick={() => handleTechnologyToggle(tech)}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="skills"
                        render={() => (
                          <FormItem>
                            <FormLabel>Required Skills</FormLabel>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                                  className="cursor-pointer"
                                  onClick={() => handleSkillToggle(skill)}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="isPremium"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Premium Idea</FormLabel>
                              <FormDescription>
                                Premium ideas include detailed documentation and market analysis
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="details" className="space-y-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="thumbnailUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thumbnail Image</FormLabel>
                            <FormControl>
                              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                                {thumbnailPreview ? (
                                  <div className="relative inline-block">
                                    <img 
                                      src={thumbnailPreview} 
                                      alt="Thumbnail preview" 
                                      className="max-h-[200px] rounded-md"
                                    />
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="icon"
                                      className="absolute top-2 right-2"
                                      onClick={() => {
                                        setThumbnailPreview(null);
                                        form.setValue("thumbnailUrl", "");
                                      }}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <>
                                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                                    <p className="text-sm text-muted-foreground mb-2">
                                      Drag and drop your thumbnail here, or click to browse
                                    </p>
                                    <Input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      id="thumbnail-upload"
                                      onChange={handleThumbnailUpload}
                                    />
                                    <Button
                                      type="button"
                                      variant="outline"
                                      onClick={() => {
                                        document.getElementById("thumbnail-upload")?.click();
                                      }}
                                    >
                                      Choose File
                                    </Button>
                                  </>
                                )}
                              </div>
                            </FormControl>
                            <FormDescription>
                              Upload an eye-catching image that represents your idea
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="hasDemo"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Include Demo</FormLabel>
                              <FormDescription>
                                Add a demo video or prototype to showcase your idea
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {hasDemo && (
                      <FormField
                        control={form.control}
                        name="demoUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Demo Video/Prototype</FormLabel>
                            <FormControl>
                              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                                {demoPreview ? (
                                  <div className="relative inline-block">
                                    <video 
                                      src={demoPreview} 
                                      controls
                                      className="max-h-[200px] rounded-md"
                                    />
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="icon"
                                      className="absolute top-2 right-2"
                                      onClick={() => {
                                        setDemoPreview(null);
                                        form.setValue("demoUrl", "");
                                      }}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <>
                                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                                    <p className="text-sm text-muted-foreground mb-2">
                                      Upload a demo video or prototype of your idea
                                    </p>
                                    <Input
                                      type="file"
                                      accept="video/*"
                                      className="hidden"
                                      id="demo-upload"
                                      onChange={handleDemoUpload}
                                    />
                                    <Button
                                      type="button"
                                      variant="outline"
                                      onClick={() => {
                                        document.getElementById("demo-upload")?.click();
                                      }}
                                    >
                                      Choose File
                                    </Button>
                                  </>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </TabsContent>
                  
                  <TabsContent value="premium" className="space-y-6">
                    {isPremium ? (
                      <>
                        <FormField
                          control={form.control}
                          name="detailedDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Detailed Description</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Provide an in-depth description of your idea (only visible to buyers)"
                                  className="min-h-[150px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="marketAnalysis"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Market Analysis</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Provide market research and analysis (only visible to buyers)"
                                  className="min-h-[150px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="implementationGuide"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Implementation Guide</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Provide steps to implement this idea (only visible to buyers)"
                                  className="min-h-[150px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    ) : (
                      <div className="quasar-card p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Plus className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">Premium Content</h3>
                        <p className="text-muted-foreground mb-6">
                          Check "Premium Idea" in the Basic Info tab to unlock premium content options.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <CardFooter className="px-0 pt-6 flex justify-between">
                  <Button type="button" variant="outline" onClick={() => navigate("/market")}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    <Upload className="mr-2 h-4 w-4" /> Upload Idea
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadIdea;
