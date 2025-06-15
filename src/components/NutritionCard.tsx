
import { Card, CardContent } from '@/components/ui/card';

interface NutritionCardProps {
  label: string;
  value: number;
  unit: string;
  color: string;
}

const NutritionCard = ({ label, value, unit, color }: NutritionCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-4">
        <div className="text-center">
          <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
            <span className="text-white font-bold text-lg">{value}</span>
          </div>
          <h3 className="font-semibold text-gray-900">{label}</h3>
          <p className="text-sm text-gray-600">{unit}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionCard;
