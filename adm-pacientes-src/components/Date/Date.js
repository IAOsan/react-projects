import { capitalizeString } from '../../helpers';

export default function Date({
	id,
	pet,
	owner,
	date,
	time,
	description,
	removeDate,
}) {
	function handleClick() {
		removeDate(id);
	}

	return (
		<div className='date'>
			<h3 className='date__title'>{capitalizeString(pet)}</h3>
			<p className='date__property'>
				<span className='text-bold'>Nombre del dueño:</span>{' '}
				{capitalizeString(owner)}
			</p>
			<p className='date__property'>
				<span className='text-bold'>Fecha:</span> {date}
			</p>
			<p className='date__property'>
				<span className='text-bold'>Hora:</span> {time}
			</p>
			<p className='date__property'>
				<span className='text-bold'>Sintomas:</span>{' '}
				{capitalizeString(description)}
			</p>
			<button onClick={handleClick} className='btn btn__danger btn__date'>
				Borrar X
			</button>
		</div>
	);
}
