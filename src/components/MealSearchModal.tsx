
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Clock, Users, ChefHat } from 'lucide-react';
import { mealsDatabase, cuisineTypes, mealCategories, Meal } from '@/data/mealsDatabase';

interface MealSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMeal?: (meal: Meal) => void;
}

const MealSearchModal = ({ isOpen, onClose, onSelectMeal }: MealSearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMeals = mealsDatabase.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meal.ingredients.some(ingredient => 
                           ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCuisine = selectedCuisine === 'All' || meal.cuisine === selectedCuisine;
    const matchesCategory = selectedCategory === 'All' || meal.category === selectedCategory;
    
    return matchesSearch && matchesCuisine && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            Global Meal Library ({filteredMeals.length} meals)
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 h-full">
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search meals or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-purple-500/30 text-white placeholder-gray-400"
              />
            </div>
            
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="bg-gray-800 border border-purple-500/30 text-white rounded-lg px-3 py-2"
            >
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine} Cuisine</option>
              ))}
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800 border border-purple-500/30 text-white rounded-lg px-3 py-2"
            >
              {mealCategories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Meals Grid */}
          <ScrollArea className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1">
              {filteredMeals.map((meal) => (
                <Card 
                  key={meal.id} 
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer hover:scale-105"
                  onClick={() => onSelectMeal?.(meal)}
                >
                  <CardContent className="p-4">
                    <div className="text-center mb-3">
                      <div className="text-4xl mb-2">{meal.image}</div>
                      <h3 className="font-semibold text-white text-sm mb-1">{meal.name}</h3>
                      <p className="text-xs text-purple-400">{meal.cuisine}</p>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white capitalize">{meal.category}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Calories:</span>
                        <span className="text-orange-400">{meal.calories} kcal</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Protein:</span>
                        <span className="text-blue-400">{meal.protein}g</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Time:
                        </span>
                        <span className="text-green-400">{meal.prepTime}min</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Difficulty:</span>
                        <span className={getDifficultyColor(meal.difficulty)}>{meal.difficulty}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-600">
                      <p className="text-xs text-gray-300 line-clamp-2">{meal.description}</p>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-xs text-gray-400 mb-1">Ingredients:</p>
                      <div className="flex flex-wrap gap-1">
                        {meal.ingredients.slice(0, 3).map((ingredient, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded"
                          >
                            {ingredient}
                          </span>
                        ))}
                        {meal.ingredients.length > 3 && (
                          <span className="text-xs text-gray-500">+{meal.ingredients.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MealSearchModal;
