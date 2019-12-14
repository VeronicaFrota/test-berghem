## Test Berghem

- Este projeto foi criado com o Angular CLI versão 7.3.5<br/>
O projeto consiste em construir uma interface de visualização de ranking de jogadores, utilizar a API do jogo Clash of Clans (https://developer.clashofclans.com).


## Estrutura do Projeto
O projeto esta dividido em dois arquivos:
 - Front-End, no qual foi utilizado angular para o desenvolvimento da aplicação
 - Back-End, utilizado node.JS para consumir a API do jogo.


## Tecnologias
- Angular CLI  7.3.5
- Angular Material 8.2.3
- Flex Layout 7.0.0
- Node.JS 10.15.3

## Como instalar
Para que o projeto seja compilado é necessário seguir os seguintes passos:
- Front-End: Entrar no diretório contendo os arquivos do front-end (test-berghem) e executar o comando `npm install`</br>
- Back-End: Entrar no diretório contendo os arquivos do back-end (node-api) e executar o comando `npm install`</br>
Com este comando, nos seus respectivos diretórios, serão baixadas as dependências que ambos necessitam para seu funcionamento.


## Como Executar
Para que o projeto seja executado é necessário seguir os seguintes passos:
- Back-End: Entrar no diretório contendo os arquivos do back-end (node-api) e executar o comando `node server.js`, para inicializar o servidor.</br>

- Front-End: Entrar no diretório contendo os arquivos do front-end (test-berghem) e executar o comando `ng serve`.</br>
Depois acesse `http://localhost:4200/`. Execute `ng serve` para executar a versão de desenvolvimento.<br/>
Depois acesse `http://localhost:4200/players`

# Resultado final - Layout Responsivo
- <h3> Página de um Jogador Específico </h3>  
![player-form](https://user-images.githubusercontent.com/14812860/70838624-f6978f00-1de7-11ea-84d0-55984ea114af.png)
  Informações referentes a um player (jogador) especíco, contendo informações importantes sobre o mesmo, tais como, nome, tag, level, league, clan, clan level.


- <h3> Tabelas Específicas de um Jogador </h3>  
![player-table](https://user-images.githubusercontent.com/14812860/70838852-e633e400-1de8-11ea-8518-8e927efbb58a.png)
  Diferente tipo de tabelas contendo informações sobre Heroes(name, level, village), Troops(name, level, village) do jogador.
  
  
  - <h3> Página de um Clan Específico </h3>  
![clans-form](https://user-images.githubusercontent.com/14812860/70839010-8be75300-1de9-11ea-8500-a5805b5f9366.png)
  Informações referentes a um clan especíco, contendo informações importantes sobre o mesmo, tais como, tag, name, level, members, description.


- <h3> Tabelas Específicas de um Clan </h3>  
![clan-table](https://user-images.githubusercontent.com/14812860/70839077-e2549180-1de9-11ea-90ce-5bbf7f390c62.png)
  Tabelas contendo informações sobre os membros do clan, tais como, tag, name, league name, Trophies, Exp Level. Para esta tabela existe um campo de pesquisa, no qual é possível realizar a busca sobre informações contidas na tabela.
  
  
  - <h3> Tabelas de Ranking de Clans - com localização específica </h3>  
![ranking-table](https://user-images.githubusercontent.com/14812860/70839206-6444ba80-1dea-11ea-93dc-ea5c1fdb4d93.png)
  Tabelas contendo informações sobre clans(tais como, tag, name, location, members) em uma localização específica. Para esta tabela existe um campo de pesquisa, no qual é possível realizar a busca sobre informações contidas na tabela.
  
  
  
  

