import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<section className='hero pos-rel'>
			<div className='container pos-abs pos-centered'>
				<div className='row row--gutter-lg'>
					<div className='col-xl-7 col-lg-6'>
						<div className='hero__content'>
							<h1 className='heading-1 hero__title font-xbold'>
								Design Your Comfort Zone
							</h1>
							<p className='hero__desc font-md text-muted lineheight-md'>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Iusto, at sed omnis corporis
								doloremque possimus velit! Repudiandae nisi
								odit, aperiam odio ducimus, obcaecati libero et
								quia tempora excepturi quis alias?
							</p>
							<Link
								to='/products'
								className='btn btn--lg btn--warning'
							>
								SHOP NOW
							</Link>
						</div>
					</div>
					<div className='col-xl-5 col-lg-6 d-mobile-none'>
						<div className='hero__bg'></div>
					</div>
				</div>
			</div>
		</section>
	);
}
