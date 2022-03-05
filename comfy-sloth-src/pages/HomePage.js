import { useAuth0 } from '@auth0/auth0-react';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Services from '../components/Services/Services';
import Newsletter from '../components/Newsletter/Newsletter';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<FeaturedProducts />
			<Services />
			<Newsletter />
		</main>
	);
}
