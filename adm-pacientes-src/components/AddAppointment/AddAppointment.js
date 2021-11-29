import Form from '../Form';

export default function AddAppointment({ title, addDate }) {
	return (
		<section className='appointments'>
			<h2 className='heading heading-2'>{title}</h2>
			<Form addDate={addDate} />
		</section>
	);
}
