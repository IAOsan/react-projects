export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<p className='text-center'>
					<span className='mr-xxs'>
						&copy;{new Date().getFullYear()}
					</span>
					<span className='text-warning mr-xs'>Comfy Sloth</span>
					<span>All rights reserved</span>
				</p>
			</div>
		</footer>
	);
}
