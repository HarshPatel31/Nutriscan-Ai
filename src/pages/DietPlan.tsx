
import { useState, useEffect } from 'react';
import { ArrowLeft, Target, TrendingUp, TrendingDown, Minus, Brain, Calendar, Award, Check, Bell, Scale, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const DietPlan = () => {
  const [selectedGoal, setSelectedGoal] = useState('maintenance');
  const [userWeight, setUserWeight] = useState('70');
  const [completedMeals, setCompletedMeals] = useState<{[key: string]: boolean}>({});
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  const [aiQuery, setAiQuery] = useState('');

  const goals = [
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'Lose weight gradually and sustainably',
      icon: TrendingDown,
      color: 'from-red-500 to-pink-500',
      getCalories: (weight: number) => Math.round(weight * 24),
      getProtein: (weight: number) => Math.round(weight * 2),
      getCarbs: (weight: number) => Math.round(weight * 2.5),
      getFat: (weight: number) => Math.round(weight * 0.8)
    },
    {
      id: 'maintenance',
      title: 'Weight Maintenance',
      description: 'Maintain current weight and build healthy habits',
      icon: Minus,
      color: 'from-blue-500 to-indigo-500',
      getCalories: (weight: number) => Math.round(weight * 30),
      getProtein: (weight: number) => Math.round(weight * 1.6),
      getCarbs: (weight: number) => Math.round(weight * 4),
      getFat: (weight: number) => Math.round(weight * 1)
    },
    {
      id: 'weight-gain',
      title: 'Weight Gain',
      description: 'Gain weight with focus on muscle building',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      getCalories: (weight: number) => Math.round(weight * 35),
      getProtein: (weight: number) => Math.round(weight * 2.2),
      getCarbs: (weight: number) => Math.round(weight * 5),
      getFat: (weight: number) => Math.round(weight * 1.2)
    }
  ];

  const currentGoal = goals.find(g => g.id === selectedGoal);
  const weight = parseFloat(userWeight) || 70;

  const weeklyMealPlan = [
    {
      day: 'Monday',
      meals: {
        breakfast: { name: 'Oatmeal with berries and nuts', time: '08:00', id: 'mon-breakfast', image: '🥣' },
        lunch: { name: 'Grilled chicken with quinoa salad', time: '12:30', id: 'mon-lunch', image: '🍗' },
        dinner: { name: 'Baked salmon with roasted vegetables', time: '19:00', id: 'mon-dinner', image: '🐟' },
        snack: { name: 'Greek yogurt with honey', time: '15:30', id: 'mon-snack', image: '🥛' }
      }
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: { name: 'Avocado toast with poached egg', time: '08:00', id: 'tue-breakfast', image: '🥑' },
        lunch: { name: 'Turkey and hummus wrap', time: '12:30', id: 'tue-lunch', image: '🌯' },
        dinner: { name: 'Lean beef stir-fry with brown rice', time: '19:00', id: 'tue-dinner', image: '🥩' },
        snack: { name: 'Mixed nuts and apple', time: '15:30', id: 'tue-snack', image: '🍎' }
      }
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: { name: 'Smoothie bowl with protein powder', time: '08:00', id: 'wed-breakfast', image: '🥤' },
        lunch: { name: 'Tuna salad with whole grain crackers', time: '12:30', id: 'wed-lunch', image: '🐟' },
        dinner: { name: 'Grilled tofu with sweet potato', time: '19:00', id: 'wed-dinner', image: '🍠' },
        snack: { name: 'Cottage cheese with berries', time: '15:30', id: 'wed-snack', image: '🫐' }
      }
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: { name: 'Whole grain pancakes with fruits', time: '08:00', id: 'thu-breakfast', image: '🥞' },
        lunch: { name: 'Chicken Caesar salad', time: '12:30', id: 'thu-lunch', image: '🥗' },
        dinner: { name: 'Grilled fish with asparagus', time: '19:00', id: 'thu-dinner', image: '🐠' },
        snack: { name: 'Protein bar and banana', time: '15:30', id: 'thu-snack', image: '🍌' }
      }
    },
    {
      day: 'Friday',
      meals: {
        breakfast: { name: 'Chia seed pudding with mango', time: '08:00', id: 'fri-breakfast', image: '🥭' },
        lunch: { name: 'Quinoa Buddha bowl', time: '12:30', id: 'fri-lunch', image: '🍲' },
        dinner: { name: 'Lemon herb chicken with vegetables', time: '19:00', id: 'fri-dinner', image: '🍋' },
        snack: { name: 'Hummus with carrot sticks', time: '15:30', id: 'fri-snack', image: '🥕' }
      }
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: { name: 'Veggie omelet with whole wheat toast', time: '09:00', id: 'sat-breakfast', image: '🍳' },
        lunch: { name: 'Grilled veggie and cheese sandwich', time: '13:00', id: 'sat-lunch', image: '🥪' },
        dinner: { name: 'Beef and vegetable stew', time: '19:30', id: 'sat-dinner', image: '🍲' },
        snack: { name: 'Trail mix with dried fruits', time: '16:00', id: 'sat-snack', image: '🥜' }
      }
    },
    {
      day: 'Sunday',
      meals: {
        breakfast: { name: 'French toast with fresh berries', time: '09:30', id: 'sun-breakfast', image: '🍓' },
        lunch: { name: 'Mediterranean quinoa salad', time: '13:30', id: 'sun-lunch', image: '🥗' },
        dinner: { name: 'Grilled shrimp with rice pilaf', time: '19:00', id: 'sun-dinner', image: '🍤' },
        snack: { name: 'Dark chocolate and almonds', time: '16:30', id: 'sun-snack', image: '🍫' }
      }
    }
  ];

  const handleGoalChange = (goalId: string) => {
    setSelectedGoal(goalId);
    toast({
      title: "Goal Updated!",
      description: "Your personalized diet plan has been updated based on your weight.",
    });
  };

  const handleMealComplete = (mealId: string, isCompleted: boolean) => {
    setCompletedMeals(prev => ({
      ...prev,
      [mealId]: isCompleted
    }));

    if (isCompleted) {
      toast({
        title: "Meal Completed!",
        description: "Great job staying on track with your diet plan.",
      });
    }
  };

  const handleAiSearch = async () => {
    if (!aiQuery.trim()) return;
    
    toast({
      title: "AI Search",
      description: `Searching for: "${aiQuery}". This feature requires OpenAI API integration.`,
    });
  };

  // Check for incomplete meals and trigger alarm
  useEffect(() => {
    if (!alarmEnabled) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + minute;

    weeklyMealPlan.forEach(dayPlan => {
      Object.entries(dayPlan.meals).forEach(([mealType, meal]) => {
        const [hour, minute] = meal.time.split(':').map(Number);
        const mealTime = hour * 60 + minute;
        
        // Check if meal time has passed and meal is not completed
        if (currentTime > mealTime + 30 && !completedMeals[meal.id]) {
          toast({
            title: "Meal Reminder!",
            description: `You haven't completed your ${mealType}: ${meal.name}`,
            variant: "destructive",
          });
        }
      });
    });
  }, [completedMeals, alarmEnabled]);

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
                Personalized Diet Plan
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setAlarmEnabled(!alarmEnabled)}
                variant="outline"
                size="sm"
                className={`${alarmEnabled ? 'border-yellow-500 text-yellow-400' : 'border-gray-500 text-gray-400'}`}
              >
                <Bell className="w-4 h-4 mr-2" />
                {alarmEnabled ? 'Alarms On' : 'Alarms Off'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* AI Search Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Nutrition Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                type="text"
                placeholder="Ask anything about nutrition, recipes, or diet plans..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white"
                onKeyPress={(e) => e.key === 'Enter' && handleAiSearch()}
              />
              <Button
                onClick={handleAiSearch}
                className="bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Powered by OpenAI - Get personalized nutrition advice and meal suggestions
            </p>
          </CardContent>
        </Card>

        {/* Weight Input */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Enter Your Weight for Personalized Plan
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
                <p className="text-xs text-green-400">Plan Updated</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goal Selection */}
        <Card className="mb-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-gray-600/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Target className="w-6 h-6 text-purple-400" />
              <span>Choose Your Goal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <Card
                  key={goal.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/30 ${
                    selectedGoal === goal.id 
                      ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/25 scale-105' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => handleGoalChange(goal.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${goal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <goal.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-gray-300 text-sm">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Plan Overview */}
        {currentGoal && (
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span>Your Daily Targets ({weight}kg)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Calories</span>
                    <span className="text-2xl font-bold text-purple-400">
                      {currentGoal.getCalories(weight)} kcal
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Protein</span>
                        <span className="text-sm font-semibold text-white">{currentGoal.getProtein(weight)}g</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Carbohydrates</span>
                        <span className="text-sm font-semibold text-white">{currentGoal.getCarbs(weight)}g</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Fat</span>
                        <span className="text-sm font-semibold text-white">{currentGoal.getFat(weight)}g</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>Weight-Based AI Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">
                      For {weight}kg body weight: {selectedGoal === 'weight-loss' ? 'Create a 500-calorie deficit daily' : selectedGoal === 'weight-gain' ? 'Add 500+ calories with protein focus' : 'Maintain current intake with balanced macros'}.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">
                      Protein target: {currentGoal.getProtein(weight)}g daily for optimal {selectedGoal === 'weight-gain' ? 'muscle building' : 'muscle preservation'}.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">
                      Meal timing: Spread {currentGoal.getCalories(weight)} calories across 4-5 meals for better metabolism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Weekly Meal Plan with Checkmarks */}
        <Card className="mb-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span>Weekly Meal Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {weeklyMealPlan.map((day, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-bold text-white mb-4">{day.day}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(day.meals).map(([mealType, meal]) => (
                      <div key={mealType} className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-700/30 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl">{meal.image}</span>
                              <h4 className="font-semibold text-sm text-gray-300 capitalize">
                                {mealType}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-400 mb-1">{meal.time}</p>
                            <p className="text-sm text-gray-300">{meal.name}</p>
                          </div>
                          <Checkbox
                            checked={completedMeals[meal.id] || false}
                            onCheckedChange={(checked) => handleMealComplete(meal.id, checked as boolean)}
                            className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 border-gray-500"
                          />
                        </div>
                        {completedMeals[meal.id] && (
                          <div className="flex items-center text-green-400 text-xs mt-2">
                            <Check className="w-3 h-3 mr-1" />
                            Completed
                          </div>
                        )}
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
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
            <CardHeader>
              <CardTitle className="text-white">Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Weight Goal</span>
                  <span className="font-semibold text-white">
                    {selectedGoal === 'weight-loss' ? '-0.5kg/week' : selectedGoal === 'weight-gain' ? '+0.5kg/week' : 'Maintain'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Current Progress</span>
                  <span className="font-semibold text-green-400">On Track</span>
                </div>
                <Progress value={75} className="h-3" />
                <p className="text-sm text-gray-400">
                  You're 75% towards your weekly goal. Keep it up!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
            <CardHeader>
              <CardTitle className="text-white">Meal Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {Math.round((Object.values(completedMeals).filter(Boolean).length / Math.max(Object.keys(completedMeals).length, 1)) * 100) || 0}%
                </div>
                <p className="text-gray-400 mb-4">Meals completed this week</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Consistency</span>
                    <span className="text-sm font-semibold text-green-400">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Timing</span>
                    <span className="text-sm font-semibold text-yellow-400">Good</span>
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
