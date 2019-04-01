function toString(value) {
	return value + ''
}

export function format1(date) {
	const year = date.getFullYear();
	const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hours = toString(hours).padStart(2, '0');
	minutes = toString(minutes).padStart(2, '0');
	seconds = toString(seconds).padStart(2, '0');

	return year + '-' + month + '-' + day + ` ${hours}:${minutes}:${seconds}`
}