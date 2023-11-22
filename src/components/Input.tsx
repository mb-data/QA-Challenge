import React, { useState } from "react";

const Input = ({ label, placeholder, onChange }: {
	label: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}) => {
	const [valor, setValor] = useState("");

	return (
		<div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', gap: 5 }}>
			<label htmlFor="valorInicial" style={{
				flex: 1,
			}}>
				{label}
			</label>
			<input
				id="valorInicial"
				type="text"
				placeholder={placeholder}
				value={valor}
				style={{
					flex: 1,
				}}
				onChange={(e) => {
					setValor(e.target.value);
					onChange(e);
				}}
			/>
		</div>
	);
};

export default Input;