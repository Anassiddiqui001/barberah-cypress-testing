describe("Login to the website", () => {
  it("passes", () => {
    cy.visit("https://kind-gray-bluefish-tie.cyclic.app/");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy.get("[id$=email]").type("anas123@gmail.com");
    cy.get("[id$=password]").type("anas123456");
    cy.get("button").click();
    cy.url().should(
      "not.equal",
      "https://kind-gray-bluefish-tie.cyclic.app/login"
    );
  });
});
