import React from 'react';
import AppJSX from './App';

const dataProvider = 'https://github.com/CSSEGISandData/COVID-19';
// eslint-disable-next-line no-underscore-dangle
const dataParser = `https://github.com/pomber/covid19?v=${window.__version__}`;

export default function App() {
	return <AppJSX dataProvider={dataProvider} dataParser={dataParser} />;
}
