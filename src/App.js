import React from 'react';
import { Container, Heading, Subtitle } from 'bloomer';
import 'bulma/css/bulma.css';
import Drawer from './components/Drawer';

const dataProvider = 'https://github.com/CSSEGISandData/COVID-19';
const dataParser = 'https://github.com/pomber/covid19';

function App() {
	return (
		<div className='App'>
			<Container
				style={{
					paddingTop: 12,
				}}
				hasTextAlign='centered'
			>
				<Heading
					style={{
						fontSize: 24,
						letterSpacing: -1,
					}}
				>
					<b> the Curve </b>
				</Heading>{' '}
				<Subtitle
					isSize={6}
					style={{
						marginBottom: 0,
					}}
				>
					live data per country: related to Covid - 19 diagnosis, recovery and death <br />
					updated thrice a day{' '}
				</Subtitle>{' '}
				<Drawer />
				<Container
					style={{
						padding: 48,
						lineHeight: 2,
						maxWidth: 720,
					}}
				>
					<p
						style={{
							fontSize: 14,
							lineHeight: 1.2,
							marginBottom: 24,
						}}
					>
					</p>{' '}
					<p>
						Data retrieved from <a href={dataProvider}> Johns Hopkins </a> via{' '}
						<a href={dataParser}> @pomber </a> <br />
					</p>{' '}
				</Container>
			</Container>
		</div>
	);
}

export default App;
