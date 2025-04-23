
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/ui/auth-input";
import { SocialButton } from "@/components/ui/social-button";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/ui/page-transition";
import IosBackIndicator from "@/components/ui/ios-back-indicator";
import { Mail, Lock, ArrowRight, User, UserPlus } from "lucide-react";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors: {name?: string; email?: string; password?: string; confirmPassword?: string} = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate signup
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to login after successful signup
      navigate("/login");
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
        <IosBackIndicator returnTo="/" />
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground mt-2">Sign up to get started</p>
          </div>

          <div className="ios-card space-y-6 animate-up">
            <form onSubmit={handleSignup} className="space-y-4">
              <AuthInput 
                label="Full Name"
                type="text"
                placeholder="John Doe"
                icon={<User size={18} />}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
              
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
                placeholder="Create a password"
                icon={<Lock size={18} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              
              <AuthInput 
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                icon={<Lock size={18} />}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword}
              />
              
              <Button 
                type="submit" 
                className="ios-button mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
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
                icon={<UserPlus size={18} />}
                provider="Apple"
              />
              <SocialButton
                icon={<UserPlus size={18} />}
                provider="Google"
                className="bg-accent"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 animate-in">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="ios-link font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Signup;
