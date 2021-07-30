describe('Contact Creation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Create new contact', () => {
    cy.get('[data-test-id="contact-create-button"]').click();
    cy.get('[data-test-id="contact-name"]').type('John Doe');
    cy.get('[data-test-id="contact-email"]').type(`johndoe${Date.now().toString()}@gmail.com`);
    cy.get('[data-test-id="contact-phone"]').type(Date.now().toString());
    cy.get('[data-test-id="contact-save-button"]').click();
    cy.get('div.notification').should('have.class', 'is-primary');
    cy.get('div.notification').contains('Contact John Doe was created.');
  });

  it('Update exist contact', () => {
    cy.get('[data-test-id="contact-list-container"]')
      .find('.box')
      .eq(0)
      .click()
    cy.get('[data-test-id="contact-save-button"]').click();
    cy.get('div.notification').should('have.class', 'is-primary');
    cy.get('div.notification').contains(`was updated.`);
  });

  it('Delete existing contact', () => {
    cy.get('[data-test-id="contact-list-container"]')
      .find('.box')
      .eq(0)
      .find('button.delete')
      .click()

    cy.on('window:confirm', () => true);

    cy.get('[data-test-id="contact-list-container"]').find('.box').each(element => {
      cy.wrap(element)
        .find('article')
        .should('have.class', 'media');
    });
  });
});
