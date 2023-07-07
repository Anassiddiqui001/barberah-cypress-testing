import "cypress-file-upload";
describe("Verify Create Barber By Admin", () => {
  beforeEach(() => {
    cy.login();
    // ===========
    cy.get(".text-14").click();
    cy.get(".nav-item > :nth-child(3) > .flex").click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Verifies A Create Barber", function () {
    /* ==== Generated with Cypress Studio ==== */

    cy.get('[href="/salonowner/barbers"] > p').click();
    cy.get('[data-value="MMM Barber"]').should("have.text", "MMM Barber");
    cy.get(
      '[data-id="64a7a47918e5ad001d15a75f"] > [data-value="ABCD Salon"]'
    ).should("have.text", "ABCD Salon");
    cy.get(
      '[data-id="64a7a47918e5ad001d15a75f"] > [data-value="1pm-6pm"]'
    ).should("have.text", "1pm-6pm");
    cy.get('[data-id="64a7a47918e5ad001d15a75f"] > [data-value="5"]').should(
      "have.text",
      "5"
    );
    /* ==== End Cypress Studio ==== */
  });
});
