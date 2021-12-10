import { useEffect, useState } from 'react';
import { data } from './data';
import './app.styles.scss';

export default function App() {
	const [theme, setTheme] = useState(getLocalStorage());

	useEffect(() => {
		document.documentElement.className = theme;
		setLocalStorage(theme);
	}, [theme]);

	function getLocalStorage() {
		const storage = localStorage.getItem('theme');
		if (!storage) return 'theme-light';
		return storage;
	}

	function setLocalStorage(str) {
		localStorage.setItem('theme', str);
	}

	function handleClick() {
		setTheme((prevState) => {
			if (prevState === 'theme-light') return 'theme-dark';
			if (prevState === 'theme-dark') return 'theme-light';
			return prevState;
		});
	}

	return (
		<>
			<header>
				<div className='container d-flex d-flex-jc-sb d-flex-ai-c'>
					<h1 className='heading-2'>Overreacted</h1>
					<button onClick={handleClick} className='btn btn--primary'>
						Toggle
					</button>
				</div>
			</header>

			<main>
				<div className='container'>
					<section className='events'>
						{data.map((item) => (
							<article key={item.id} className='event'>
								<h3 className='event__heading'>{item.title}</h3>
								<i className='event__date'>
									{new Date(item.date).toDateString()},{' '}
									{item.length} min to read
								</i>
								<p>{item.snippet}</p>
							</article>
						))}
					</section>
				</div>
			</main>
		</>
	);
}
