
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dumbbell, Heart, Target, TrendingUp, TrendingDown, Minus, Home, Search } from 'lucide-react';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExerciseModal = ({ isOpen, onClose }: ExerciseModalProps) => {
  const [activeTab, setActiveTab] = useState('gym');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const gymExercises = [
    { name: 'Bench Press', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'Deadlift', sets: '3 sets × 5-8 reps', difficulty: 'Advanced' },
    { name: 'Squats', sets: '3 sets × 8-12 reps', difficulty: 'Beginner' },
    { name: 'Pull-ups', sets: '3 sets × 5-10 reps', difficulty: 'Intermediate' },
    { name: 'Shoulder Press', sets: '3 sets × 8-12 reps', difficulty: 'Beginner' },
    { name: 'Bicep Curls', sets: '3 sets × 10-15 reps', difficulty: 'Beginner' },
    { name: 'Tricep Dips', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'Barbell Rows', sets: '3 sets × 8-10 reps', difficulty: 'Intermediate' },
    { name: 'Leg Press', sets: '3 sets × 12-15 reps', difficulty: 'Beginner' },
    { name: 'Lat Pulldowns', sets: '3 sets × 10-12 reps', difficulty: 'Beginner' },
    { name: 'Incline Bench Press', sets: '3 sets × 8-10 reps', difficulty: 'Intermediate' },
    { name: 'Romanian Deadlifts', sets: '3 sets × 10-12 reps', difficulty: 'Intermediate' },
    { name: 'Leg Curls', sets: '3 sets × 12-15 reps', difficulty: 'Beginner' },
    { name: 'Calf Raises', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Face Pulls', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Cable Crossovers', sets: '3 sets × 12-15 reps', difficulty: 'Intermediate' },
    { name: 'T-Bar Rows', sets: '3 sets × 8-10 reps', difficulty: 'Intermediate' },
    { name: 'Hammer Curls', sets: '3 sets × 12-15 reps', difficulty: 'Beginner' },
    { name: 'Close Grip Bench Press', sets: '3 sets × 8-10 reps', difficulty: 'Intermediate' },
    { name: 'Bulgarian Split Squats', sets: '3 sets × 10-12 each leg', difficulty: 'Intermediate' },
    { name: 'Hip Thrusts', sets: '3 sets × 12-15 reps', difficulty: 'Beginner' },
    { name: 'Machine Flyes', sets: '3 sets × 12-15 reps', difficulty: 'Beginner' },
    { name: 'Preacher Curls', sets: '3 sets × 10-12 reps', difficulty: 'Intermediate' },
    { name: 'Leg Extensions', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Seated Cable Rows', sets: '3 sets × 10-12 reps', difficulty: 'Beginner' },
    { name: 'Decline Bench Press', sets: '3 sets × 8-10 reps', difficulty: 'Intermediate' },
    { name: 'Stiff Leg Deadlifts', sets: '3 sets × 10-12 reps', difficulty: 'Intermediate' },
    { name: 'Arnold Press', sets: '3 sets × 10-12 reps', difficulty: 'Advanced' },
    { name: 'Cable Lateral Raises', sets: '3 sets × 12-15 reps', difficulty: 'Intermediate' },
    { name: 'Reverse Flyes', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Sumo Deadlifts', sets: '3 sets × 6-8 reps', difficulty: 'Advanced' },
    { name: 'Front Squats', sets: '3 sets × 8-10 reps', difficulty: 'Advanced' },
    { name: 'Chest Dips', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'One Arm Rows', sets: '3 sets × 10-12 each arm', difficulty: 'Intermediate' },
    { name: 'Walking Lunges', sets: '3 sets × 12-15 each leg', difficulty: 'Beginner' }
  ];

  const yogaExercises = [
    { name: 'Sun Salutation A', duration: '10 minutes', difficulty: 'Beginner' },
    { name: 'Sun Salutation B', duration: '15 minutes', difficulty: 'Intermediate' },
    { name: 'Warrior I Pose', duration: '2 minutes each side', difficulty: 'Beginner' },
    { name: 'Warrior II Pose', duration: '2 minutes each side', difficulty: 'Beginner' },
    { name: 'Warrior III Pose', duration: '1 minute each side', difficulty: 'Advanced' },
    { name: 'Downward Dog', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Upward Dog', duration: '2 minutes', difficulty: 'Intermediate' },
    { name: 'Tree Pose', duration: '2 minutes each side', difficulty: 'Intermediate' },
    { name: 'Eagle Pose', duration: '1 minute each side', difficulty: 'Intermediate' },
    { name: 'Triangle Pose', duration: '3 minutes each side', difficulty: 'Beginner' },
    { name: 'Extended Side Angle', duration: '2 minutes each side', difficulty: 'Intermediate' },
    { name: 'Seated Forward Fold', duration: '5 minutes', difficulty: 'Beginner' },
    { name: 'Bound Angle Pose', duration: '5 minutes', difficulty: 'Beginner' },
    { name: 'Pigeon Pose', duration: '3 minutes each side', difficulty: 'Intermediate' },
    { name: 'Camel Pose', duration: '2 minutes', difficulty: 'Advanced' },
    { name: 'Bridge Pose', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Wheel Pose', duration: '1 minute', difficulty: 'Advanced' },
    { name: 'Cobra Pose', duration: '2 minutes', difficulty: 'Beginner' },
    { name: 'Child\'s Pose', duration: '5 minutes', difficulty: 'Beginner' },
    { name: 'Lotus Position', duration: '10 minutes', difficulty: 'Advanced' },
    { name: 'Half Lotus', duration: '8 minutes', difficulty: 'Intermediate' },
    { name: 'Crow Pose', duration: '1 minute', difficulty: 'Advanced' },
    { name: 'Side Crow', duration: '30 seconds each side', difficulty: 'Advanced' },
    { name: 'Headstand', duration: '3 minutes', difficulty: 'Advanced' },
    { name: 'Shoulder Stand', duration: '5 minutes', difficulty: 'Intermediate' },
    { name: 'Fish Pose', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Plow Pose', duration: '3 minutes', difficulty: 'Intermediate' },
    { name: 'Sphinx Pose', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Locust Pose', duration: '2 minutes', difficulty: 'Intermediate' },
    { name: 'Bow Pose', duration: '2 minutes', difficulty: 'Intermediate' },
    { name: 'Twisted Triangle', duration: '2 minutes each side', difficulty: 'Intermediate' },
    { name: 'Side Plank', duration: '1 minute each side', difficulty: 'Intermediate' },
    { name: 'Four-Limbed Staff', duration: '30 seconds', difficulty: 'Advanced' },
    { name: 'Wide-Legged Forward Fold', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Goddess Pose', duration: '2 minutes', difficulty: 'Beginner' }
  ];

  const homeExercises = [
    { name: 'Push-ups', sets: '3 sets × 10-15 reps', difficulty: 'Beginner' },
    { name: 'Burpees', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'Mountain Climbers', sets: '3 sets × 20-30 reps', difficulty: 'Beginner' },
    { name: 'Jumping Jacks', sets: '3 sets × 30-45 seconds', difficulty: 'Beginner' },
    { name: 'Plank', sets: '3 sets × 30-60 seconds', difficulty: 'Beginner' },
    { name: 'Side Plank', sets: '2 sets × 20-30 seconds each', difficulty: 'Intermediate' },
    { name: 'Squats', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Lunges', sets: '3 sets × 10-15 each leg', difficulty: 'Beginner' },
    { name: 'High Knees', sets: '3 sets × 30 seconds', difficulty: 'Beginner' },
    { name: 'Butt Kicks', sets: '3 sets × 30 seconds', difficulty: 'Beginner' },
    { name: 'Jump Squats', sets: '3 sets × 10-15 reps', difficulty: 'Intermediate' },
    { name: 'Wall Sit', sets: '3 sets × 30-45 seconds', difficulty: 'Beginner' },
    { name: 'Tricep Dips (Chair)', sets: '3 sets × 10-15 reps', difficulty: 'Beginner' },
    { name: 'Pike Push-ups', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'Single Leg Glute Bridge', sets: '3 sets × 10-12 each', difficulty: 'Intermediate' },
    { name: 'Russian Twists', sets: '3 sets × 20-30 reps', difficulty: 'Beginner' },
    { name: 'Bicycle Crunches', sets: '3 sets × 20-30 reps', difficulty: 'Beginner' },
    { name: 'Dead Bug', sets: '3 sets × 10-15 each side', difficulty: 'Beginner' },
    { name: 'Bear Crawl', sets: '3 sets × 30 seconds', difficulty: 'Intermediate' },
    { name: 'Crab Walk', sets: '3 sets × 30 seconds', difficulty: 'Intermediate' },
    { name: 'Superman', sets: '3 sets × 15-20 reps', difficulty: 'Beginner' },
    { name: 'Reverse Lunge', sets: '3 sets × 12-15 each leg', difficulty: 'Beginner' },
    { name: 'Step-ups (Chair)', sets: '3 sets × 12-15 each leg', difficulty: 'Beginner' },
    { name: 'Diamond Push-ups', sets: '3 sets × 8-12 reps', difficulty: 'Advanced' },
    { name: 'Hindu Push-ups', sets: '3 sets × 8-10 reps', difficulty: 'Advanced' },
    { name: 'Pistol Squats', sets: '3 sets × 5-8 each leg', difficulty: 'Advanced' },
    { name: 'Single Arm Push-ups', sets: '3 sets × 3-5 each arm', difficulty: 'Advanced' },
    { name: 'Handstand Push-ups', sets: '3 sets × 3-8 reps', difficulty: 'Advanced' },
    { name: 'L-Sit', sets: '3 sets × 15-30 seconds', difficulty: 'Advanced' },
    { name: 'Archer Push-ups', sets: '3 sets × 5-8 each side', difficulty: 'Advanced' },
    { name: 'Shrimp Squats', sets: '3 sets × 3-5 each leg', difficulty: 'Advanced' },
    { name: 'One Leg Push-ups', sets: '3 sets × 5-8 each leg', difficulty: 'Advanced' },
    { name: 'Human Flag', sets: '3 sets × 5-15 seconds', difficulty: 'Advanced' },
    { name: 'Muscle-ups', sets: '3 sets × 3-8 reps', difficulty: 'Advanced' },
    { name: 'Front Lever', sets: '3 sets × 5-15 seconds', difficulty: 'Advanced' }
  ];

  const handleGetRecommendations = () => {
    if (weight && goal) {
      setShowRecommendations(true);
    }
  };

  const getGoalIcon = (goalType: string) => {
    switch (goalType) {
      case 'weight-loss': return TrendingDown;
      case 'weight-gain': return TrendingUp;
      default: return Minus;
    }
  };

  const getCurrentExercises = () => {
    switch (activeTab) {
      case 'gym': return gymExercises;
      case 'yoga': return yogaExercises;
      case 'home': return homeExercises;
      default: return gymExercises;
    }
  };

  const filteredExercises = getCurrentExercises().filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white text-center">Exercise & Fitness Hub</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setActiveTab('gym')}
              variant={activeTab === 'gym' ? 'default' : 'outline'}
              className={activeTab === 'gym' 
                ? 'bg-gradient-to-r from-orange-600 to-red-600' 
                : 'border-orange-500/50 text-orange-400 hover:bg-orange-900/30'
              }
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              Gym Exercises
            </Button>
            <Button
              onClick={() => setActiveTab('yoga')}
              variant={activeTab === 'yoga' ? 'default' : 'outline'}
              className={activeTab === 'yoga' 
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600' 
                : 'border-teal-500/50 text-teal-400 hover:bg-teal-900/30'
              }
            >
              <Heart className="w-4 h-4 mr-2" />
              Yoga
            </Button>
            <Button
              onClick={() => setActiveTab('home')}
              variant={activeTab === 'home' ? 'default' : 'outline'}
              className={activeTab === 'home' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                : 'border-purple-500/50 text-purple-400 hover:bg-purple-900/30'
              }
            >
              <Home className="w-4 h-4 mr-2" />
              Home Exercises
            </Button>
          </div>

          {/* Search Bar */}
          <Card className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-gray-600/30">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={`Search ${activeTab} exercises...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-600 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Weight Input Section */}
          <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Get Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight" className="text-gray-300">Your Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="bg-gray-800/50 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="goal" className="text-gray-300">Fitness Goal</Label>
                  <select
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="weight-gain">Weight Gain</option>
                    <option value="maintenance">Maintain Weight</option>
                  </select>
                </div>
              </div>
              <Button
                onClick={handleGetRecommendations}
                disabled={!weight || !goal}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get AI Recommendations
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          {showRecommendations && (
            <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white">AI Recommendations for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {React.createElement(getGoalIcon(goal), { className: "w-5 h-5 text-green-400" })}
                    <span className="text-gray-300">
                      Based on your weight ({weight}kg) and {goal.replace('-', ' ')} goal:
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300 ml-7">
                    <li>• Focus on {activeTab === 'gym' ? 'compound movements' : activeTab === 'yoga' ? 'flow sequences' : 'bodyweight progressions'}</li>
                    <li>• Aim for {goal === 'weight-loss' ? '4-5' : '3-4'} sessions per week</li>
                    <li>• {goal === 'weight-gain' ? 'Increase intensity gradually' : 'Maintain consistent routine'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Exercise List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExercises.map((exercise, index) => (
              <Card key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-600/30 hover:border-purple-500/50 transition-all">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">{exercise.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {activeTab === 'yoga' ? exercise.duration : exercise.sets}
                  </p>
                  <div className={`inline-block px-2 py-1 rounded text-xs ${
                    exercise.difficulty === 'Beginner' 
                      ? 'bg-green-600/20 text-green-400' 
                      : exercise.difficulty === 'Intermediate'
                        ? 'bg-yellow-600/20 text-yellow-400'
                        : 'bg-red-600/20 text-red-400'
                  }`}>
                    {exercise.difficulty}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No exercises found matching your search.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseModal;
