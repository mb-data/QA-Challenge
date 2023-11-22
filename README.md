# QA Challenge Khipo

Esse desafio tem como objetivo avaliar o conhecimento técnico do candidato, bem como suas habilidades de análise e resolução de problemas relacionados a testes de software. Nesse teste devem ser utilizadas as seguintes ferramentas:

- React + Vite (Entregue)
- Storybook
- Cypress para E2E tests
- Jest + React Testing Library ou similar para Unit Tests

## Aplicação

Essa aplicação é uma simples calculadora de juros, que consegue calcular o valor final de um investimento com base no valor inicial, taxa de juros e período de tempo. Ela consegue calcular juros simples e compostos, usando funções diferentes para cada um.

A aplicação é composta por 4 componentes:

- Input: Componente de input de valores
- Output: Componente de output de valores
- TypeSelector: Componente de seleção de tipo de juros
- Calculator: Componente de calculadora, que usa os outros componentes para calcular o valor final

## Desafio

Nesse desafio você deve executar as seguintes tarefas:

- [ ] Criar um Storybook para os componentes Input, Output, TypeSelector e Calculator
- [ ] Criar testes unitários para os componentes Input, Output, TypeSelector e Calculator usando Jest + React Testing Library ou similar
- [ ] Criar teste unitários para as funções de cálculo de juros simples e compostos que estão em `src/utils/calculation.ts`
- [ ] Criar testes E2E para a aplicação usando Cypress
- [ ] Criar um documento de teste de QA com os cenários de teste da aplicação. Esse documento deve conter os cenários de teste, os passos para executar cada cenário e o resultado esperado de cada cenário

## Adicionais

Esses itens não são obrigatórios, mas serão considerados como diferenciais:

- [ ] Criar um pipeline de Github Actions ou Pre-commit/Husky para rodar os testes unitários e E2E
- [ ] Adicionar qualquer outro tipo de ferramenta de teste que não esteja listada no desafio, como por exemplo, testes de performance ou testes de acessibilidade
