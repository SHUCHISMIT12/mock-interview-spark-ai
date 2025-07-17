
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, HelpCircle, Settings } from 'lucide-react';

const NavigationBar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">InterviewAce</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
            <HelpCircle className="w-4 h-4" />
            <span>Help & Support</span>
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
