describe('Post search functionality at the Category page', () => {
  it('Post search functionality', () => {
    cy.visit('/');

    cy.get('[data-testid="categories"]').within(() => {
      cy.get('a').eq(0).click();
    });

    cy.get('[data-testid="blog-category-hero"]').should('exist');
    cy.get('[data-testid="search-input"]').type("something that doesn't exist");

    cy.contains('h4', 'Unfortunately, no results were found that match your selected filters :/');

    cy.get('[data-testid="search-input"]').clear();
    cy.get('article').should('exist');
  });
});
