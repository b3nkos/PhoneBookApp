describe('Contact List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Load contact list from web service API', () => {
    cy.get('[data-test-id="contact-list-container"]').find('.box').each(element => {
      cy.wrap(element)
        .find('article')
        .should('have.class', 'media');
    });
  });
});
