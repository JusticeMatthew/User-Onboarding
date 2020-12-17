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

  it('Tester Test', () => {
    expect(1 + 1).to.equal(2);
  });

  it('Adding a new user', () => {
    nameInput().type('Test Testerson');
    nameInput().should('have.value', 'Test Testerson');
    emailInput().type('testemail@email.com');
    emailInput().should('have.value', 'testemail@email.com');
    passwordInput().type('testpass');
    passwordInput().should('have.value', 'testpass');
    tosCheckBox().check();
    addButt().click();
    cy.contains('Test Testerson');
    // Stretch - I noticed a huge issue with many peoples inputs not clearing on submit :D
    (nameInput() && emailInput() && passwordInput()).should('have.value', '');
    tosCheckBox().should('not.be.checked');
  });

  it('Validation tests', () => {
    nameInput().type('Test Testerson');
    nameInput().clear();
    cy.get('.nameError').should('be.visible');
    emailInput().type('nottestemail');
    cy.get('.emailError').should('be.visible');
    emailInput().clear();
    cy.get('.emailError').should('be.visible');
    passwordInput().type(':(');
    cy.get('.passwordError').should('be.visible');
    passwordInput().type('1234567890123456');
    cy.get('.passwordError').should('be.visible');
    passwordInput().clear();
    cy.get('.passwordError').should('be.visible');
    addButt().should('be.disabled');
  });
});
