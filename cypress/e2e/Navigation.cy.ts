describe('Navigation functionality (routing)', () => {
  beforeEach(() => {
    cy.visit('./');
    cy.get('[data-testid="home-hero"]').should('exist');
  });

  it('Header navigation work correctly', () => {
    cy.get('[data-testid="header-navigation"]').within(() => {
      cy.get('nav').contains('a', 'Blog').click();
    });

    cy.get('[data-testid="featured-post"]').should('exist');

    cy.get('[data-testid="header-navigation"]').within(() => {
      cy.get('nav').contains('a', 'About us').click();
    });

    cy.get('[data-testid="about-us-header"]').should('exist');

    cy.get('[data-testid="header-navigation"]').within(() => {
      cy.get('nav').contains('a', 'Contact us').click();
    });

    cy.get('[data-testid="contact-form"]').should('exist');
    cy.get('[data-testid="contact-us-heading"]').should('exist');
  });

  it('Footer navigation work correctly', () => {
    cy.get('[data-testid="footer-navigation"]').within(() => {
      cy.get('nav').contains('a', 'Blog').click();
    });

    cy.get('[data-testid="featured-post"]').should('exist');

    cy.get('[data-testid="footer-navigation"]').within(() => {
      cy.get('nav').contains('a', 'About us').click();
    });

    cy.get('[data-testid="about-us-header"]').should('exist');

    cy.get('[data-testid="footer-navigation"]').within(() => {
      cy.get('nav').contains('a', 'Contact us').click();
    });

    cy.get('[data-testid="contact-form"]').should('exist');
    cy.get('[data-testid="contact-us-heading"]').should('exist');

    cy.get('[data-testid="footer-navigation"]').within(() => {
      cy.get('nav').contains('a', 'Privacy Policy').click();
    });

    cy.get('[data-testid="privacy-policy-header"]').should('exist');
  });

  it('Mobile navigation work correctly', () => {
    cy.viewport('iphone-x');

    cy.get('[data-testid="burger-menu-button"]').click();
    cy.get('[data-testid="overlay"]').should('exist');
    cy.get('[data-testid="mobile-menu-close-button"]').should('exist');

    cy.get('[data-testid="mobile-menu"]').within(() => {
      cy.get('nav').contains('a', 'Blog').click();
    });
    cy.get('[data-testid="overlay"]').should('not.exist');

    cy.get('[data-testid="featured-post"]').should('exist');

    cy.get('[data-testid="burger-menu-button"]').click();
    cy.get('[data-testid="mobile-menu"]').within(() => {
      cy.get('nav').contains('a', 'About us').click();
    });

    cy.get('[data-testid="about-us-header"]').should('exist');

    cy.get('[data-testid="burger-menu-button"]').click();
    cy.get('[data-testid="mobile-menu"]').within(() => {
      cy.get('nav').contains('a', 'Contact us').click();
    });

    cy.get('[data-testid="contact-form"]').should('exist');
    cy.get('[data-testid="contact-us-heading"]').should('exist');
  });
});
