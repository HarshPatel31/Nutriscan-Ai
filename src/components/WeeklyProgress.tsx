
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeeklyProgress = () => {
  const data = [
    { day: 'Mon', calories: 2100, weight: 70.2 },
    { day: 'Tue', calories: 1950, weight: 70.0 },
    { day: 'Wed', calories: 2250, weight: 69.8 },
    { day: 'Thu', calories: 2000, weight: 69.9 },
    { day: 'Fri', calories: 2150, weight: 69.7 },
    { day: 'Sat', calories: 2300, weight: 69.5 },
    { day: 'Sun', calories: 1850, weight: 69.6 },
  ];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-600/30">
      <CardHeader>
        <CardTitle className="text-white">Weekly Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#9CA3AF" />
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="calories" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              name="Calories"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="weight" 
              stroke="#10B981" 
              strokeWidth={3}
              name="Weight (kg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyProgress;
