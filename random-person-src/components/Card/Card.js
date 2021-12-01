import { useEffect, useState } from 'react';
import { icons } from '../../constants';
import Spinner from '../Spinner/Spinner';

export default function Card({ data, onRandom, isLoading }) {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState('');
	const [activeField, setActiveField] = useState('');
	const { name, email, dob, location, phone, login, picture } = data;

	useEffect(() => {
		setValue((prevState) => getFullName(name, 'first', 'last'));
		setTitle((prevState) => 'Hi, My name is');
		setActiveField((prevState) => 'name');
	}, [data]);

	function capitalizeStr(str) {
		return str[0].toUpperCase() + str.substring(1, str.length);
	}

	function getFullName() {
		return `${capitalizeStr(name['first'])} ${capitalizeStr(name['last'])}`;
	}

	function getDate() {
		return new Date(dob['date']).toLocaleDateString();
	}

	function getLocation() {
		const { name, number } = location.street;
		return `${number} ${name}`;
	}

	function handleMouseOver(e) {
		const dataLabel = e.target.closest('li').dataset;

		setTitle((prevState) => dataLabel.title);
		setValue((prevState) => dataLabel.value);
		setActiveField((prevState) => dataLabel.label);
	}

	function handleClick() {
		onRandom();
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='card'>
			<div className='card__header'></div>
			<div
				style={{
					background: `url(${picture.large}) center no-repeat`,
				}}
				className='card__image'
			></div>
			<div className='card__body'>
				<p>{title}</p>
				<h4 className='heading-3'>{value}</h4>
				<ul className='card__list d-flex d-flex-jc-sb'>
					<li
						onMouseOver={handleMouseOver}
						data-title='Hi, My name is'
						data-value={getFullName()}
						data-label='name'
						className={`card__list-item ${
							activeField === 'name' ? 'active' : ''
						}`}
					>
						<icons.user className='icon' />
					</li>
					<li
						onMouseOver={handleMouseOver}
						data-title='My email address is'
						data-value={email}
						data-label='email'
						className={`card__list-item ${
							activeField === 'email' ? 'active' : ''
						}`}
					>
						<icons.email className='icon' />
					</li>
					<li
						onMouseOver={handleMouseOver}
						data-title='My birthday is'
						data-value={getDate()}
						data-label='birth'
						className={`card__list-item ${
							activeField === 'birth' ? 'active' : ''
						}`}
					>
						<icons.calendar className='icon' />
					</li>
					<li
						onMouseOver={handleMouseOver}
						data-title='My street is'
						data-value={getLocation()}
						data-label='location'
						className={`card__list-item ${
							activeField === 'location' ? 'active' : ''
						}`}
					>
						<icons.location className='icon' />
					</li>
					<li
						onMouseOver={handleMouseOver}
						data-title='My phone is'
						data-value={phone}
						data-label='phone'
						className={`card__list-item ${
							activeField === 'phone' ? 'active' : ''
						}`}
					>
						<icons.phone className='icon' />
					</li>
					<li
						onMouseOver={handleMouseOver}
						data-title='My password is'
						data-value={login.password}
						data-label='password'
						className={`card__list-item ${
							activeField === 'password' ? 'active' : ''
						}`}
					>
						<icons.lock className='icon' />
					</li>
				</ul>
				<button onClick={handleClick} className='btn btn--blue'>
					Random user
				</button>
			</div>
		</div>
	);
}
