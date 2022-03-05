import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import BgImage from '../assets/hero-1.jpeg';

export default function AboutPage() {
	return (
		<main>
			<BreadCrumb current='about' />
			<div className='section'>
				<div className='container'>
					<div className='row row--gutter-lg'>
						<div className='col-lg-6'>
							<div className='img-box img-box--1-1'>
								<img
									className='pos-abs pos-centered'
									src={BgImage}
									alt=''
								/>
							</div>
						</div>
						<div className='col-lg-6'>
							<h2 className='heading-2 heading--underline'>
								Our Story
							</h2>
							<p className='text-muted lineheight-md'>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Fugiat accusantium sapiente
								tempora sed dolore esse deserunt eaque
								excepturi, delectus error accusamus vel
								eligendi, omnis beatae. Quisquam, dicta. Eos
								quod quisquam esse recusandae vitae neque
								dolore, obcaecati incidunt sequi blanditiis est
								exercitationem molestiae delectus saepe odio
								eligendi modi porro eaque in libero minus unde
								sapiente consectetur architecto. Ullam rerum,
								nemo iste ex, eaque perspiciatis nisi, eum totam
								velit saepe sed quos similique amet. Ex,
								voluptate accusamus nesciunt totam vitae esse
								iste.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
