
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/ui/auth-input";
import { SocialButton } from "@/components/ui/social-button";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/ui/page-transition";
import IosBackIndicator from "@/components/ui/ios-back-indicator";
import { Mail, Lock, ArrowRight, User } from "lucide-react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<{email?: string; password?: string}>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors: {email?: string; password?: string} = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home after successful login
      navigate("/");
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
        <IosBackIndicator returnTo="/" />
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>

          <div className="ios-card space-y-6 animate-up">
            <form onSubmit={handleLogin} className="space-y-4">
              <AuthInput 
                label="Email"
                type="email"
                placeholder="your@email.com"
                icon={<Mail size={18} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              
              <AuthInput 
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={<Lock size={18} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm ios-link">
                  Forgot password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="ios-button mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
                {!isLoading && <ArrowRight size={18} className="ml-2" />}
              </Button>
            </form>
            
            <div className="relative flex items-center justify-center gap-2">
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-sm text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            
            <div className="space-y-3">
              <SocialButton
                icon={<User size={18} />}
                provider="Apple"
              />
              <SocialButton
                icon={<User size={18} />}
                provider="Google"
                className="bg-accent"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 animate-in">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="ios-link font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
