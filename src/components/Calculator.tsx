import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { calcularJurosCompostos, calcularJurosSimples } from "../utils/calculation";
import TypeSelector from "./TypeSelector";


const Calculator = () => {
	const [valorInicial, setValorInicial] = useState("");
	const [taxaJuros, setTaxaJuros] = useState("");
	const [tempo, setTempo] = useState("");
	const [tipo, setTipo] = useState<'Composto' | 'Simples'>("Composto");

	const [resultado, setResultado] = useState(0);

	const calcular = () => {
		let calculo = 0;
		if (tipo === 'Composto') {
			calculo = calcularJurosCompostos(
				parseFloat(valorInicial),
				parseFloat(taxaJuros),
				parseFloat(tempo)
			);
		} else {
			calculo = calcularJurosSimples(
				parseFloat(valorInicial),
				parseFloat(taxaJuros),
				parseFloat(tempo)
			);
		};

		setResultado(calculo);
	};

	return (
		<div>

			<TypeSelector value={tipo} onChange={(e) => setTipo(e.target.value as 'Composto' | 'Simples')} />

			<Input
				label="Valor inicial"
				placeholder="R$1000"
				onChange={(e) => setValorInicial(e.target.value)}
			/>
			<Input
				label="Taxa de juros"
				placeholder="0.1"
				onChange={(e) => setTaxaJuros(e.target.value)}
			/>
			<Input
				label="Tempo"
				placeholder="5 anos"
				onChange={(e) => setTempo(e.target.value)}
			/>


			<button type="button" onClick={calcular}>Calcular</button>
			<br></br>
			<Output
				value={resultado}
			/>
		</div>
	);
};



export default Calculator;