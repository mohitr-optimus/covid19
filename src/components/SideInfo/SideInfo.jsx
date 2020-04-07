import React from 'react';
import { Heading, Subtitle } from 'bloomer';

export default function SideInfoJSX({ upText, center, downText }) {
	return (
		<Subtitle
			style={{
				flexBasis: 120,
				flexGrow: 2,
				marginBottom: 0,
				textAlign: 'right',
				padding: 24,
			}}
		>
			{upText}
			<Heading
				style={{
					fontSize: '2rem',
				}}
			>
				<b> {center} </b>
			</Heading>
			{downText}
		</Subtitle>
	);
}
