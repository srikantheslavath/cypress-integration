
import { API_URL, API_AUTH_TOKEN } from '../ApiConfig';
describe('GraphQL API Testing', () => {
    it('Create todos', () => {
      cy.readFile('cypress/ApiData/DemoQuery.graphql').then((getgraphql) => {
        cy.readFile('cypress/ApiData/DemoVariables.json').then((getVariables) => {
          cy.request({
            method: 'POST',
            url:API_URL ,
            headers: {
              'Authorization': API_AUTH_TOKEN
            },
            body: {
              query: getgraphql,
              variables: getVariables
            }
          }).then(response => {
            cy.log(response.body); 
            expect(response.status).to.eq(200);
        
          });
        });
      });
    });
  
})