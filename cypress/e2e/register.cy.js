import 'cypress-file-upload'
describe('Register with correct credentials', () => {
  it('passes', () => {
    cy.visit('https://kind-gray-bluefish-tie.cyclic.app/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.contains("Don't have an account yet?").click()
  
    cy.get('[name$=name]').type('razaa')
    cy.get('[name$=email]').type('raza1233334@gmail.com')
    cy.get('[name$=password]').type('raza123456')
    cy.get('[value$=user]').click()
    cy.get('input[type="file"]').attachFile('pro.jpeg')
    cy.get('button').click()
    cy.url().should('not.equal', 'https://kind-gray-bluefish-tie.cyclic.app/register')
    })
  })
import 'cypress-file-upload'
describe('Register with incorrect credentials', () => {
  it('passes', () => {
    cy.visit('https://kind-gray-bluefish-tie.cyclic.app/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.contains("Don't have an account yet?").click()
  
    cy.get('[name$=name]').type('anas')
    cy.get('[name$=email]').type('raza1233334@gmail.com')
    cy.get('[name$=password]').type('raza123456')
    cy.get('[value$=user]').click()
    cy.get('input[type="file"]').attachFile('pro.jpeg')
    cy.get('button').click()
    cy.url().should('equal', 'https://kind-gray-bluefish-tie.cyclic.app/register')
    })
  })