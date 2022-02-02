export default function Spinner({ size = 'default' }) {
	const sizes = {
		lg: 'spinner spinner--lg',
		default: 'spinner',
	};

	if (!sizes[size]) throw new RangeError(`Spinner size:"${size}, not valid"`);

	const spinnerClassName = `${sizes[size]}`;

	return <div className={spinnerClassName}></div>;
}
