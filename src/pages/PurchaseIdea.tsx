import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowLeft, Check, CreditCard, Download, ExternalLink, Play, ShieldCheck, ShoppingCart, CreditCard as CreditCardIcon, Wallet, Landmark, QrCode } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const sampleIdeas = [
  {
    id: '1',
    title: 'Smart Farming Monitoring System',
    description: 'An IoT-based system that monitors soil health, crop growth, and weather conditions to optimize farming practices.',
    fullDescription: 'This comprehensive IoT solution utilizes soil sensors, weather monitors, and AI analysis to provide farmers with real-time insights about their crops. The system includes a mobile app that delivers personalized recommendations for irrigation, fertilization, and pest control based on current conditions.',
    marketAnalysis: 'The agricultural technology market is projected to grow from $17.4 billion in 2020 to $41.1 billion by 2027. Precision agriculture and farm management software are seeing the highest growth rates due to increasing demand for sustainable farming practices and the need to optimize resources.',
    implementationSteps: [
      'Deploy soil sensors across the farm at strategic locations',
      'Set up the central monitoring station and connect to the internet',
      'Install the mobile app and connect to the sensor network',
      'Set up personalized alerts and reports',
      'Integrate with existing irrigation systems if applicable'
    ],
    price: 299,
    category: 'Agriculture',
    technologies: ['IoT', 'AI', 'Mobile App'],
    skills: ['App Development', 'IoT Engineering', 'Machine Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    demoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    seller: 'EcoTech Solutions',
    sellerAvatar: '',
    isPremium: true,
  },
  {
    id: '2',
    title: 'Decentralized Medical Records',
    description: 'Blockchain-based system for secure, patient-controlled medical records sharing between healthcare providers.',
    fullDescription: 'This blockchain solution gives patients full control over their medical data, allowing them to grant and revoke access to healthcare providers. Each access is recorded on the blockchain for complete transparency, while the actual data is stored securely and encrypted.',
    marketAnalysis: 'The healthcare blockchain market is expected to reach $5.61 billion by 2025, growing at a CAGR of 64.3%. Major drivers include the need for secure sharing of patient data, reduction of healthcare fraud, and improved interoperability between systems.',
    implementationSteps: [
      'Set up the blockchain infrastructure using Ethereum or a similar platform',
      'Develop the smart contracts for permission management',
      'Create the web portal for patients and healthcare providers',
      'Implement secure data storage with encryption',
      'Establish integration protocols with existing EMR systems'
    ],
    price: 499,
    category: 'Healthcare',
    technologies: ['Blockchain', 'Cryptography', 'Web App'],
    skills: ['Blockchain Development', 'Security Engineering', 'UI/UX Design'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    demoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    seller: 'HealthChain',
    sellerAvatar: '',
    isPremium: true,
  },
  {
    id: '3',
    title: 'AR Educational Platform',
    description: 'Augmented reality platform for interactive learning experiences in K-12 education.',
    fullDescription: 'This AR platform brings textbooks to life with interactive 3D models, animations, and quizzes that engage students in a completely new way. Content can be customized by teachers and aligns with common educational standards.',
    marketAnalysis: 'The AR in education market is projected to reach $5.3 billion by 2023, with a CAGR of 82.7%. Schools are increasingly adopting immersive technologies to improve student engagement and learning outcomes, particularly in STEM subjects.',
    implementationSteps: [
      'Develop the core AR engine using ARKit/ARCore',
      'Create the content management system for educators',
      'Design initial AR learning modules for various subjects',
      'Implement analytics to track student progress',
      'Develop the mobile app for iOS and Android'
    ],
    price: 349,
    category: 'Education',
    technologies: ['AR', 'Mobile App', '3D Modeling'],
    skills: ['AR Development', 'Educational Content', '3D Design'],
    thumbnail: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: false,
    demoUrl: '',
    seller: 'EduVision',
    sellerAvatar: '',
    isPremium: true,
  },
  {
    id: '4',
    title: 'Smart City Transport Optimization',
    description: 'AI-powered system to optimize public transportation routes and schedules based on real-time demand.',
    fullDescription: 'This system uses AI to analyze historical and real-time data from various sources (mobile phones, ticket sales, traffic cameras) to optimize bus and train schedules. The solution can reduce wait times by up to 30% and cut operational costs for transit authorities.',
    marketAnalysis: 'The smart transportation market is expected to grow from $94.5 billion in 2020 to $156.5 billion by 2025. Cities worldwide are investing in smart infrastructure to reduce congestion, lower emissions, and improve quality of life for citizens.',
    implementationSteps: [
      'Set up data collection infrastructure and APIs',
      'Develop the AI prediction models for passenger flow',
      'Create the optimization engine for route planning',
      'Build the control center dashboard for operators',
      'Implement the public-facing app for real-time updates'
    ],
    price: 599,
    category: 'Transport',
    technologies: ['AI', 'Big Data', 'Cloud Computing'],
    skills: ['Data Science', 'Backend Development', 'Systems Architecture'],
    thumbnail: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    hasDemo: true,
    demoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    seller: 'UrbanMobility',
    sellerAvatar: '',
    isPremium: true,
  }
];

const paymentSchema = z.object({
  paymentMethod: z.enum(["creditCard", "paypal", "bankTransfer", "crypto"]),
  cardNumber: z.string().optional(),
  cardHolder: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

const PurchaseIdea = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  
  const idea = sampleIdeas.find(i => i.id === id);

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: "creditCard",
    },
  });
  
  if (!idea) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-background/90 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Idea Not Found</h2>
          <p className="text-muted-foreground mb-6">The idea you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/market')}>
            Return to Marketplace
          </Button>
        </div>
      </div>
    );
  }

  const handlePurchase = (values: z.infer<typeof paymentSchema>) => {
    setIsProcessing(true);
    console.log("Processing payment with:", values);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentDialog(false);
      setPurchaseComplete(true);
      toast.success("Purchase successful! You now have access to the full idea details.");
    }, 1500);
  };

  const resetPaymentForm = () => {
    setPaymentStep(1);
    form.reset();
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 p-4 md:p-8">
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 rounded-full bg-quasar-purple opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 rounded-full bg-quasar-pink opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-6xl mx-auto">
        <Link to="/market" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative h-[300px] w-full bg-muted rounded-lg overflow-hidden">
                <img 
                  src={idea.thumbnail} 
                  alt={idea.title} 
                  className="w-full h-full object-cover"
                />
                {idea.hasDemo && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="absolute bottom-4 right-4 gap-2" disabled={!purchaseComplete && idea.isPremium}>
                        <Play size={16} /> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Idea Demo: {idea.title}</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white">Video player would be embedded here</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details" disabled={!purchaseComplete && idea.isPremium}>
                  Full Details
                </TabsTrigger>
                <TabsTrigger value="implementation" disabled={!purchaseComplete && idea.isPremium}>
                  Implementation
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{idea.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>{idea.category}</Badge>
                    {idea.technologies.map(tech => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{idea.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Required Skills</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {idea.skills.map(skill => (
                            <li key={skill} className="flex items-center">
                              <Check className="h-4 w-4 text-primary mr-2" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Seller Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            {idea.sellerAvatar ? (
                              <img src={idea.sellerAvatar} alt={idea.seller} className="w-10 h-10 rounded-full" />
                            ) : (
                              <span className="font-bold">{idea.seller.charAt(0)}</span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{idea.seller}</p>
                            <p className="text-sm text-muted-foreground">Verified Seller</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {!purchaseComplete && idea.isPremium && (
                  <Card className="border-dashed border-primary/50 bg-primary/5">
                    <CardHeader>
                      <CardTitle>Premium Content Available</CardTitle>
                      <CardDescription>
                        Purchase this idea to unlock detailed documentation, market analysis, and implementation guide.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Detailed project description and specifications</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Market analysis and potential revenue streams</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Step-by-step implementation guide</span>
                        </li>
                        {idea.hasDemo && (
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2" />
                            <span>Access to the demo video</span>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="details" className="space-y-6">
                {purchaseComplete || !idea.isPremium ? (
                  <>
                    <div>
                      <h2 className="text-xl font-bold mb-4">Detailed Description</h2>
                      <p className="text-muted-foreground mb-6">{idea.fullDescription}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4">Market Analysis</h2>
                      <p className="text-muted-foreground mb-6">{idea.marketAnalysis}</p>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Downloadable Resources</CardTitle>
                        <CardDescription>
                          All the files you need to get started with this idea
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <Download className="mr-2 h-4 w-4" />
                              Business Plan Template.pdf
                            </Button>
                          </li>
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <Download className="mr-2 h-4 w-4" />
                              Market Research Data.xlsx
                            </Button>
                          </li>
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <Download className="mr-2 h-4 w-4" />
                              Technical Specifications.pdf
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">Purchase Required</h3>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      You need to purchase this idea to access the detailed information and resources.
                    </p>
                    <Dialog open={showPaymentDialog} onOpenChange={(open) => {
                      setShowPaymentDialog(open);
                      if (!open) resetPaymentForm();
                    }}>
                      <DialogTrigger asChild>
                        <Button>Purchase Now</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Complete Your Purchase</DialogTitle>
                          <DialogDescription>
                            Select a payment method and enter your details to get immediate access.
                          </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(handlePurchase)} className="space-y-4 py-4">
                            {paymentStep === 1 && (
                              <>
                                <div className="flex justify-between mb-4">
                                  <span>Idea: {idea.title}</span>
                                  <span className="font-bold">${idea.price}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-bold">
                                  <span>Total</span>
                                  <span>${idea.price}</span>
                                </div>
                                
                                <FormField
                                  control={form.control}
                                  name="paymentMethod"
                                  render={({ field }) => (
                                    <FormItem className="space-y-3 mt-4">
                                      <FormLabel>Select Payment Method</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          onValueChange={field.onChange}
                                          defaultValue={field.value}
                                          className="grid grid-cols-2 gap-4"
                                        >
                                          <Label
                                            htmlFor="creditCard"
                                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                                              field.value === "creditCard" ? "border-primary" : ""
                                            }`}
                                          >
                                            <RadioGroupItem
                                              value="creditCard"
                                              id="creditCard"
                                              className="sr-only"
                                            />
                                            <CreditCardIcon className="mb-3 h-6 w-6" />
                                            <span className="text-sm">Credit Card</span>
                                          </Label>
                                          <Label
                                            htmlFor="paypal"
                                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                                              field.value === "paypal" ? "border-primary" : ""
                                            }`}
                                          >
                                            <RadioGroupItem
                                              value="paypal"
                                              id="paypal"
                                              className="sr-only"
                                            />
                                            <Wallet className="mb-3 h-6 w-6" />
                                            <span className="text-sm">PayPal</span>
                                          </Label>
                                          <Label
                                            htmlFor="bankTransfer"
                                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                                              field.value === "bankTransfer" ? "border-primary" : ""
                                            }`}
                                          >
                                            <RadioGroupItem
                                              value="bankTransfer"
                                              id="bankTransfer"
                                              className="sr-only"
                                            />
                                            <Landmark className="mb-3 h-6 w-6" />
                                            <span className="text-sm">Bank Transfer</span>
                                          </Label>
                                          <Label
                                            htmlFor="crypto"
                                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                                              field.value === "crypto" ? "border-primary" : ""
                                            }`}
                                          >
                                            <RadioGroupItem
                                              value="crypto"
                                              id="crypto"
                                              className="sr-only"
                                            />
                                            <QrCode className="mb-3 h-6 w-6" />
                                            <span className="text-sm">Cryptocurrency</span>
                                          </Label>
                                        </RadioGroup>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <div className="flex justify-between pt-4">
                                  <Button 
                                    type="button" 
                                    variant="outline" 
                                    onClick={() => setShowPaymentDialog(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button 
                                    type="button" 
                                    onClick={() => setPaymentStep(2)}
                                  >
                                    Continue
                                  </Button>
                                </div>
                              </>
                            )}
                            
                            {paymentStep === 2 && (
                              <>
                                {form.watch("paymentMethod") === "creditCard" && (
                                  <div className="space-y-4">
                                    <FormField
                                      control={form.control}
                                      name="cardNumber"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Card Number</FormLabel>
                                          <FormControl>
                                            <Input 
                                              placeholder="1234 5678 9012 3456" 
                                              {...field} 
                                              maxLength={19}
                                              onChange={(e) => {
                                                const value = e.target.value.replace(/\s/g, "");
                                                const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
                                                field.onChange(formattedValue);
                                              }}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={form.control}
                                      name="cardHolder"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Card Holder Name</FormLabel>
                                          <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                      <FormField
                                        control={form.control}
                                        name="expiryDate"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Expiry Date</FormLabel>
                                            <FormControl>
                                              <Input placeholder="MM/YY" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <FormField
                                        control={form.control}
                                        name="cvv"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>CVV</FormLabel>
                                            <FormControl>
                                              <Input placeholder="123" {...field} maxLength={4} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                    </div>
                                  </div>
                                )}
                                
                                {form.watch("paymentMethod") === "paypal" && (
                                  <div className="py-8 text-center">
                                    <Wallet className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                                    <p className="text-muted-foreground mb-4">
                                      You'll be redirected to PayPal to complete your purchase
                                    </p>
                                  </div>
                                )}
                                
                                {form.watch("paymentMethod") === "bankTransfer" && (
                                  <div className="py-8 space-y-4">
                                    <p className="text-muted-foreground">
                                      Please use the following details to make a bank transfer:
                                    </p>
                                    <div className="bg-muted p-4 rounded-md space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="font-medium">Bank:</span>
                                        <span>Quasar Bank</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="font-medium">Account Name:</span>
                                        <span>Quasar Innovations Inc</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="font-medium">Account Number:</span>
                                        <span>1234567890</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="font-medium">Routing Number:</span>
                                        <span>987654321</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="font-medium">Reference:</span>
                                        <span>IDEA-{id}</span>
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      Please include the reference number in your transfer.
                                      Access will be granted within 24 hours of receiving your payment.
                                    </p>
                                  </div>
                                )}
                                
                                {form.watch("paymentMethod") === "crypto" && (
                                  <div className="py-8 space-y-4">
                                    <p className="text-muted-foreground">
                                      Send payment to the following wallet address:
                                    </p>
                                    <div className="bg-muted p-4 rounded-md text-center">
                                      <QrCode className="h-32 w-32 mx-auto mb-4" />
                                      <p className="text-xs break-all bg-background p-2 rounded">
                                        0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                                      </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      We accept Bitcoin, Ethereum, and USDC.
                                      Access will be granted automatically once your transaction is confirmed.
                                    </p>
                                  </div>
                                )}
                                
                                <div className="flex justify-between pt-4">
                                  <Button 
                                    type="button" 
                                    variant="outline" 
                                    onClick={() => setPaymentStep(1)}
                                  >
                                    Back
                                  </Button>
                                  <Button 
                                    type="submit"
                                    disabled={isProcessing}
                                  >
                                    {isProcessing ? (
                                      <>Processing...</>
                                    ) : (
                                      <>Complete Purchase</>
                                    )}
                                  </Button>
                                </div>
                              </>
                            )}
                            
                            <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground mt-6">
                              <p className="text-center">
                                Demo Mode: Click "Complete Purchase" to simulate payment
                              </p>
                            </div>
                          </form>
                        </Form>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="implementation" className="space-y-6">
                {purchaseComplete || !idea.isPremium ? (
                  <>
                    <h2 className="text-xl font-bold mb-4">Implementation Guide</h2>
                    <p className="text-muted-foreground mb-6">
                      Follow these steps to implement the {idea.title} successfully:
                    </p>
                    
                    <div className="space-y-4">
                      {idea.implementationSteps.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="font-bold text-primary">{index + 1}</span>
                          </div>
                          <div className="bg-card border border-border rounded-lg p-4 flex-grow">
                            <p>{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Card className="mt-8">
                      <CardHeader>
                        <CardTitle>Additional Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Documentation
                            </Button>
                          </li>
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              API References
                            </Button>
                          </li>
                          <li>
                            <Button variant="outline" className="w-full justify-start">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Community Forum
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">Purchase Required</h3>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      You need to purchase this idea to access the implementation guide.
                    </p>
                    <Dialog open={showPaymentDialog} onOpenChange={(open) => {
                      setShowPaymentDialog(open);
                      if (!open) resetPaymentForm();
                    }}>
                      <DialogTrigger asChild>
                        <Button>Purchase Now</Button>
                      </DialogTrigger>
                      <DialogContent>
                        {/* Payment dialog content - same as in details tab */}
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <span>${idea.price}</span>
                    {idea.isPremium && (
                      <Badge variant="secondary" className="ml-2">Premium</Badge>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>
                  {idea.isPremium ? 'Includes full documentation and resources' : 'Basic idea with overview'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {purchaseComplete ? (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 flex items-center">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-600 font-medium">Purchased Successfully</span>
                  </div>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={() => setShowPaymentDialog(true)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Purchase Idea
                  </Button>
                )}
                
                <div className="space-y-3 pt-4">
                  <h3 className="font-semibold">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Idea overview and description</span>
                    </li>
                    {(purchaseComplete || !idea.isPremium) && idea.hasDemo && (
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span>Demo video/prototype</span>
                      </li>
                    )}
                    {(purchaseComplete || !idea.isPremium) && (
                      <>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Detailed project documentation</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Implementation guide</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Downloadable resources</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground w-full">
                  <p className="mb-2">All purchases include:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Unlimited access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Seller support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Money-back guarantee (14 days)</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/market`}>Browse More Ideas</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseIdea;
