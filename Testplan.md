Descrição

Testes exploratórios funcionais com enfoque em verificar as funcionalidades de cálculo de juros composto e juros simples da aplicação Calculdora.



Pré condições
- Os casos de testes contém os passos para execução de cada cenário;
- Os casos de testes citados neste documento são os mesmos casos automatizados com os testes E2E com cypress;



Resultado esperado

Scenario 01- Validar se é possível realizar o cálculo de Juros Compostos;

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Composto"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo"
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo composto corretamente

Scenario 02- Validar se é possível realizar o cálculo de Juros Simples;

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Simples"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo"
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo Simples corretamente


Scenario 03- Validar cenario negativo onde o usuário tenta realizar calculos com valores ficticios de JUROS COMPOSTOS

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Composto"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo" com valores fictícios
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo de Juros Composto como NAN

Scenario 04- Validar cenario negativo onde o usuário tenta realizar calculos com valores ficticios de JUROS SIMPLES

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Simples"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo" com valores fictícios
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo de Juros Simples como NAN

Scenario 05- Validar cenario negativo onde o usuário tenta realizar calculos com valores ZERADOS de JUROS SIMPLES

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Simples"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo" com valor 0
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo de Juros Simples sendo 0

Scenario 06- Validar cenario negativo onde o usuário tenta realizar calculos com valores ZERADOS de JUROS COMPOSTO

Dado que eu estou na aplicação Calculadora
E seleciono a opção "Composto"
E preencho os campos "Valor inicial", "Taxa de Juros" e "Tempo" com valor 0
Quando clico no botão "Calcular" 
Então devo visualizar o resultado retornado do cálculo de juros Composto sendo 0


Ambiente

Local - Calculadora Khipo
