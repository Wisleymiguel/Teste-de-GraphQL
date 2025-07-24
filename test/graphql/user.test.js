// test.js
const { spec } = require('pactum');

it('Listar GraphlqS', async () => {
    await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(
            `
      query {
        Users {
          email
          password
          id
        }
      }
    `
        )
        .expectStatus(200);
});
