export function formatPrice(number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100); // because we use cents (round numbers)
}

export function createError(location, type, msg) {
	return JSON.stringify({ location, type, msg });
}

export function formatError(e) {
	return JSON.parse(e.message);
}
