
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dumbbell, Heart, Target, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExerciseModal = ({ isOpen, onClose }: ExerciseModalProps) => {
  const [activeTab, setActiveTab] = useState('gym');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const gymExercises = [
    { name: 'Bench Press', sets: '3 sets × 8-12 reps', difficulty: 'Intermediate' },
    { name: 'Deadlift', sets: '3 sets × 5-8 reps', difficulty: 'Advanced' },
    { name: 'Squats', sets: '3 sets × 8-12 reps', difficulty: 'Beginner' },
    { name: 'Pull-ups', sets: '3 sets × 5-10 reps', difficulty: 'Intermediate' },
    { name: 'Shoulder Press', sets: '3 sets × 8-12 reps', difficulty: 'Beginner' },
    { name: 'Bicep Curls', sets: '3 sets × 10-15 reps', difficulty: 'Beginner' },
  ];

  const yogaExercises = [
    { name: 'Sun Salutation', duration: '10 minutes', difficulty: 'Beginner' },
    { name: 'Warrior Pose', duration: '5 minutes', difficulty: 'Beginner' },
    { name: 'Downward Dog', duration: '3 minutes', difficulty: 'Beginner' },
    { name: 'Tree Pose', duration: '2 minutes each side', difficulty: 'Intermediate' },
    { name: 'Lotus Position', duration: '10 minutes', difficulty: 'Advanced' },
    { name: 'Child\'s Pose', duration: '5 minutes', difficulty: 'Beginner' },
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
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
          </div>

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
                    <li>• Focus on {activeTab === 'gym' ? 'compound movements' : 'flow sequences'}</li>
                    <li>• Aim for {goal === 'weight-loss' ? '4-5' : '3-4'} sessions per week</li>
                    <li>• {goal === 'weight-gain' ? 'Increase intensity gradually' : 'Maintain consistent routine'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Exercise List */}
          <div className="grid md:grid-cols-2 gap-4">
            {(activeTab === 'gym' ? gymExercises : yogaExercises).map((exercise, index) => (
              <Card key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-600/30 hover:border-purple-500/50 transition-all">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">{exercise.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {activeTab === 'gym' ? exercise.sets : exercise.duration}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseModal;
