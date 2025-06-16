
import { useState } from 'react';
import { X, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import MealSearchModal from './MealSearchModal';
import { Meal } from '@/data/mealsDatabase';

interface MealEntryProps {
  isOpen: boolean;
  onClose: () => void;
}

const MealEntry = ({ isOpen, onClose }: MealEntryProps) => {
  const [mealName, setMealName] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [notes, setNotes] = useState('');
  const [showMealSearch, setShowMealSearch] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const handleSave = () => {
    if (!mealName || !mealTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in meal name and time.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Meal Added!",
      description: `${mealName} has been added to your diary.`,
    });
    onClose();
  };

  const handleMealSelect = (meal: Meal) => {
    setMealName(meal.name);
    setSelectedMeal(meal);
    setShowMealSearch(false);
    toast({
      title: "Meal Selected!",
      description: `${meal.name} from ${meal.cuisine} cuisine selected.`,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Add Meal Entry</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meal-name" className="text-gray-300">Meal Name</Label>
              <div className="flex gap-2">
                <Input
                  id="meal-name"
                  placeholder="e.g., Grilled Chicken Salad"
                  value={mealName}
                  onChange={(e) => setMealName(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Button
                  onClick={() => setShowMealSearch(true)}
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-900/30"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              {selectedMeal && (
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{selectedMeal.image}</span>
                    <div>
                      <p className="text-sm font-medium text-white">{selectedMeal.name}</p>
                      <p className="text-xs text-purple-400">{selectedMeal.cuisine} • {selectedMeal.calories} kcal</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300">{selectedMeal.description}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="meal-time" className="text-gray-300">Time</Label>
                <Input
                  id="meal-time"
                  type="time"
                  value={mealTime}
                  onChange={(e) => setMealTime(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meal-type" className="text-gray-300">Type</Label>
                <select
                  id="meal-type"
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-gray-300">Notes (Optional)</Label>
              <textarea
                id="notes"
                placeholder="Add any notes about your meal..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose} className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
                Cancel
              </Button>
              <Button onClick={handleSave} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Meal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <MealSearchModal
        isOpen={showMealSearch}
        onClose={() => setShowMealSearch(false)}
        onSelectMeal={handleMealSelect}
      />
    </>
  );
};

export default MealEntry;
