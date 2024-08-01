describe('Language change functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Changing language using language select from header', () => {
    cy.contains('p', 'Posted on');
    cy.get('[data-testid="language-select"]').select(1);
    cy.contains('p', 'Опублекованно на');
  });

  it('Changing language using language select from mobile menu', () => {
    cy.viewport('iphone-x');
    cy.contains('p', 'Posted on');
    cy.get('[data-testid="burger-menu-button"]').click();
    cy.get('[data-testid="language-select"]').select(1);
    cy.contains('p', 'Опублекованно на');
  });
});
