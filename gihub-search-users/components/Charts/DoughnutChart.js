import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartError from '../Errors/ChartError';

export default function DoughnutChart(props) {
	const { labels, data } = props.data;
	const bgcolors = ['#ffd74b', '#71c5f8', '#4ab679', '#ffc7cd', '#f49490'];
	const options = {
		responsive: true,
		radius: '70%',
		cutout: '40%',
		plugins: {
			legend: {
				position: 'bottom',
			},
		},
	};

	const chartData = {
		labels,
		datasets: [
			{
				data,
				backgroundColor: bgcolors.slice(0, labels?.length),
				borderWidth: 1,
				hoverOffset: 20,
			},
		],
	};

	ChartJS.register(ArcElement, Tooltip, Legend);

	if (data?.every((item) => item === 0)) {
		return <ChartError msg='You dont have popular languages' />;
	}

	return <Doughnut data={chartData} options={options} />;
}
