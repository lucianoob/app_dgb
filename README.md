# App DGB

Teste de um app para cadastro de compras com cahsback.

## Pré-Requisitos

Para rodar o projeto deve-se utilizar os seguintes requisitos:
- Nodejs 
- NPM
- MongoDB

## Componentes

Os principais componentes utilizados neste projeto são:

* App
	* Nodejs v10.20.1
	* NPM v6.14.4
	* MongoDB v3.6.8

* Backend (API)
	* axios v0.19.2
	* express v4.17.1
	* mongoose v5.9.12
	* jsonwebtoken v8.5.1
	* jest v26.0.1
	* supertest v4.0.2

* Frontend
	* react v16.13.1
	* react-bootstrap v1.0.1
	* react-router-dom v5.1.2
	* bootstrap v4.4.1
	* axios v0.19.2
	* react-fontawesome v0.1.9


## Instalação

Para instalar basta rodar os comandos abaixo, lembrando que é necessário ter todos os pré-requisitos instalados.
- npm i (montar o frontend)
- cd api && npm i (montar o backend)

## Execução

Neste projeto há várias formas de execução da aplicação permitindo executar as partes (frontend/backend) em conjunto ou isoladamente.

* Executar aplicação (frontend/backend) em Modo Desenvolvimento
	* npm run start (frontend/backend) 
	* Para backend acesse [http://localhost:8000](http://localhost:8000)
	* Para frontend acesse [http://localhost:3000](http://localhost:3000)

* Executar aplicação (frontend/backend) em Modo Produção
	* npm run build (frontend/backend) 
	* Para backend acesse [http://localhost:8000](http://localhost:8000)
	* Para frontend acesse [http://localhost:8000](http://localhost:8000)

* Executar api (backend) em Modo Produção
	* npm run api-start (backend) 
	* Para backend acesse [http://localhost:8000](http://localhost:8000)

## Funcionalidades

Este teste tem as seguintes funcionalidades:
- Foi desenvolvida uma API totalmente isolada do frontend;
- Para permitir a execução inicial alguns dados (revendedor master, bonificações, administrador) são inseridos por padrão;
- Esta aplicação utiliza a autenticação com JWT, sendo o token salvo em cookie e a sessão salva em banco de dados (MongoDB);
- A aplicação foi pensada de forma responsiva e com um visual simples mais funcional;
- As rotas da aplicação frontend (ReactJS) são controladas de forma independente das rotas de backend (API);
- A aplicação frontend foir desenvolvida em componentes;
- A aplicação frontend utiliza o empacotamento por Lazy (Code-Splitting);

Obs.: Algumas configurações podem ser alteradas no arquivo **'api/libs/configs'**.

## Testes

Toda a camada da API possui testes e este podem ser executados com o comando abaixo:
- cd api && npm run tests

Obs.: Os testes inserem dados em todas as tabelas porém estes dados são removidos ao final de cada teste, sendo isso parte do teste da API.

## Telas

### Tela de Login
![Tela de Login](/images/app_dgb01.png)

### Tela Principal
![Tela Principal](/images/app_dgb02.png)

### Tela de Cahsback
![Tela  de Cahsback](/images/app_dgb03.png)

### Tela de Compras
![Tela  de Compras](/images/app_dgb04.png)