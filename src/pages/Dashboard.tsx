
import { useState } from 'react';
import { Calendar, TrendingUp, Target, Plus, ArrowLeft, Scale, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import DailyChart from '@/components/DailyChart';
import WeeklyProgress from '@/components/WeeklyProgress';
import MealEntry from '@/components/MealEntry';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showMealEntry, setShowMealEntry] = useState(false);
  const [userWeight, setUserWeight] = useState('70');

  // Mock data - adjusted based on weight
  const calculateGoals = (weight: number) => ({
    calories: { current: 1850, target: Math.round(weight * 30) },
    protein: { current: 85, target: Math.round(weight * 1.6) },
    carbs: { current: 220, target: Math.round(weight * 4) },
    fat: { current: 65, target: Math.round(weight * 1) }
  });

  const dailyGoals = calculateGoals(parseFloat(userWeight) || 70);

  const todaysMeals = [
    {
      name: "Oatmeal with Berries",
      time: "08:30 AM",
      calories: 320,
      type: "breakfast",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      name: "Grilled Chicken Salad",
      time: "12:45 PM",
      calories: 450,
      type: "lunch",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      name: "Greek Yogurt",
      time: "03:30 PM",
      calories: 150,
      type: "snack",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      name: "Salmon with Quinoa",
      time: "07:15 PM",
      calories: 580,
      type: "dinner",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    }
  ];

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
                Daily Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button 
                onClick={() => setShowMealEntry(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Meal
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Weight Input */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Your Weight
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
                <p className="text-sm text-gray-300">BMI: 22.9</p>
                <p className="text-xs text-green-400">Healthy Range</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Goals Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {Object.entries(dailyGoals).map(([key, goal]) => (
            <Card key={key} className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-300 capitalize">
                  {key}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">
                      {goal.current}
                    </span>
                    <span className="text-sm text-gray-400">
                      / {goal.target} {key === 'calories' ? 'kcal' : 'g'}
                    </span>
                  </div>
                  <Progress 
                    value={(goal.current / goal.target) * 100} 
                    className="h-2"
                  />
                  <div className="text-xs text-gray-400">
                    {Math.round(((goal.current / goal.target) * 100))}% of daily goal
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <DailyChart />
          <WeeklyProgress />
        </div>

        {/* Today's Meals with Images */}
        <Card className="mb-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Calendar className="w-5 h-5" />
              <span>Today's Meals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {todaysMeals.map((meal, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="flex-shrink-0">
                    <img 
                      src={meal.image} 
                      alt={meal.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${
                        meal.type === 'breakfast' ? 'bg-yellow-500' :
                        meal.type === 'lunch' ? 'bg-orange-500' :
                        meal.type === 'dinner' ? 'bg-red-500' : 'bg-green-500'
                      }`}>
                      </div>
                      <span className="text-xs text-gray-400 uppercase">{meal.type}</span>
                    </div>
                    <h3 className="font-semibold text-white">{meal.name}</h3>
                    <p className="text-sm text-gray-400">{meal.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">{meal.calories} kcal</div>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:bg-purple-800/30 p-1 h-auto">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Insights */}
        <Card className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border-teal-500/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <TrendingUp className="w-5 h-5 text-teal-400" />
              <span>Daily Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Achievements Today</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Met protein goal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Stayed within calorie range</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Low fiber intake - add more vegetables</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-300">Add 150 more calories for optimal energy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-300">Include healthy fats like avocado or nuts</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meal Entry Modal */}
      {showMealEntry && (
        <MealEntry
          isOpen={showMealEntry}
          onClose={() => setShowMealEntry(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
