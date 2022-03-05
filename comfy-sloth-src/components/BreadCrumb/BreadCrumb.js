import { Link } from 'react-router-dom';

export default function BreadCrumb({ backTo, current }) {
	const origin = backTo[0];

	function formatValues(name, origin) {
		let values = { url: '', text: '' };

		if (name === origin) {
			values.url = '/';
			values.text = name;
			return values;
		}

		values.url = `/${name}`;
		values.text = `/ ${name}`;
		return values;
	}

	function getLinks() {
		return backTo.map((item, idx) => {
			const { url, text } = formatValues(item, origin);

			return (
				<Link key={idx} to={url} className='text-warning-700 mr-xxs'>
					{text}
				</Link>
			);
		});
	}

	return (
		<div className='breadcrumb'>
			<div className='container'>
				<h3 className='heading-3 text-capitalize'>
					<span>{getLinks()}</span>
					<span className='text-primary'>
						{current ? `/ ${current}` : ''}
					</span>
				</h3>
			</div>
		</div>
	);
}

BreadCrumb.defaultProps = {
	backTo: ['home'],
	current: '',
};
// import { Link } from 'react-router-dom';

// export default function BreadCrumb({ route }) {
// 	const n = route.length - 1;
// 	const origin = route[0];
// 	const current = route[n];

// 	function formatValues(name, origin) {
// 		let values = { url: '', text: '' };

// 		if (name === origin) {
// 			values.url = '/';
// 			values.text = name;
// 			return values;
// 		}

// 		values.url = `/${name}`;
// 		values.text = `/ ${name}`;
// 		return values;
// 	}

// 	function getLinks() {
// 		const links = route.slice(0, -1);

// 		return links.map((item) => {
// 			const { url, text } = formatValues(item, origin);

// 			return (
// 				<Link to={url} className='text-warning-700 mr-xxs'>
// 					{text}
// 				</Link>
// 			);
// 		});
// 	}

// 	return (
// 		<div className='breadcrumb'>
// 			<div className='container'>
// 				<h2 className='heading-4 text-capitalize'>
// 					<span>{getLinks()}</span>
// 					<span className='text-primary'>/ {current}</span>
// 				</h2>
// 			</div>
// 		</div>
// 	);
// }

// BreadCrumb.defaultProps = {
// 	route: ['home'],
// };
