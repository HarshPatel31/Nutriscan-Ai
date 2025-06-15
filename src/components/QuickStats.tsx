
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Target, Calendar, Users } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Foods Analyzed",
      value: "10K+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      label: "Accuracy Rate",
      value: "95%",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Calendar,
      label: "Days Tracked",
      value: "365+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      label: "Happy Users",
      value: "50K+",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="font-bold text-xl text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
