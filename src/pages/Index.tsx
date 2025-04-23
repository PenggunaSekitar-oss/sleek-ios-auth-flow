
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import PageTransition from "@/components/ui/page-transition";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade">
            <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">iOS Auth</h1>
            <p className="text-lg text-muted-foreground max-w-xs mx-auto">
              A beautiful, responsive authentication flow with iOS-inspired design
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-10 animate-up">
            <Link to="/login">
              <Button className="ios-button w-full text-lg">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="w-full bg-white border border-border text-foreground rounded-xl py-3 text-lg hover:bg-accent">
                Create account
              </Button>
            </Link>
          </div>

          <div className="mt-8 animate-in">
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="ios-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="ios-link">
                Privacy Policy
              </a>
            </p>
          </div>

          {isMobile && (
            <div className="fixed bottom-8 left-0 right-0 flex justify-center animate-in">
              <div className="h-1 w-32 bg-foreground/20 rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
