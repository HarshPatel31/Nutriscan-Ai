import { useState } from 'react';
import { Camera, Upload, TrendingUp, Calendar, Target, Brain, Dumbbell, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import FoodAnalysisModal from '@/components/FoodAnalysisModal';
import NutritionCard from '@/components/NutritionCard';
import QuickStats from '@/components/QuickStats';
import ExerciseModal from '@/components/ExerciseModal';
import AIChatModal from '@/components/AIChatModal';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showExercise, setShowExercise] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      simulateAnalysis(file);
    }
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      toast({
        title: "Camera Ready!",
        description: "Take a photo of your food to analyze it.",
      });
      setTimeout(() => {
        simulateAnalysis(null);
      }, 1000);
    } catch (error) {
      toast({
        title: "Camera Access Denied",
        description: "Please allow camera access or upload an image instead.",
        variant: "destructive",
      });
    }
  };

  const simulateAnalysis = (file: File | null) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const mockResult = {
        foodName: "Grilled Chicken Salad",
        confidence: 94,
        nutrition: {
          calories: 320,
          protein: 28,
          carbs: 12,
          fat: 18,
          fiber: 4,
          sugar: 8,
          sodium: 480,
          vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin K'],
          minerals: ['Iron', 'Calcium', 'Potassium']
        },
        healthScore: 85,
        recommendations: [
          "Great source of lean protein",
          "Low in calories, perfect for weight loss",
          "Rich in essential vitamins and minerals"
        ]
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      setShowAnalysis(true);
      toast({
        title: "Analysis Complete!",
        description: "Your food has been analyzed successfully.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/60 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NutriScan AI
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowAIChat(true)}
                variant="ghost" 
                size="sm" 
                className="text-purple-300 hover:bg-purple-800/30"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Ask AI
              </Button>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-800/30">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/diet-plan">
                <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-800/30">
                  <Target className="w-4 h-4 mr-2" />
                  Diet Plan
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Scan Your Food,
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Know Your Nutrition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
            Upload or scan any food image and get instant detailed nutritional analysis powered by AI
          </p>
          
          {/* Upload Section */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-2 border-dashed border-purple-500/50 bg-gradient-to-r from-purple-900/30 to-pink-900/30 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <CardContent className="p-8">
                {!isAnalyzing ? (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Scan Your Food
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Use camera or upload image to analyze nutrition
                      </p>
                      <div className="flex gap-3 justify-center">
                        <Button 
                          onClick={handleCameraCapture}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Camera
                        </Button>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="food-upload"
                        />
                        <label htmlFor="food-upload">
                          <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 cursor-pointer">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload
                          </Button>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Analyzing Food...
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Our AI is identifying your food and calculating nutrition
                      </p>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Exercise & Yoga Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white text-center">Exercise & Fitness</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Get personalized workout plans for gym and home exercises
                </p>
                <Button 
                  onClick={() => setShowExercise(true)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full"
                >
                  Start Workout
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white text-center">Yoga & Meditation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Find inner peace with guided yoga sessions and meditation
                </p>
                <Button 
                  onClick={() => setShowExercise(true)}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 w-full"
                >
                  Start Yoga
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Smart Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                AI-powered food recognition with 95%+ accuracy. Get detailed nutritional breakdown instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Daily Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Track your daily nutrition intake with beautiful charts and progress visualization.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Personal Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get personalized diet recommendations for weight loss, gain, or maintenance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Analysis Modal */}
      {showAnalysis && analysisResult && (
        <FoodAnalysisModal
          isOpen={showAnalysis}
          onClose={() => setShowAnalysis(false)}
          result={analysisResult}
        />
      )}

      {/* Exercise Modal */}
      {showExercise && (
        <ExerciseModal
          isOpen={showExercise}
          onClose={() => setShowExercise(false)}
        />
      )}

      {/* AI Chat Modal */}
      {showAIChat && (
        <AIChatModal
          isOpen={showAIChat}
          onClose={() => setShowAIChat(false)}
        />
      )}
    </div>
  );
};

export default Index;
