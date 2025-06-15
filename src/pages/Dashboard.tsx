
import { useState } from 'react';
import { Calendar, TrendingUp, Target, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import DailyChart from '@/components/DailyChart';
import WeeklyProgress from '@/components/WeeklyProgress';
import MealEntry from '@/components/MealEntry';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showMealEntry, setShowMealEntry] = useState(false);

  // Mock data
  const dailyGoals = {
    calories: { current: 1850, target: 2200 },
    protein: { current: 85, target: 120 },
    carbs: { current: 220, target: 275 },
    fat: { current: 65, target: 75 }
  };

  const todaysMeals = [
    {
      name: "Oatmeal with Berries",
      time: "08:30 AM",
      calories: 320,
      type: "breakfast"
    },
    {
      name: "Grilled Chicken Salad",
      time: "12:45 PM",
      calories: 450,
      type: "lunch"
    },
    {
      name: "Greek Yogurt",
      time: "03:30 PM",
      calories: 150,
      type: "snack"
    },
    {
      name: "Salmon with Quinoa",
      time: "07:15 PM",
      calories: 580,
      type: "dinner"
    }
  ];

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
                Daily Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        {/* Daily Goals Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {Object.entries(dailyGoals).map(([key, goal]) => (
            <Card key={key} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 capitalize">
                  {key}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {goal.current}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {goal.target} {key === 'calories' ? 'kcal' : 'g'}
                    </span>
                  </div>
                  <Progress 
                    value={(goal.current / goal.target) * 100} 
                    className="h-2"
                  />
                  <div className="text-xs text-gray-500">
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

        {/* Today's Meals */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Today's Meals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysMeals.map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                      meal.type === 'breakfast' ? 'bg-yellow-500' :
                      meal.type === 'lunch' ? 'bg-orange-500' :
                      meal.type === 'dinner' ? 'bg-red-500' : 'bg-green-500'
                    }`}>
                      {meal.type.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{meal.name}</h3>
                      <p className="text-sm text-gray-600">{meal.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{meal.calories} kcal</div>
                    <div className="text-sm text-gray-600 capitalize">{meal.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Insights */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Daily Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Achievements Today</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Met protein goal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Stayed within calorie range</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Low fiber intake - add more vegetables</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">Add 150 more calories for optimal energy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">Include healthy fats like avocado or nuts</span>
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
