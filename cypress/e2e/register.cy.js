import "cypress-file-upload";
describe("Register to the website", () => {
  it("passes", () => {
    cy.visit("https://kind-gray-bluefish-tie.cyclic.app/");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy.contains("Don't have an account yet?").click();

    cy.get("[name$=name]").type("tayo");
    cy.get("[name$=email]").type("tayo@gmail.com");
    cy.get("[name$=password]").type("tayo");
    cy.get("[value$=user]").click();
    cy.get('input[type="file"]').attachFile("pro.jpeg");
    cy.get("button").click();
    cy.url().should(
      "not.equal",
      "https://kind-gray-bluefish-tie.cyclic.app/register"
    );
  });
});

// cypress\e2e\register.cy.js
