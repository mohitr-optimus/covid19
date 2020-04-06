import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import covid from 'covidtracker';
import App from './App';
import runConsole from './common/consoleLog';

const axios = require('axios');

const axisosInstance = axios.create({
	baseURL: 'https://pomber.github.io/covid19/timeseries.json',
});
async function getUser() {
	try {
		const response = await axisosInstance.get();
		runConsole('log', response.data);
	} catch (error) {
		runConsole('error', error);
	}
}

getUser();
ReactDOM.render(<App />, document.getElementById('container'));
