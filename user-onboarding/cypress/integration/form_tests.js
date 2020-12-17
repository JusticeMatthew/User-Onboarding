/*global cy*/
/// <reference types="Cypress" />

describe('User-onboarding app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const nameInput = () => cy.get('[name="name"]');
  const emailInput = () => cy.get('[name="email"]');
  const passwordInput = () => cy.get('[name="pass"]');
  const tosCheckBox = () => cy.get('[name="tos"]');
  const addButt = () => cy.get('button');

  it('Sanity Check', () => {
    expect(2 + 2).to.equal(4);
  });

  it('everything set to initial form value', () => {
    (nameInput() && emailInput() && passwordInput()).should('have.value', '');
  });
});
