# Dasa-front-end-simple-test

## Try

https://dasa-pokeapi.netlify.com/


## Installation

1. Download this repo.
2. Use the package manager [npm](https://www.npmjs.com/).
3. Inside project run npm install on terminal to install all dependencies.
```bash
npm install
```

## Usage

Inside project on terminal

```bash
npm start # build-in the project
npm test # run all tests
```
## API

[PokéAPI](https://pokeapi.co/)

### Endpoint
[https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon)


## Technologies
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[React](https://reactjs.org/)  
[Axios](https://github.com/axios/axios)  
[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)  
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)  
[HTML](https://devdocs.io/html/)  
[Eslint](https://eslint.org/)  
[Regular Expression](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)  
[Jest](https://jestjs.io/)

# Test introduction

### frontend-simple-test
Teste para avaliação do nível técnico para posição de frontend.


### PONTOS DE AVALIAÇÃO:
- Arquitetura do projeto;
- Qualidade de código;
- Consumo de API;
- Conhecimentos em manipulação de array e objetos com suas respectivas propriedades;
- Conhecimentos em HTML e CSS utilizados na estrutura da página (view);
- Bônus:
  - Estilização visual/estética da página (view).
  - Utilização de pré-processadores;
  - Implementação de teste(s);
  - Utilização de expressões regulares;
 
### OBJETIVO:
Criação de uma aplicação de uma lista, utilizando um framework SPA (Vue, React, Angular, etc) de sua escolha.
Esta aplicação deve consumir uma API, que contenha um array de objetos, sendo que cada objeto tenha ao menos duas propriedades:
Recomendação de API para consumo: https://pokeapi.co/
```
Exemplo: 
[
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  },
]
```
PS: Poderá ser utilizado a API de sua escolha ou a sugerida acima.

### ESPECIFICAÇÕES DA APLICAÇÃO
- O usuário deverá abrir a url e visualizar todos os itens consumidos pela API;
- O usuário deverá visualizar uma listagem filtrada dos itens ao digitar algo no campo de busca;
- [PLUS] O filtro de busca deve exibir itens que "correspondam" com o valor aproximado (ex: ao digitar no campo de busca a palavra 'blb', deve-se exibir os itens '' ).

Exemplo:
![Image](https://raw.githubusercontent.com/baesso/frontend-simple-test/master/notes01.png)
![Image](https://raw.githubusercontent.com/baesso/frontend-simple-test/master/notes02.png)

