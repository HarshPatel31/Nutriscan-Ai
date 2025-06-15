
import { useState } from 'react';
import { Camera, Upload, TrendingUp, Calendar, Target, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import FoodAnalysisModal from '@/components/FoodAnalysisModal';
import NutritionCard from '@/components/NutritionCard';
import QuickStats from '@/components/QuickStats';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      simulateAnalysis(file);
    }
  };

  const simulateAnalysis = (file: File) => {
    setIsAnalyzing(true);
    // Simulate AI analysis
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NutriScan AI
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="hover:bg-blue-100">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/diet-plan">
                <Button variant="ghost" size="sm" className="hover:bg-blue-100">
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
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Scan Your Food,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Know Your Nutrition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in">
            Upload or scan any food image and get instant detailed nutritional analysis powered by AI
          </p>
          
          {/* Upload Section */}
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-dashed border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                {!isAnalyzing ? (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Upload Food Image
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Drag & drop or click to select your food image
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="food-upload"
                      />
                      <label htmlFor="food-upload">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Image
                        </Button>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Analyzing Food...
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Our AI is identifying your food and calculating nutrition
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Smart Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AI-powered food recognition with 95%+ accuracy. Get detailed nutritional breakdown instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Daily Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Track your daily nutrition intake with beautiful charts and progress visualization.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-orange-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Personal Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
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
    </div>
  );
};

export default Index;
