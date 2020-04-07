import React from 'react';
import LegendCircleJSX from './LegendCircle';

const legendCircleStyle = (color) => ({
	width: 12,
	height: 12,
	borderRadius: '50%',
	backgroundColor: color,
	marginRight: 4,
});

export default function LegendCircle({ type, color }) {
	return <LegendCircleJSX legendCircleStyle={legendCircleStyle} type={type} color={color} />;
}
