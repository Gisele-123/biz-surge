
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { CheckCircle2, Mail } from "lucide-react";

const formSchema = z.object({
  code: z.string().min(6, "Please enter a valid verification code"),
});

export default function VerifyEmail() {
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would be replaced with actual verification logic
    console.log(values);
    toast.success("Email verified successfully!");
    navigate("/");
  }

  const handleResendCode = () => {
    toast.success("Verification code resent to your email!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-background/90 p-4">
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 rounded-full bg-quasar-purple opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 rounded-full bg-quasar-pink opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gradient mb-2">QUASAR</h1>
        <p className="text-muted-foreground">Verify your email address</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="quasar-card p-8">
          <div className="mb-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Check your inbox</h2>
            <p className="text-muted-foreground text-sm">
              We've sent a verification code to your email address. Enter the code below to verify your account.
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter the 6-digit code" 
                        {...field} 
                        className="text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" size="lg">
                <CheckCircle2 className="mr-2 h-4 w-4" /> Verify Email
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Didn't receive a code?{" "}
              <button 
                onClick={handleResendCode} 
                className="text-primary hover:underline"
              >
                Resend code
              </button>
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/login" className="text-primary hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
