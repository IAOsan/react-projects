import useForm from '../../Hooks/useForm';

export default function Form({ addDate }) {
	const { errors, handleChange, handleSubmit } = useForm(addDate);

	function getDateTimeError(date, time) {
		if (date && time) {
			return 'Fecha y hora requerida';
		} else {
			if (date) {
				return date;
			} else {
				return time;
			}
		}
	}

	return (
		<form onSubmit={handleSubmit} onChange={handleChange} className='form'>
			<div className='form__group'>
				<label className='form__label' htmlFor='inputName'>
					Nombre Mascota
				</label>
				<input
					name='pet'
					className={`form__control ${
						errors.pet && 'form__control--invalid'
					}`}
					id='inputName'
					type='text'
					placeholder='Nombre Mascota'
				/>
				{errors.pet && <p className='text-error'>{errors.pet}</p>}
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='inputOwner'>
					Nombre Dueño
				</label>
				<input
					name='owner'
					className={`form__control ${
						errors.owner && 'form__control--invalid'
					}`}
					id='inputOwner'
					type='text'
					placeholder='Nombre Dueño de la Mascota'
				/>
				{errors.owner && <p className='text-error'>{errors.owner}</p>}
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='inputDate'>
					Fecha
				</label>
				<input
					name='date'
					id='inputDate'
					className={`form__control ${
						errors.date && 'form__control--invalid'
					}`}
					type='date'
				/>
				<label className='form__label ml-md' htmlFor='inputHour'>
					Hora
				</label>
				<input
					name='time'
					id='inputHour'
					className={`form__control ${
						errors.time && 'form__control--invalid'
					}`}
					type='time'
				/>
				{(errors.date || errors.time) && (
					<p className='text-error'>
						{getDateTimeError(errors.date, errors.time)}
					</p>
				)}
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='inputDesc'>
					Sintomas
				</label>
				<textarea
					name='description'
					className={`form__control form__control--textarea ${
						errors.description && 'form__control--invalid'
					}`}
					id='inputDesc'
				></textarea>
				{errors.description && (
					<p className='text-error'>{errors.description}</p>
				)}
			</div>
			<div className='form__group'>
				<button className='btn btn__success btn__add' type='submit'>
					Agregar
				</button>
			</div>
		</form>
	);
}
