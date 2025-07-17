
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Square, Volume2 } from 'lucide-react';

const LiveInterview = ({ onEndInterview }: { onEndInterview: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isAISpeaking, setIsAISpeaking] = useState(true);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  
  useEffect(() => {
    // Simulate AI speaking cycle
    const timer = setTimeout(() => {
      setIsAISpeaking(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleEndInterview = () => {
    setShowEndConfirm(true);
  };

  const confirmEndInterview = () => {
    onEndInterview();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white font-medium">Interview in Progress</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300 text-sm">Question {currentQuestion} of 8</span>
          <Button variant="outline" size="sm" className="text-gray-300 border-gray-600">
            <Pause className="w-4 h-4 mr-2" />
            Pause
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={handleEndInterview}
          >
            <Square className="w-4 h-4 mr-2" />
            End Interview
          </Button>
        </div>
      </div>

      {/* Main Interview Area */}
      <div className="flex-1 flex">
        {/* AI Avatar Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 ${
              isAISpeaking 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700'
            }`}>
              <div className={`w-24 h-24 rounded-full bg-white/20 flex items-center justify-center ${
                isAISpeaking ? 'animate-pulse' : ''
              }`}>
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                {isAISpeaking ? "I'm speaking..." : "Your turn to answer"}
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "Tell me about a time when you had to solve a challenging technical problem. 
                  Walk me through your thought process and the steps you took to resolve it."
                </p>
              </div>
            </div>

            {/* Speaking Indicator */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Volume2 className={`w-5 h-5 ${isAISpeaking ? 'text-blue-400' : 'text-gray-500'}`} />
              <div className="flex space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1 h-4 rounded-full transition-all duration-300 ${
                      isAISpeaking 
                        ? 'bg-blue-400 animate-pulse' 
                        : 'bg-gray-600'
                    }`}
                    style={{
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Video Section */}
        <div className="w-80 p-6">
          <div className="bg-gray-800 rounded-lg p-4 h-full">
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center mb-4">
              <span className="text-gray-400">Your video feed</span>
            </div>
            
            {/* Audio Level Indicator */}
            <div className="space-y-2">
              <span className="text-gray-300 text-sm">Your audio level:</span>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all duration-150" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Interview Confirmation Modal */}
      {showEndConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">End Interview?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to end the interview session? Your progress will be saved.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowEndConfirm(false)}
              >
                Continue Interview
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1"
                onClick={confirmEndInterview}
              >
                End Interview
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveInterview;
