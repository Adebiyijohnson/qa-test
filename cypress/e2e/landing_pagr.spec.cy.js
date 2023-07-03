// cypress/integration/landing_page_spec.js

describe('Landing Page', () => {
  it('displays the text "Hello World"', () => {
    cy.visit(' http://localhost:3000'); 
    cy.contains('Hello World').should('be.visible');
  });
});