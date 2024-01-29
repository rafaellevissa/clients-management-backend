# Clients Management Backend

## Requirements

Before getting started, make sure you have Docker and Docker Compose installed on your machine.

- Docker: [Docker Installation](https://docs.docker.com/get-docker/)
- Docker Compose: [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Settings

1. Clone the repository to your local machine.
2. Create a `.env` file in the project's root directory with the necessary variables. An example can be found in the `.env.example` file.

## Initialization

To start the application, follow these steps:

1. Open a terminal in the project's root directory.
2. Execute the following command to start the Docker containers:

```
docker-compose up -d
```

This will start the application, and you can access it through the browser at [http://localhost:3000](http://localhost:3000).

## Additional Notes

- Ensure that the necessary ports are available and not being used by other services.

To stop the application, use the following command:

```
docker-compose down
```

## Escopo do desafio:

Requisito
Sistema de Gerenciamento de Clientes
Parte 1
Uma empresa que realiza limpeza em residências enfrenta desafios no gerenciamento de seus clientes e busca uma solução eficiente para cadastrar e visualizar as informações que hoje são controladas em planilhas. Para centralizar as informações e ajudar na expansão da empresa, ela deseja uma plataforma onde seja possível gerenciar os seus clientes. O sistema deve ser composto por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

A empresa utiliza as seguintes informações para gerenciar seus clientes: nome, email e telefone.

Na plataforma criada deve ser possível:
Listar os seus clientes e filtrar com base nas informações cadastradas
Cadastrar clientes novos
Parte 2
Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância possível.

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.

