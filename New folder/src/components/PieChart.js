import { Pie } from 'react-chartjs-2';

export default function PieChart({ data }) {
  const chartData = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        label: 'Categories',
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return <Pie data={chartData} />;
}
