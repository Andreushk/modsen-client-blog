describe('Modal window with video about us', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Open and close at large screens', () => {
    cy.get('[data-testid="video-button"]').within(() => {
      cy.get('button').click();
    });
    cy.get('[data-testid="video-container"]').within(() => {
      cy.get('video').should('exist');
    });

    cy.get('[data-testid="overlay"]').click('topRight');
    cy.get('video').should('not.exist');
  });

  it('Open and close at small screens', () => {
    cy.viewport('iphone-x');

    cy.get('[data-testid="burger-menu-button"]').click();

    cy.get('[data-testid="video-button"]').within(() => {
      cy.get('button').click();
    });
    cy.get('[data-testid="video-container"]').within(() => {
      cy.get('video').should('exist');
    });

    cy.get('[data-testid="overlay"]').eq(1).click('topRight');
    cy.get('video').should('not.exist');
  });
});
