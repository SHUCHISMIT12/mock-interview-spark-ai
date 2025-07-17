
import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader } from 'lucide-react';

const AIResearchPhase = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const researchSteps = [
    { id: 1, text: "Analyzing your resume...", completed: false },
    { id: 2, text: "Researching the company...", completed: false },
    { id: 3, text: "Identifying key technical skills...", completed: false },
    { id: 4, text: "Building your personalized interview plan...", completed: false },
    { id: 5, text: "Preparing behavioral questions...", completed: false },
    { id: 6, text: "Finalizing interview structure...", completed: false },
  ];

  const [steps, setSteps] = useState(researchSteps);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          setSteps(currentSteps => 
            currentSteps.map((step, index) => 
              index <= prev ? { ...step, completed: true } : step
            )
          );
          return prev + 1;
        } else {
          setSteps(currentSteps => 
            currentSteps.map(step => ({ ...step, completed: true }))
          );
          setTimeout(() => onComplete(), 1000);
          clearInterval(timer);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader className="w-10 h-10 text-white animate-spin" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI is preparing your interview
          </h2>
          <p className="text-lg text-gray-600">
            This isn't just a simple Q&A bot. We're doing deep, personalized research to create your perfect interview experience.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Research Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex items-center space-x-3 transition-all duration-300 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  step.completed 
                    ? 'bg-green-100' 
                    : index === currentStep 
                      ? 'bg-blue-100' 
                      : 'bg-gray-100'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : index === currentStep ? (
                    <Loader className="w-4 h-4 text-blue-600 animate-spin" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  )}
                </div>
                <span className={`text-lg ${
                  step.completed 
                    ? 'text-green-700 font-medium' 
                    : index === currentStep 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600'
                }`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            This usually takes 30-45 seconds. Please don't close this window.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIResearchPhase;
