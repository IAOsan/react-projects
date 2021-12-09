import { useEffect } from 'react';
import { SCROLL_THROTTLING_TIME } from '../config';

export default function useScroll(callback) {
	useEffect(() => {
		let waiting = false;

		const throttling = () => {
			if (waiting) return;
			waiting = true;

			setTimeout(() => {
				callback();
				waiting = false;
			}, SCROLL_THROTTLING_TIME * 1000);
		};

		window.addEventListener('scroll', throttling, false);

		return () => window.removeEventListener('scroll', throttling, false);
	}, []);
}
