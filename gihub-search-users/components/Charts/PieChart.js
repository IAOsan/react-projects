import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartError from '../Errors/ChartError';

export default function PieChart(props) {
	const { labels, data } = props.data;
	const bgColors = ['#ffd74b', '#71c5f8', '#4ab679', '#ffc7cd', '#f49490'];
	const options = {
		responsive: true,
		radius: '70%',
		plugins: {
			legend: {
				position: 'bottom',
			},
			tooltip: {
				callbacks: {
					label: function ({ label, parsed, dataset }) {
						let total = dataset.data.reduce(
							(acc, curr) => acc + curr,
							0
						);

						return `${label}: ${Math.round(
							(parsed / total) * 100
						)}%`;
					},
				},
			},
		},
	};
	const chartData = {
		labels,
		datasets: [
			{
				data,
				backgroundColor: bgColors.slice(0, labels?.length),
				borderWidth: 1,
				hoverOffset: 20,
			},
		],
	};

	ChartJS.register(ArcElement, Tooltip, Legend);

	if (data?.every((item) => item === 0)) {
		return <ChartError msg='You dont have languages' />;
	}

	return <Pie data={chartData} options={options} />;
}
