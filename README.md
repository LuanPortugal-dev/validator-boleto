# **Boleto-validator**

> ## Feature
<br />

- [x] Validar boleto do tipo bancário
  - [X] Validar o boleto 
  - [X] Validações dos DV 
  - [X] Obter de valor
  - [X] Formatar data
  - [X] Transformar em número do código de barra
  - [X] Testes unitários

<br />

- [x]  Validar boleto do tipo convênio
  - [X] Validações do boleto
  - [X] Calculo de valor
  - [X] Transformar em número do código de barra
  - [X] Testes unitários

<br />

- [X] Erro customizado para as validações

---
> ## Executar API
<br />

Para instalar as dependências, no teu console de preferência:
 ```bash
  1- yarn install
  2- yarn build  
  3- yarn start
  OU
  1- yarn install
  2- yarn dev
  ```
> ## Como executar o projeto com docker:
<br />

  Com o docker instalado e configurado no computador:
  ```bash
  yarn docker:start
  ```
> ## Como executar os testes:
<br />

  Com o docker instalado e configurado no computador:
  ```bash
  yarn test
  yarn coverage
  ```

