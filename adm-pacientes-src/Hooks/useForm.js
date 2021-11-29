import { useEffect, useState } from 'react';
import { checkInputs } from '../helpers';

export default function useForm(callback) {
	const [form, setForm] = useState(null);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [values, setValues] = useState({
		id: '',
		pet: '',
		owner: '',
		date: '',
		time: '',
		description: '',
	});

	useEffect(() => {
		// when errors object change calls the callback
		if (Object.entries(errors).length === 0 && isSubmitting) {
			callback(values);
			form.reset();
		}
	}, [errors]);

	function handleChange(e) {
		const { name, value } = e.target,
			id = Date.now().toString(16);

		setValues((prevState) => ({
			...prevState,
			id,
			[name]: value.trim(),
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		// when submit checks if have error only
		setErrors((prevState) => checkInputs(values));
		setIsSubmitting((prevState) => true);
		setForm((prevState) => e.target);
	}

	return {
		errors,
		handleChange,
		handleSubmit,
	};
}
