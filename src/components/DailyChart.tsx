
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DailyChart = () => {
  const data = [
    { meal: 'Breakfast', calories: 320, protein: 12, carbs: 45, fat: 8 },
    { meal: 'Lunch', calories: 450, protein: 35, carbs: 40, fat: 18 },
    { meal: 'Snack', calories: 150, protein: 8, carbs: 20, fat: 5 },
    { meal: 'Dinner', calories: 580, protein: 40, carbs: 55, fat: 22 },
  ];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
      <CardHeader>
        <CardTitle className="text-white">Daily Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="meal" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Bar dataKey="calories" fill="#8B5CF6" name="Calories" />
            <Bar dataKey="protein" fill="#10B981" name="Protein (g)" />
            <Bar dataKey="carbs" fill="#F59E0B" name="Carbs (g)" />
            <Bar dataKey="fat" fill="#EF4444" name="Fat (g)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DailyChart;
