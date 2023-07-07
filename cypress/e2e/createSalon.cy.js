import "cypress-file-upload";
describe("Create Salon By Admin", () => {
  beforeEach(() => {
    cy.login();
    // ==========
    cy.get(".text-14").click();
    cy.get(".nav-item > :nth-child(3) > .flex").click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("creates salons", function () {
    /* ==== Generated with Cypress Studio ==== */

    cy.get('[href="/salonowner/salon"] > p').click();
    cy.get("#salonname").type("DDD Salon");
    cy.get("#timings").type("10am-12pm");
    cy.get("#location").type("Saadi Town");
    // cy.get(":nth-child(5) > .input").attachFile("salon.jpg");
    cy.get(":nth-child(5) > .input").attachFile("salon.jpg");
    cy.get(".submit").click();

    /* ==== End Cypress Studio ==== */
  });
});
