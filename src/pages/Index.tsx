
import React, { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Dashboard from '@/components/Dashboard';
import InterviewSetup from '@/components/InterviewSetup';
import AIResearchPhase from '@/components/AIResearchPhase';
import PreInterviewCheck from '@/components/PreInterviewCheck';
import LiveInterview from '@/components/LiveInterview';

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'setup' | 'research' | 'precheck' | 'interview'>('dashboard');

  const handleStartNewInterview = () => {
    setCurrentView('setup');
  };

  const handleStartResearch = () => {
    setCurrentView('research');
  };

  const handleResearchComplete = () => {
    setCurrentView('precheck');
  };

  const handleStartInterview = () => {
    setCurrentView('interview');
  };

  const handleEndInterview = () => {
    setCurrentView('dashboard');
  };

  if (currentView === 'research') {
    return <AIResearchPhase onComplete={handleResearchComplete} />;
  }

  if (currentView === 'interview') {
    return <LiveInterview onEndInterview={handleEndInterview} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      {currentView === 'dashboard' && <Dashboard onStartNewInterview={handleStartNewInterview} />}
      {currentView === 'setup' && <InterviewSetup onStartResearch={handleStartResearch} />}
      {currentView === 'precheck' && <PreInterviewCheck onStartInterview={handleStartInterview} />}
    </div>
  );
};

export default Index;
