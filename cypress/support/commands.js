Cypress.Commands.add("login", () => {
  cy.visit("https://kind-gray-bluefish-tie.cyclic.app/");
  cy.contains("Login").click();
  cy.url().should("include", "/login");
  cy.get("[id$=email]").type("bravo@gmail.com");
  cy.get("[id$=password]").type("password");
  cy.get("button").click();
  cy.url().should(
    "not.equal",
    "https://kind-gray-bluefish-tie.cyclic.app/login"
  );
});
