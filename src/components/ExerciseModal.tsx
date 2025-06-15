
import { useState } from 'react';
import { X, Search, Dumbbell, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExerciseModal = ({ isOpen, onClose }: ExerciseModalProps) => {
  const [activeTab, setActiveTab] = useState('gym');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const gymExercises = [
    { name: 'Bench Press', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Squats', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Deadlifts', sets: '3x5-8', difficulty: 'Advanced' },
    { name: 'Pull-ups', sets: '3x5-10', difficulty: 'Intermediate' },
    { name: 'Shoulder Press', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Barbell Rows', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Dips', sets: '3x8-15', difficulty: 'Intermediate' },
    { name: 'Lat Pulldowns', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Bicep Curls', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Tricep Extensions', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Leg Press', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Calf Raises', sets: '3x15-20', difficulty: 'Beginner' },
    { name: 'Chest Flyes', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Incline Bench Press', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Bulgarian Split Squats', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Hip Thrusts', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Romanian Deadlifts', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Face Pulls', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Hammer Curls', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Overhead Tricep Extension', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Cable Crossovers', sets: '3x12-15', difficulty: 'Intermediate' },
    { name: 'T-Bar Rows', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Preacher Curls', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Close-Grip Bench Press', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Walking Lunges', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Leg Curls', sets: '3x12-15', difficulty: 'Beginner' },
    { name: 'Leg Extensions', sets: '3x12-15', difficulty: 'Beginner' },
    { name: 'Seated Cable Rows', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Machine Chest Press', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Pec Deck Flyes', sets: '3x12-15', difficulty: 'Beginner' },
    { name: 'Smith Machine Squats', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Cable Lateral Raises', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Arnold Press', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Upright Rows', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Reverse Flyes', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Shrugs', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Cable Curls', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Rope Pushdowns', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Stiff Leg Deadlifts', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Good Mornings', sets: '3x8-12', difficulty: 'Intermediate' },
    { name: 'Hack Squats', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Cable Kickbacks', sets: '3x12-20', difficulty: 'Beginner' },
    { name: 'Chest Dips', sets: '3x8-15', difficulty: 'Intermediate' },
    { name: 'Wide-Grip Pull-ups', sets: '3x5-10', difficulty: 'Advanced' },
    { name: 'Chin-ups', sets: '3x5-10', difficulty: 'Intermediate' },
    { name: 'Neutral Grip Pull-ups', sets: '3x5-10', difficulty: 'Intermediate' },
    { name: 'Cable Woodchoppers', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Russian Twists', sets: '3x20-30', difficulty: 'Beginner' },
    { name: 'Hanging Leg Raises', sets: '3x8-15', difficulty: 'Advanced' },
    { name: 'Ab Wheel Rollouts', sets: '3x5-15', difficulty: 'Advanced' },
    { name: 'Cable Crunches', sets: '3x15-25', difficulty: 'Beginner' }
  ];

  const yogaExercises = [
    { name: 'Mountain Pose', duration: '1-2 min', difficulty: 'Beginner' },
    { name: 'Downward Dog', duration: '1-3 min', difficulty: 'Beginner' },
    { name: 'Child\'s Pose', duration: '2-5 min', difficulty: 'Beginner' },
    { name: 'Cat-Cow Stretch', duration: '1-2 min', difficulty: 'Beginner' },
    { name: 'Warrior I', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Warrior II', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Triangle Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Tree Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Cobra Pose', duration: '15-30 sec', difficulty: 'Beginner' },
    { name: 'Bridge Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Plank Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Seated Forward Fold', duration: '1-3 min', difficulty: 'Beginner' },
    { name: 'Pigeon Pose', duration: '1-3 min', difficulty: 'Intermediate' },
    { name: 'Camel Pose', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Crow Pose', duration: '10-30 sec', difficulty: 'Advanced' },
    { name: 'Eagle Pose', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Extended Side Angle', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Revolved Triangle', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Warrior III', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Standing Forward Fold', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Wide-Legged Forward Fold', duration: '1-2 min', difficulty: 'Beginner' },
    { name: 'Goddess Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Low Lunge', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'High Lunge', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Side Plank', duration: '15-45 sec', difficulty: 'Intermediate' },
    { name: 'Boat Pose', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Fish Pose', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Shoulder Stand', duration: '30-180 sec', difficulty: 'Intermediate' },
    { name: 'Headstand', duration: '30-180 sec', difficulty: 'Advanced' },
    { name: 'Wheel Pose', duration: '5-30 sec', difficulty: 'Advanced' },
    { name: 'King Pigeon', duration: '30-60 sec', difficulty: 'Advanced' },
    { name: 'Scorpion Pose', duration: '5-15 sec', difficulty: 'Advanced' },
    { name: 'Firefly Pose', duration: '5-15 sec', difficulty: 'Advanced' },
    { name: 'Eight-Angle Pose', duration: '5-15 sec', difficulty: 'Advanced' },
    { name: 'Compass Pose', duration: '15-30 sec', difficulty: 'Advanced' },
    { name: 'Twisted Triangle', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Revolved Side Angle', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Half Moon', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Hand to Big Toe', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Dancer\'s Pose', duration: '15-30 sec', difficulty: 'Intermediate' },
    { name: 'Lizard Pose', duration: '1-2 min', difficulty: 'Beginner' },
    { name: 'Frog Pose', duration: '1-3 min', difficulty: 'Intermediate' },
    { name: 'Happy Baby', duration: '1-2 min', difficulty: 'Beginner' },
    { name: 'Spinal Twist', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Legs Up Wall', duration: '5-15 min', difficulty: 'Beginner' },
    { name: 'Corpse Pose', duration: '5-20 min', difficulty: 'Beginner' },
    { name: 'Sun Salutation A', duration: '2-5 min', difficulty: 'Beginner' },
    { name: 'Sun Salutation B', duration: '3-6 min', difficulty: 'Intermediate' },
    { name: 'Moon Salutation', duration: '5-10 min', difficulty: 'Intermediate' },
    { name: 'Yin Sequence', duration: '20-90 min', difficulty: 'Beginner' }
  ];

  const homeExercises = [
    { name: 'Push-ups', sets: '3x10-20', difficulty: 'Beginner' },
    { name: 'Squats', sets: '3x15-25', difficulty: 'Beginner' },
    { name: 'Lunges', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Plank', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Burpees', sets: '3x5-15', difficulty: 'Intermediate' },
    { name: 'Mountain Climbers', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Jumping Jacks', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'High Knees', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Butt Kicks', duration: '30-60 sec', difficulty: 'Beginner' },
    { name: 'Wall Sit', duration: '30-90 sec', difficulty: 'Beginner' },
    { name: 'Pike Push-ups', sets: '3x5-15', difficulty: 'Intermediate' },
    { name: 'Diamond Push-ups', sets: '3x5-15', difficulty: 'Advanced' },
    { name: 'Single Leg Glute Bridge', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Pistol Squats', sets: '3x3-8', difficulty: 'Advanced' },
    { name: 'Jump Squats', sets: '3x10-20', difficulty: 'Intermediate' },
    { name: 'Split Lunges', sets: '3x10-15', difficulty: 'Intermediate' },
    { name: 'Reverse Lunges', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Side Lunges', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Cossack Squats', sets: '3x5-10', difficulty: 'Intermediate' },
    { name: 'Bear Crawl', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Crab Walk', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Superman', sets: '3x10-15', difficulty: 'Beginner' },
    { name: 'Bird Dog', sets: '3x8-12', difficulty: 'Beginner' },
    { name: 'Dead Bug', sets: '3x8-12', difficulty: 'Beginner' },
    { name: 'Bicycle Crunches', sets: '3x15-25', difficulty: 'Beginner' },
    { name: 'Russian Twists', sets: '3x15-25', difficulty: 'Beginner' },
    { name: 'Leg Raises', sets: '3x10-20', difficulty: 'Intermediate' },
    { name: 'V-Ups', sets: '3x8-15', difficulty: 'Intermediate' },
    { name: 'Flutter Kicks', duration: '30-60 sec', difficulty: 'Intermediate' },
    { name: 'Hollow Hold', duration: '15-45 sec', difficulty: 'Intermediate' },
    { name: 'Side Plank', duration: '15-45 sec', difficulty: 'Intermediate' },
    { name: 'Plank Up-Downs', sets: '3x8-15', difficulty: 'Intermediate' },
    { name: 'Plank Jacks', sets: '3x10-20', difficulty: 'Intermediate' },
    { name: 'Reverse Plank', duration: '15-45 sec', difficulty: 'Intermediate' },
    { name: 'Single Arm Push-ups', sets: '3x3-8', difficulty: 'Advanced' },
    { name: 'Archer Push-ups', sets: '3x5-10', difficulty: 'Advanced' },
    { name: 'Handstand Push-ups', sets: '3x3-8', difficulty: 'Advanced' },
    { name: 'L-Sit', duration: '5-30 sec', difficulty: 'Advanced' },
    { name: 'Muscle-ups', sets: '3x1-5', difficulty: 'Advanced' },
    { name: 'Human Flag', duration: '5-15 sec', difficulty: 'Advanced' },
    { name: 'Shrimp Squats', sets: '3x3-8', difficulty: 'Advanced' },
    { name: 'Dragon Squats', sets: '3x3-8', difficulty: 'Advanced' },
    { name: 'One Arm Handstand', duration: '5-30 sec', difficulty: 'Advanced' },
    { name: 'Planche Push-ups', sets: '3x1-5', difficulty: 'Advanced' },
    { name: 'Front Lever', duration: '5-30 sec', difficulty: 'Advanced' },
    { name: 'Back Lever', duration: '5-30 sec', difficulty: 'Advanced' },
    { name: 'Iron Cross', duration: '5-15 sec', difficulty: 'Advanced' },
    { name: 'Maltese', duration: '3-10 sec', difficulty: 'Advanced' },
    { name: 'Victorian', duration: '3-10 sec', difficulty: 'Advanced' },
    { name: 'Manna', duration: '3-15 sec', difficulty: 'Advanced' },
    { name: 'Straddle Planche', duration: '5-30 sec', difficulty: 'Advanced' }
  ];

  const getExercises = () => {
    let exercises: Array<{ name: string; sets?: string; duration?: string; difficulty: string }> = [];
    
    switch (activeTab) {
      case 'gym':
        exercises = gymExercises;
        break;
      case 'yoga':
        exercises = yogaExercises;
        break;
      case 'home':
        exercises = homeExercises;
        break;
    }

    return exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Exercise Library</h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex space-x-4 mb-4">
            <Button
              onClick={() => setActiveTab('gym')}
              variant={activeTab === 'gym' ? 'default' : 'outline'}
              className={`${
                activeTab === 'gym'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              Gym ({gymExercises.length})
            </Button>
            <Button
              onClick={() => setActiveTab('yoga')}
              variant={activeTab === 'yoga' ? 'default' : 'outline'}
              className={`${
                activeTab === 'yoga'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Yoga ({yogaExercises.length})
            </Button>
            <Button
              onClick={() => setActiveTab('home')}
              variant={activeTab === 'home' ? 'default' : 'outline'}
              className={`${
                activeTab === 'home'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Home ({homeExercises.length})
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-600 text-white"
            />
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getExercises().map((exercise, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-700/30 transition-colors">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">{exercise.name}</h3>
                  <div className="space-y-1 text-sm">
                    {'sets' in exercise && exercise.sets && (
                      <p className="text-gray-300">Sets: {exercise.sets}</p>
                    )}
                    {'duration' in exercise && exercise.duration && (
                      <p className="text-gray-300">Duration: {exercise.duration}</p>
                    )}
                    <p className={`font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;
