import React from 'react';
import { Heart, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center z-50">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-3xl gradient-hero flex items-center justify-center glass-morphism depth-shadow floating-3d">
            <img 
              src="/favicon.ico" 
                alt="Healthlink Nepal Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground">Healthlink Nepal</h1>
              <p className="text-sm text-muted-foreground">Healthcare for Nepal</p>
            </div>
          </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="health-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="heartbeat"></div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-foreground">Loading Healthlink Nepal</p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Preparing your health companion
              <div className="loading-dots-custom">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </p>
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-slow"></div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm mx-auto">
          <div className="card-3d rounded-xl p-3 text-center glass-morphism">
            <Heart className="w-6 h-6 text-primary mx-auto mb-1 icon-3d" />
            <p className="text-xs text-muted-foreground">AI Health Assistant</p>
          </div>
          <div className="card-3d rounded-xl p-3 text-center glass-morphism">
            <Zap className="w-6 h-6 text-emergency mx-auto mb-1 icon-3d" />
            <p className="text-xs text-muted-foreground">Emergency Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;