import React from 'react';
import { Heading } from 'bloomer';

export default function LegendCircleJSX({ legendCircleStyle, type, color }) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginRight: 24,
			}}
		>
			<div style={legendCircleStyle(color)} />
			<Heading style={{ marginBottom: 0 }}>{type}</Heading>
		</div>
	);
}
