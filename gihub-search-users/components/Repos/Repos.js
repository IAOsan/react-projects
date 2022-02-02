import { useGithubContext } from '../../context/githubContext';
import {
	PieChart,
	DoughnutChart,
	VerticalBars,
	HorizontalBars,
} from '../Charts/index';
import { chartColors } from '../../config';

export default function Repos() {
	const { repos } = useGithubContext();
	const totalData = repos?.reduce(
		(acc, { language, stargazers_count, name, forks }) => {
			acc.repos[name] = { stars: stargazers_count, forks };

			if (language) {
				if (!acc.languages[language]) {
					acc.languages[language] = {
						value: 1,
						stars: stargazers_count,
					};
				} else {
					acc.languages[language] = {
						value: acc.languages[language].value + 1,
						stars: acc.languages[language].stars + stargazers_count,
					};
				}
			}
			return acc;
		},
		{ languages: {}, repos: {} }
	);
	const mostUsed = getChartData(totalData.languages, 'value');
	const starsPerLanguage = getChartData(totalData.languages, 'stars');
	const popularRepos = getChartData(totalData.repos, 'stars');
	const mostForked = getChartData(totalData.repos, 'forks');

	function getChartData(obj, key) {
		const arr = Object.entries(obj),
			sortedData = arr.sort((a, b) => b[1][key] - a[1][key]).slice(0, 5),
			labels = sortedData.map((item) => item[0]),
			data = sortedData.map((item) => item[1][key]);

		if (!data[0] && data[0] !== 0) return { data: [], labels: [] };

		return {
			labels,
			data,
		};
	}

	const test = {
		labels: ['lun', 'mar', 'mier', 'juev', 'vier', 'sab'],
		data: [1, 5, 20, 10, 15, 35],
	};

	return (
		<>
			<div className='col-lg-5'>
				<article className='user-info__panel bg-light box-shadow pos-rel'>
					<h2 className='text-capitalize text-center mb-xl'>
						languages
					</h2>
					<PieChart data={mostUsed} />
				</article>
			</div>
			<div className='col-lg-7'>
				<article className='user-info__panel bg-light box-shadow pos-rel'>
					<h2 className='text-capitalize text-center mb-xl'>
						most popular
					</h2>
					<div className='d-flex d-flex-ai-c height-90'>
						<VerticalBars data={popularRepos} />
					</div>
				</article>
			</div>
			<div className='col-lg-5'>
				<article className='user-info__panel bg-light box-shadow pos-rel'>
					<h2 className='text-capitalize text-center mb-xl'>
						stars per language
					</h2>
					<DoughnutChart data={starsPerLanguage} />
				</article>
			</div>
			<div className='col-lg-7'>
				<article className='user-info__panel bg-light box-shadow pos-rel'>
					<h2 className='text-capitalize text-center mb-xl'>
						most forked
					</h2>
					<div className='d-flex d-flex-ai-c height-90'>
						<HorizontalBars data={mostForked} />
					</div>
				</article>
			</div>
		</>
	);
}
