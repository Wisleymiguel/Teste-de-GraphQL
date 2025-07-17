// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
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
