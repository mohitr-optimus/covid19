import deparam from 'deparam.js';

function queryParams(key) {
	const qsObject = deparam(window.location.search);
	if (typeof key === 'string') {
		return qsObject[key];
	}

	return qsObject;
}

export { queryParams };
export default queryParams;
