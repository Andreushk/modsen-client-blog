const TEST_EMAIL = 'email@test.com';

describe('Subscribe form at the footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Validating entered email address', () => {
    cy.get('[data-testid="subscribe-form"]').within(() => {
      cy.get('button').click();
      cy.get('input').should('have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('input').clear().type(TEST_EMAIL);
      cy.get('input').should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
    });
  });

  it('Sending entered email address', () => {
    cy.get('[data-testid="subscribe-form"]').within(() => {
      cy.get('input').type(TEST_EMAIL);
      cy.get('input').should('not.have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('button').click();
      cy.get('button').should('have.attr', 'disabled');
    });
  });
});
