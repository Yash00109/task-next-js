import { useState, useEffect } from 'react';
import StatCard from '../../components/StatCard';
import PieChart from '../../components/PieChart';
import TimeSelector from '../../components/TimeSelector';

export default function StatsPage() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    conversions: 0,
    chartData: [20, 40, 60],
  });
  const [timeRange, setTimeRange] = useState('1-day');

  useEffect(() => {
    // Simulate fetching data based on time range
    async function fetchData() {
      const dummyData = {
        '1-day': { users: 120, revenue: 5000, conversions: 50, chartData: [30, 50, 20] },
        '1-week': { users: 500, revenue: 25000, conversions: 100, chartData: [40, 30, 30] },
        '1-month': { users: 2000, revenue: 100000, conversions: 500, chartData: [50, 25, 25] },
      };
      setStats(dummyData[timeRange]);
    }
    fetchData();
  }, [timeRange]);

  return (
    <div>
      <TimeSelector onChange={setTimeRange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Revenue" value={`$${stats.revenue}`} />
        <StatCard title="Conversions" value={stats.conversions} />
      </div>
      <div className="mt-8">
        <PieChart data={stats.chartData} />
      </div>
    </div>
  );
}
