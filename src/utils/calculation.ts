export const calcularJurosCompostos = (valorInicial: number, taxaJuros: number, tempo: number) => {
	return valorInicial * Math.pow(1 + taxaJuros, tempo);
};

export const calcularJurosSimples = (valorInicial: number, taxaJuros: number, tempo: number) => {
	return valorInicial * (1 + taxaJuros * tempo);
}