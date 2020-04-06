import { queryParams } from './common';

export default function runConsole(type, ...args) {
	try {
		// Enable logs if debug param is provided
		if (queryParams('debug')) {
			if (args.length) {
				if (args.length === 1) {
					console[type](args[0]); // eslint-disable-line no-console
				} else {
					console[type](Array.prototype.slice.call(args).slice(0)); // eslint-disable-line no-console
				}
			}
		}
	} catch (e) {
		console.log(e); // eslint-disable-line no-console
	}
}
