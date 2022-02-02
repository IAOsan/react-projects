import User from '../User/User';
import UserFollowers from '../UserFollowers/UserFollowers';
import Repos from '../Repos/Repos';

export default function UserInfo() {
	return (
		<section className='user-info'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<User />
					</div>
					<div className='col-lg-6'>
						<UserFollowers />
					</div>
					<Repos />
				</div>
			</div>
		</section>
	);
}
