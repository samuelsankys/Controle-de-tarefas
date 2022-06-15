# Controle de tarefas

A aplicação tem como propósito controlar as listas de atividades, definindo se essas atividades foram concluídas ou não.

Aplicação trata-se de um desafio de Desenvolvedor BackEnd Junior em NodeJs.

## Requisitos do desafio
- [x] O Front-end pode ser da sua escolha;
- [x] Utilizar NodeJS, para a criação do Back-end;
- [x] Ter os métodos index, get, create, update, delete;
- [x] Criar uma Base em SQL (MySQL ou PostgresSQL);
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar realizar a cópia do arquivo .env.developerment e renomeá-lo para .env

`PORT`

`DB_USER`

`DB_PASS`

`DB_NAME`

## Funcionalidades

- CRUD Título das atividades
- CRUD Atividades 

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/samuelsankys/Controle-de-tarefas.git
```
### Para iniciar o servidor

Entre no diretório do projeto

```bash
  cd controle-de-tarefas/server
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

#### Ou por docker-compose

Entre no diretório do projeto

```bash
  cd controle-de-tarefas
```
Inicie o docker-compose

```bash
  docker-compose up
```
##### Linux
Caso tenha algum erro com a inicialização do banco de dados pode estar relacionado com a porta do postgresql

Pode pausar o serviço na sua máquina local enquanto estiver rodando com o docker-compose

```bash
  service postgresql stop
```

### Para inicializar o frontend

Entre no diretório do projeto

```bash
  cd controle-de-tarefas/frontend
```

Instale as dependências

```bash
  npm install
```
Caso o Quasar não seja reconhecido instale

```bash
  npm i -g @quasar/cli
```

Inicie o Quasar

```bash
  quasar dev
```

## Stack utilizada

**Front-end:** Vue.Js, Quasar

**Back-end:** Node, Express

**Data Base:** PostgreSQL

## API
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=controle%20de%20tarefas&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fsamuelsankys%2FControle-de-tarefas%2Fdevelop%2FApi%2520insomnia.json)






