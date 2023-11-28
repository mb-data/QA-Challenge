export const calcularJurosCompostos = (valorInicial: number, taxaJuros: number, tempo: number) => {
	return valorInicial * Math.pow(1 + taxaJuros, tempo);
};

export const calcularJurosSimples = (valorInicial: number, taxaJuros: number, tempo: number) => {
	return valorInicial * (1 + taxaJuros * tempo);
}

describe('calcularJurosCompostos', () => {
  test('calcula corretamente os juros compostos', () => {
    // Seus testes aqui
    expect(calcularJurosCompostos(1000, 0.05, 2)).toBeCloseTo(1102.5, 2);
  });

  // Adicione mais testes conforme necessário
});

describe('calcularJurosSimples', () => {
  test('calcula corretamente os juros simples', () => {
    // Seus testes aqui
    expect(calcularJurosSimples(1000, 0.05, 2)).toBe(1100);
  });

  // Adicione mais testes conforme necessário
});