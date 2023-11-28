import React from "react";

const Output = ({ value }: {
	value: number;
}) => {
	return (
		<div style={{
			display: 'flex',
			gap: 5,
		}}>
			<p><strong>Resultado:</strong></p>
			<p>{value}</p>
		</div >
	);
};

export default Output;