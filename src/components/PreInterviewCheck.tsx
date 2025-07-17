
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Camera, Mic, Play, Settings } from 'lucide-react';

const PreInterviewCheck = ({ onStartInterview }: { onStartInterview: () => void }) => {
  const [micTested, setMicTested] = useState(false);
  const [cameraTested, setCameraTested] = useState(false);

  const handleMicTest = () => {
    // Simulate mic test
    setTimeout(() => setMicTested(true), 1000);
  };

  const handleCameraTest = () => {
    // Simulate camera test
    setTimeout(() => setCameraTested(true), 1000);
  };

  const canStart = micTested && cameraTested;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Almost ready!</h2>
        <p className="text-lg text-gray-600">Let's do a quick technical check before your interview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Interview Summary */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>Your Interview Summary</CardTitle>
            <CardDescription>Here's what we've prepared for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Position</h3>
              <p className="text-gray-600">Senior Software Engineer at Google</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Interview Structure</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Behavioral Questions (15 min)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Technical Assessment (20 min)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">System Design (15 min)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Estimated Duration</h3>
              <p className="text-gray-600">50 minutes total</p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Check */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Technical Check</CardTitle>
            <CardDescription>Test your microphone and camera</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Microphone Test */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Microphone</span>
                </div>
                {micTested && <CheckCircle className="w-5 h-5 text-green-600" />}
              </div>
              <Button 
                variant={micTested ? "outline" : "default"} 
                className="w-full"
                onClick={handleMicTest}
                disabled={micTested}
              >
                {micTested ? "Microphone Working ✓" : "Test Microphone"}
              </Button>
            </div>

            {/* Camera Test */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Camera</span>
                </div>
                {cameraTested && <CheckCircle className="w-5 h-5 text-green-600" />}
              </div>
              <Button 
                variant={cameraTested ? "outline" : "default"} 
                className="w-full"
                onClick={handleCameraTest}
                disabled={cameraTested}
              >
                {cameraTested ? "Camera Working ✓" : "Test Camera"}
              </Button>
            </div>

            {/* Audio/Video Preview */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">Camera preview will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Start Interview */}
      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          disabled={!canStart}
          onClick={onStartInterview}
        >
          <Play className="w-6 h-6 mr-3" />
          Start Interview
        </Button>
        
        {!canStart && (
          <p className="text-sm text-gray-500 mt-4">
            Please complete the technical check before starting
          </p>
        )}
      </div>
    </div>
  );
};

export default PreInterviewCheck;
