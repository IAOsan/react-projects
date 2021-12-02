export default function FollowersList({ children }) {
	return (
		<section className='followers'>
			<div className='container'>
				<div className='row'>{children}</div>
			</div>
		</section>
	);
}
