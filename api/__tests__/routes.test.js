const request = require('supertest');
const faker = require('faker');
const CPF = require('cpf');
const utils = require('../libs/utils.js');
const server = require('../server.js');
const AdministradoresDefaultPath = '../models/Administradores/default.json';

var AdministradoresDefault = null;
var token = null;

faker.locale = 'pt_BR';

beforeAll(async () => {
   AdministradoresDefault = require(require.resolve(AdministradoresDefaultPath));
   utils.log('Routes Tests', 'prepare tests...');
});

afterAll(() => {
   utils.log('Routes Tests', 'closing tests...');
   server.close();
});

describe('Routes Tests: initializing server tests...', () => {
   test('Routes Tests: check server', async () => {
      const response = await request(server).get('/');
      expect(response.status).toEqual(200);
      expect(response.text).toContain('App init!');
   });
});

describe('Routes Tests: initializing login tests...', () => {
   test('Routes Tests: API login', async () => {
      const data = {usuario: AdministradoresDefault[0].email, senha: AdministradoresDefault[0].senha};
      const response = await request(server).post('/api/v1/login').type('form').send(data);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      const cookies = response.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
      token = cookies.join(';');
   });
});

describe('Routes Tests: initializing administradores tests...', () => {
   let data_id = null;
   test('Routes Tests: API list administradores', async () => {
      const response = await request(server).get('/api/v1/administradores').set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(Array.isArray(json.data)).toEqual(true);
   });

   test('Routes Tests: API insert administradores', async () => {
      const data = {nome: faker.name.firstName()+' '+faker.name.lastName(), email: faker.internet.email(), senha: faker.internet.password()};
      const response = await request(server).post('/api/v1/administradores').type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      data_id = json.data._id.toString();
   });

   test('Routes Tests: API get administradores', async () => {
      const response = await request(server).get('/api/v1/administradores/'+data_id).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(json.data._id).toEqual(data_id);
   });
   
   test('Routes Tests: API update administradores', async () => {
      const data = {nome: faker.name.firstName()+' '+faker.name.lastName(), email: faker.internet.email(), senha: faker.internet.password()};
      const response = await request(server).post('/api/v1/administradores/'+data_id).type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });
   
   /*test('Routes Tests: API delete administradores', async () => {
      const response = await request(server).post('/api/v1/administradores/delete/'+data_id);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });*/
});

describe('Routes Tests: initializing bonificacao tests...', () => {
   let data_id = null;
   test('Routes Tests: API list bonificacao', async () => {
      const response = await request(server).get('/api/v1/bonificacao').set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(Array.isArray(json.data)).toEqual(true);
   });

   test('Routes Tests: API insert bonificacao', async () => {
      const data = {titulo: faker.random.words(), cashback: faker.random.number(), valor_inicial: faker.commerce.price(), valor_final: faker.commerce.price()};
      const response = await request(server).post('/api/v1/bonificacao').type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      data_id = json.data._id.toString();
   });

   test('Routes Tests: API get bonificacao', async () => {
      const response = await request(server).get('/api/v1/bonificacao/'+data_id).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(json.data._id).toEqual(data_id);
   });
   
   test('Routes Tests: API update bonificacao', async () => {
      const data = {titulo: faker.random.words(), cashback: faker.random.number(), valor_inicial: faker.commerce.price(), valor_final: faker.commerce.price()};
      const response = await request(server).post('/api/v1/bonificacao/'+data_id).type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });
   
   test('Routes Tests: API delete bonificacao', async () => {
      const response = await request(server).post('/api/v1/bonificacao/delete/'+data_id).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });
});

describe('Routes Tests: initializing revendedores tests...', () => {
   let data_id = null;
   test('Routes Tests: API list revendedores', async () => {
      const response = await request(server).get('/api/v1/revendedores').set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(Array.isArray(json.data)).toEqual(true);
   });

   test('Routes Tests: API insert revendedores', async () => {
      const data = {nome: faker.name.firstName()+' '+faker.name.lastName(), cpf: CPF.generate(false), email: faker.internet.email(), senha: faker.internet.password()};
      const response = await request(server).post('/api/v1/revendedores').type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      data_id = json.data._id.toString();
   });

   test('Routes Tests: API get revendedores', async () => {
      const response = await request(server).get('/api/v1/revendedores/'+data_id).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(json.data._id).toEqual(data_id);
   });
   
   test('Routes Tests: API update revendedores', async () => {
      const data = {nome: faker.name.firstName()+' '+faker.name.lastName(), cpf: CPF.generate(false), email: faker.internet.email(), senha: faker.internet.password()};
      const response = await request(server).post('/api/v1/revendedores/'+data_id).type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });
   
   /*test('Routes Tests: API delete revendedores', async () => {
      const response = await request(server).post('/api/v1/revendedores/delete/'+data_id);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });*/
});

describe('Routes Tests: initializing compras tests...', () => {
   let data_id = null;
   test('Routes Tests: API list compras', async () => {
      const response = await request(server).get('/api/v1/compras').set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(Array.isArray(json.data)).toEqual(true);
   });

   test('Routes Tests: API insert compras', async () => {
      const data = {revendedor: CPF.generate(false), codigo: faker.finance.currencyCode(), valor: faker.commerce.price(), data: faker.date.past()};
      const response = await request(server).post('/api/v1/compras').type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      data_id = json.data._id.toString();
   });

   test('Routes Tests: API get compras', async () => {
      const response = await request(server).get('/api/v1/compras/'+data_id).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
      expect(json.data._id).toEqual(data_id);
   });
   
   test('Routes Tests: API update compras', async () => {
      const data = {revendedor: CPF.generate(false), codigo: faker.finance.currencyCode(), valor: faker.commerce.price(), data: faker.date.past()};
      const response = await request(server).post('/api/v1/compras/'+data_id).type('form').send(data).set('Cookie', token);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });
   
   /*test('Routes Tests: API delete compras', async () => {
      const response = await request(server).post('/api/v1/compras/delete/'+data_id);
      expect(response.status).toEqual(200);

      const json = JSON.parse(response.text);
      expect(json.status).toEqual('ok');
   });*/
});