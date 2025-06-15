
import { X, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import NutritionCard from './NutritionCard';

interface FoodAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: any;
}

const FoodAnalysisModal = ({ isOpen, onClose, result }: FoodAnalysisModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{result.foodName}</h2>
              <p className="text-sm text-gray-600">Confidence: {result.confidence}%</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Health Score */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Health Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Progress value={result.healthScore} className="h-3" />
                </div>
                <span className="text-2xl font-bold text-green-600">
                  {result.healthScore}/100
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Nutrition Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <NutritionCard
              label="Calories"
              value={result.nutrition.calories}
              unit="kcal"
              color="from-red-500 to-orange-500"
            />
            <NutritionCard
              label="Protein"
              value={result.nutrition.protein}
              unit="g"
              color="from-blue-500 to-indigo-500"
            />
            <NutritionCard
              label="Carbs"
              value={result.nutrition.carbs}
              unit="g"
              color="from-yellow-500 to-orange-500"
            />
            <NutritionCard
              label="Fat"
              value={result.nutrition.fat}
              unit="g"
              color="from-purple-500 to-pink-500"
            />
          </div>

          {/* Additional Nutrition */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Nutrition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fiber</span>
                  <span className="font-semibold">{result.nutrition.fiber}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sugar</span>
                  <span className="font-semibold">{result.nutrition.sugar}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sodium</span>
                  <span className="font-semibold">{result.nutrition.sodium}mg</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vitamins & Minerals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Vitamins</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.nutrition.vitamins.map((vitamin: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs"
                        >
                          {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Minerals</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.nutrition.minerals.map((mineral: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                        >
                          {mineral}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Save to Diary
            </Button>
            <Button variant="outline" className="flex-1">
              Share Results
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAnalysisModal;
