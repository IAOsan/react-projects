import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartError from '../Errors/ChartError';

export default function VerticalBars(props) {
	const { labels, data } = props.data;
	const bgcolors = ['#ffd74b', '#71c5f8', '#4ab679', '#ffc7cd', '#f49490'];
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				title: {
					display: true,
					text: 'Stars',
					font: {
						size: 16,
						weight: 'bold',
					},
				},
			},
			x: {
				title: {
					display: true,
					text: 'Repos',
					padding: {
						top: 15,
					},
					font: {
						size: 16,
						weight: 'bold',
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
				backgroundColor: bgcolors.splice(0, labels?.length),
			},
		],
	};

	ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

	if (data?.every((item) => item === 0)) {
		return <ChartError msg='You dont have popular repos' />;
	}

	return <Bar data={chartData} options={options} />;
}
