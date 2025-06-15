
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
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle>Daily Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="meal" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#3B82F6" name="Calories" />
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
