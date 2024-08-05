describe('Contact form at the Contact us page', () => {
  beforeEach(() => {
    cy.visit('/en/contact-us');
  });

  it('Validating entered information', () => {
    cy.get('[data-testid="contact-form"]').within(() => {
      cy.get('button').click();

      cy.get('input').eq(0).should('have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('input').eq(1).should('have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('textarea').should('have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('span').eq(0).should('contain', 'This is required field');
      cy.get('span').eq(1).should('contain', 'This is required field');
      cy.get('span').eq(2).should('contain', 'This is required field');

      cy.get('input').eq(0).type('A').blur();
      cy.get('span').eq(0).should('contain', 'Must be at least two characters');

      cy.get('input').eq(0).clear().type('Test Name');
      cy.get('input').eq(1).type('email@test.com');
      cy.get('textarea').type('Some test message typed from Cypress test!');

      cy.get('input').eq(0).should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('input').eq(1).should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('textarea').should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
    });
  });

  it('Sending entered information information', () => {
    cy.intercept(
      { url: 'https://api.emailjs.com/api/v1.0/email/send' },
      { fixture: 'emailjs.json' },
    );

    cy.get('[data-testid="contact-form"]').within(() => {
      cy.get('input').eq(0).type('Test Name');
      cy.get('input').eq(1).type('email@test.com');
      cy.get('textarea').type('Some test message typed from Cypress test!');

      cy.get('input').eq(0).should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('input').eq(1).should('not.have.css', 'border-color', 'rgb(255, 0, 0)');
      cy.get('textarea').should('not.have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('button').click();
      cy.get('[data-testid="form-message"]').should('exist');
    });
  });
});
