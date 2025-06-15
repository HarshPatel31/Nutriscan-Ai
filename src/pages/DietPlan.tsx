
import { useState } from 'react';
import { ArrowLeft, Target, TrendingUp, TrendingDown, Minus, Brain, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const DietPlan = () => {
  const [selectedGoal, setSelectedGoal] = useState('maintenance');
  const [userStats, setUserStats] = useState({
    age: 28,
    height: 175,
    weight: 70,
    activity: 'moderate',
    gender: 'male'
  });

  const goals = [
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'Lose weight gradually and sustainably',
      icon: TrendingDown,
      color: 'from-red-500 to-pink-500',
      dailyCalories: 1800,
      protein: 140,
      carbs: 180,
      fat: 60
    },
    {
      id: 'maintenance',
      title: 'Weight Maintenance',
      description: 'Maintain current weight and build healthy habits',
      icon: Minus,
      color: 'from-blue-500 to-indigo-500',
      dailyCalories: 2200,
      protein: 120,
      carbs: 275,
      fat: 75
    },
    {
      id: 'weight-gain',
      title: 'Weight Gain',
      description: 'Gain weight with focus on muscle building',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      dailyCalories: 2600,
      protein: 160,
      carbs: 325,
      fat: 90
    }
  ];

  const currentGoal = goals.find(g => g.id === selectedGoal);

  const weeklyMealPlan = [
    {
      day: 'Monday',
      meals: {
        breakfast: 'Oatmeal with berries and nuts',
        lunch: 'Grilled chicken with quinoa salad',
        dinner: 'Baked salmon with roasted vegetables',
        snack: 'Greek yogurt with honey'
      }
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: 'Avocado toast with poached egg',
        lunch: 'Turkey and hummus wrap',
        dinner: 'Lean beef stir-fry with brown rice',
        snack: 'Mixed nuts and apple'
      }
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: 'Smoothie bowl with protein powder',
        lunch: 'Tuna salad with whole grain crackers',
        dinner: 'Grilled tofu with sweet potato',
        snack: 'Cottage cheese with berries'
      }
    }
  ];

  const handleGoalChange = (goalId: string) => {
    setSelectedGoal(goalId);
    toast({
      title: "Goal Updated!",
      description: "Your personalized diet plan has been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personalized Diet Plan
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Goal Selection */}
        <Card className="mb-8 bg-gradient-to-r from-white to-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-blue-600" />
              <span>Choose Your Goal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <Card
                  key={goal.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedGoal === goal.id 
                      ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => handleGoalChange(goal.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${goal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <goal.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-600 text-sm">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Plan Overview */}
        {currentGoal && (
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <span>Your Daily Targets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Daily Calories</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {currentGoal.dailyCalories} kcal
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Protein</span>
                        <span className="text-sm font-semibold">{currentGoal.protein}g</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Carbohydrates</span>
                        <span className="text-sm font-semibold">{currentGoal.carbs}g</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Fat</span>
                        <span className="text-sm font-semibold">{currentGoal.fat}g</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span>AI Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Focus on lean proteins like chicken, fish, and legumes for optimal muscle maintenance.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Include complex carbohydrates from whole grains and vegetables for sustained energy.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Stay hydrated with at least 8 glasses of water daily for better metabolism.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Consider meal timing: eat larger meals earlier in the day for better digestion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Weekly Meal Plan */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>Weekly Meal Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {weeklyMealPlan.map((day, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{day.day}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(day.meals).map(([mealType, meal]) => (
                      <div key={mealType} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2 capitalize">
                          {mealType}
                        </h4>
                        <p className="text-sm text-gray-600">{meal}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress Tracking */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Weight Goal</span>
                  <span className="font-semibold">-0.5kg/week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Current Progress</span>
                  <span className="font-semibold text-green-600">-0.3kg</span>
                </div>
                <Progress value={60} className="h-3" />
                <p className="text-sm text-gray-600">
                  You're 60% towards your weekly goal. Keep it up!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Nutrition Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8.5/10</div>
                <p className="text-gray-600 mb-4">Excellent nutrition balance!</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Protein Balance</span>
                    <span className="text-sm font-semibold text-green-600">Great</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Micronutrients</span>
                    <span className="text-sm font-semibold text-green-600">Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Meal Timing</span>
                    <span className="text-sm font-semibold text-yellow-600">Fair</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
