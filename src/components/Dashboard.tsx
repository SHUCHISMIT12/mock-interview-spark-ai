import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, TrendingUp, Calendar, Star, Target, Clock } from 'lucide-react';

interface DashboardProps {
  onStartNewInterview: () => void;
}

const Dashboard = ({ onStartNewInterview }: DashboardProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to ace your next interview?
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Practice with AI-powered mock interviews tailored to your resume and target job
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={onStartNewInterview}
        >
          <Play className="w-6 h-6 mr-2" />
          Start New Mock Interview
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sessions */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Recent Sessions</span>
              </CardTitle>
              <CardDescription>Your latest interview practice sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Google • Technical Interview</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">8.5/10</span>
                  </div>
                  <span className="text-xs text-gray-500">32 minutes</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Product Manager</h3>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Meta • Behavioral Interview</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">7.2/10</span>
                  </div>
                  <span className="text-xs text-gray-500">28 minutes</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Sessions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Snapshot */}
        <div className="space-y-6">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Performance Snapshot</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">8.2</div>
                <p className="text-sm text-gray-600">Average Score</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Communication</span>
                  <span className="text-sm font-medium">9.1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Technical Skills</span>
                  <span className="text-sm font-medium">7.8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Problem Solving</span>
                  <span className="text-sm font-medium">8.5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-lg border-0">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <p className="text-xs text-gray-600">Sessions Completed</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">6.2</div>
                  <p className="text-xs text-gray-600">Avg Duration (hrs)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
