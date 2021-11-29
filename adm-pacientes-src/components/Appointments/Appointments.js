import DatesList from '../DatesList';

export default function Appointments({ title, dates, removeDate }) {
	return (
		<section className='appointments'>
			<h2 className='heading heading-2'>{title}</h2>
			{Array.isArray(dates) && dates.length > 0 && (
				<DatesList dates={dates} removeDate={removeDate} />
			)}
		</section>
	);
}
