import { useEffect, useState } from 'react';
import AddAppointment from './components/AddAppointment';
import Appointments from './components/Appointments';
import Heading from './components/Heading';
import useLocalStorage from './Hooks/useLocalStorage';
import './appStyles.css';

export default function App() {
	const [dates, setDates] = useState([]);
	const { getLocalStorage } = useLocalStorage('appointments', dates);

	useEffect(() => {
		document.title = 'Administrador de veterinaria';
		setDates((prevState) => getLocalStorage());
	}, []);

	function addDate(date) {
		setDates((prevState) => [...prevState, date]);
	}

	function removeDate(id) {
		setDates((prevState) => dates.filter((date) => date.id !== id));
	}

	return (
		<>
			<Heading title='Administrador de Pacientes de Veterinaria' />
			<main className='container'>
				<div className='row row--gutters'>
					<div className='col'>
						<AddAppointment
							title='Agrega tus citas aqui'
							addDate={addDate}
						/>
					</div>
					<div className='col'>
						<Appointments
							title={
								Array.isArray(dates) && dates.length === 0
									? 'No hay citas'
									: 'Administra tus citas aqui'
							}
							dates={dates}
							removeDate={removeDate}
						/>
					</div>
				</div>
			</main>
		</>
	);
}
