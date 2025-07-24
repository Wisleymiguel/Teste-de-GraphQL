// test/api/user.test.js

const { spec, request } = require('pactum');

describe('API – Usuários', () => {
  // Define a URL base para todas as requisições
  request.setBaseUrl('http://lojaebac.ebaconline.art.br');

  let token;

  // Antes de todos os testes, autentica e salva o token
  before(async () => {
    token = await spec()
      .post('/public/authUser')
      .withJson({
        email: 'admin@admin.com',
        password: 'admin123'
      })
      .expectStatus(200)
      .returns('data.token');
  });

  it('deve retornar status 200 na listagem de usuários', async () => {
    await spec()
      .get('/api/getUsers')
      .withHeaders({ authorization: token })
      .expectStatus(200);
  });
});
