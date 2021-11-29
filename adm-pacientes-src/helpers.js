export function capitalizeString(str) {
	if (!isNaN(parseInt(str))) return str;

	const trimedStr = str.trim();
	return trimedStr[0].toUpperCase() + trimedStr.slice(1).toLowerCase();
}
export function checkInputs(values) {
	let errors = {};

	const setError = (field, msg) => {
		errors = {
			...errors,
			[field]: msg,
		};
	};

	if (!values.pet) setError('pet', 'Nombre de mascota requerido');
	if (!values.owner) setError('owner', 'Dueño requerido');
	if (!values.date) setError('date', 'Fecha requerida');
	if (!values.time) setError('time', 'Hora requerida');
	if (!values.description) setError('description', 'Descripcion requerida');

	return errors;
}
