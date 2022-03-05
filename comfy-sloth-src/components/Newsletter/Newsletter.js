export default function Newsletter() {
	return (
		<section className='news-letter section'>
			<div className='container'>
				<h3 className='heading-2'>
					Join our newsletter and get 20% off
				</h3>
				<div className='row row--gutter-lg'>
					<div className='col-lg-6'>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Proin hendrerit nisi nibh, at suscipit nulla
							fringilla a. Praesent suscipit felis ac tempor
							gravida.
						</p>
					</div>
					<div className='col-lg-6'>
						<form
							action='https://formspree.io/f/xjvlydwz'
							method='POST'
						>
							<div className='form__group'>
								<input
									type='email'
									className='form__control form__control--newsletter'
									placeholder='Enter Email'
									name='_replyto'
									required
								/>
								<button className='btn btn--warning'>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
