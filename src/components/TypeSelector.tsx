// React component to select between "Composto" and "Simples" interest types
// is a horizontal switch with two buttons

import React from "react";

const TypeSelector = ({ value, onChange }: {
	value: "Composto" | "Simples";
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			marginBottom: 20,
		}}>
			<strong>Tipo de juros:</strong>
			<div style={{
				display: 'flex',
				height: '2rem',
				gap: 5,
			}}>
				<button type="button" onClick={() => onChange({ target: { value: "Composto" } } as any)} style={{
					backgroundColor: value === "Composto" ? 'gray' : '#1a1a1a',
					padding: 0,
				}}>Composto</button>
				<button type="button" onClick={() => onChange({ target: { value: "Simples" } } as any)} style={{
					backgroundColor: value === "Simples" ? 'gray' : '#1a1a1a',
					padding: 0,

				}}>Simples</button>
			</div>
		</div>
	);
};

export default TypeSelector;