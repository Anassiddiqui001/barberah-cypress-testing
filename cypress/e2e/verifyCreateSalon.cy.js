import "cypress-file-upload";
describe("Create Salon By Admin", () => {
  beforeEach(() => {
    cy.login();
    // ==========
    cy.get(".text-14").click();
    cy.get(".nav-item > :nth-child(3) > .flex").click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Verifies A Create Salon", function () {
    /* ==== Generated with Cypress Studio ==== */

    cy.get('[href="/salonowner/salons"] > p').click();
    cy.get('[data-value="MNOP Salon"]').should("have.text", "MNOP Salon");
    cy.get(
      '[data-id="64a4f2b8a25498001cb6b0e8"] > [data-value="10am-12pm"]'
    ).should("have.text", "10am-12pm");
    cy.get('[data-value="Saadi Town"]').should("have.text", "Saadi Town");
    /* ==== End Cypress Studio ==== */
  });
});
