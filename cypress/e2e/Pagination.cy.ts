describe('Pagination functionality at the Category page', () => {
  it('Pagination functionality', () => {
    const AMOUNT_OF_PAGES = 4;
    cy.visit('/en/blog');

    cy.get('[data-testid="pagination-buttons"]').within(() => {
      cy.get('button').eq(0).should('have.attr', 'disabled');
      cy.get('button').eq(1).click();

      cy.get('button').eq(0).should('not.have.attr', 'disabled');
      cy.get('button').eq(0).click();
      cy.get('button').eq(0).should('have.attr', 'disabled');

      for (let i = 0; i < AMOUNT_OF_PAGES - 1; ) {
        cy.get('button').eq(1).click();
        i += 1;
      }

      cy.get('button').eq(1).should('have.attr', 'disabled');
    });
  });
});
