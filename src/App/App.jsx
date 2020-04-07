import React from 'react';
import { Container, Heading, Subtitle } from 'bloomer';
import 'bulma/css/bulma.css';
import Drawer from '../components/Drawer';

export default function AppJSX({ dataProvider, dataParser }) {
	return (
		<div className='App'>
			<Container style={{ paddingTop: 12 }} hasTextAlign='centered'>
				<Heading style={{ fontSize: 24, etterSpacing: -1 }}>
					<b> the Curve </b>
				</Heading>
				<Subtitle isSize={6} style={{ marginBottom: 0 }}>
					live data per country: related to Covid - 19 diagnosis, recovery and death
					<br />
					updated thrice a day
				</Subtitle>
				<Drawer />
				<Container style={{ padding: 48, lineHeight: 2, maxWidth: 720 }}>
					<p style={{ fontSize: 14, lineHeight: 1.2, marginBottom: 24 }}>
						Data retrieved from
						<a href={dataProvider}> Johns Hopkins </a>
						<a href={dataParser}> @pomber </a>
					</p>
				</Container>
			</Container>
		</div>
	);
}
