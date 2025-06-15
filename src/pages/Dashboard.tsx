
import { useState } from 'react';
import { ArrowLeft, Calendar, TrendingUp, Apple, Droplets, Zap, Scale, Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import DailyChart from '@/components/DailyChart';
import WeeklyProgress from '@/components/WeeklyProgress';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [userWeight, setUserWeight] = useState('70');
  
  const weight = parseFloat(userWeight) || 70;
  
  // Weight-based calculations
  const dailyCalories = Math.round(weight * 30);
  const dailyProtein = Math.round(weight * 1.6);
  const dailyCarbs = Math.round(weight * 4);
  const dailyFat = Math.round(weight * 1);

  const todaysMeals = [
    {
      name: 'Oatmeal with Berries',
      time: '8:00 AM',
      calories: 320,
      image: '🥣',
      consumed: true
    },
    {
      name: 'Grilled Chicken Salad',
      time: '12:30 PM',
      calories: 450,
      image: '🥗',
      consumed: true
    },
    {
      name: 'Greek Yogurt',
      time: '3:30 PM',
      calories: 150,
      image: '🥛',
      consumed: false
    },
    {
      name: 'Salmon with Vegetables',
      time: '7:00 PM',
      calories: 580,
      image: '🐟',
      consumed: false
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "Image Uploaded!",
        description: "Analyzing your food image...",
      });
    }
  };

  const handleCameraCapture = () => {
    toast({
      title: "Camera Activated!",
      description: "Take a photo of your food to log it.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-800/30">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nutrition Dashboard
              </h1>
            </div>
            <div className="text-sm text-gray-400">
              <Calendar className="w-4 h-4 inline mr-1" />
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Weight Input Section */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Enter Your Weight for Personalized Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Label htmlFor="weight" className="text-gray-300">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white mt-1"
                />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">BMI: {((weight / (1.75 * 1.75)).toFixed(1))}</p>
                <p className="text-xs text-green-400">Targets Updated</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl text-white">{dailyCalories}</div>
              <div className="text-sm text-gray-400">Daily Calories</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl text-white">{dailyProtein}g</div>
              <div className="text-sm text-gray-400">Protein Goal</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl text-white">{dailyCarbs}g</div>
              <div className="text-sm text-gray-400">Carbs Goal</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl text-white">{dailyFat}g</div>
              <div className="text-sm text-gray-400">Fat Goal</div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Progress */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
              <CardHeader>
                <CardTitle className="text-white">Daily Progress ({weight}kg based)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Calories</span>
                    <span className="text-white font-semibold">1250 / {dailyCalories}</span>
                  </div>
                  <Progress value={(1250 / dailyCalories) * 100} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Protein</span>
                    <span className="text-white font-semibold">45g / {dailyProtein}g</span>
                  </div>
                  <Progress value={(45 / dailyProtein) * 100} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Carbohydrates</span>
                    <span className="text-white font-semibold">120g / {dailyCarbs}g</span>
                  </div>
                  <Progress value={(120 / dailyCarbs) * 100} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Fat</span>
                    <span className="text-white font-semibold">35g / {dailyFat}g</span>
                  </div>
                  <Progress value={(35 / dailyFat) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border-teal-500/30">
            <CardHeader>
              <CardTitle className="text-white">Add Food</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button 
                  onClick={handleCameraCapture}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Scan Food
                </Button>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="food-upload-dashboard"
                />
                <label htmlFor="food-upload-dashboard">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </label>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Upload food images for instant nutrition analysis
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <DailyChart />
          <WeeklyProgress />
        </div>

        {/* Today's Meals */}
        <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
          <CardHeader>
            <CardTitle className="text-white">Today's Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {todaysMeals.map((meal, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    meal.consumed
                      ? 'bg-green-900/20 border-green-500/30'
                      : 'bg-gray-800/20 border-gray-600/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{meal.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{meal.name}</h3>
                      <p className="text-sm text-gray-400">{meal.time}</p>
                      <p className="text-sm text-purple-400">{meal.calories} calories</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      meal.consumed ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
