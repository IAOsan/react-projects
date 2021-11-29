import Date from '../Date';

export default function DateList({ dates, removeDate }) {
	return (
		<>
			{dates.map((date) => (
				<Date key={date.id} removeDate={removeDate} {...date} />
			))}
		</>
	);
}
