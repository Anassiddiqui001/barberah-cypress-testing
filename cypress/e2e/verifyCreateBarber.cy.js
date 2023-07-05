import "cypress-file-upload";
describe("Create Barber  Test Case", () => {
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
    cy.get(
      '[data-id="64a58e1baf72fa001c5f7ec5"] > [data-value="XYZ Barber"]'
    ).should("have.text", "XYZ Barber");
    cy.get(
      '[data-id="64a58e1baf72fa001c5f7ec5"] > [data-value="ABCD Salon"]'
    ).should("have.text", "ABCD Salon");
    cy.get(
      '[data-id="64a58e1baf72fa001c5f7ec5"] > [data-value="1pm-6pm"]'
    ).should("have.text", "1pm-6pm");
    cy.get('[data-id="64a58e1baf72fa001c5f7ec5"] > [data-value="5"]').should(
      "have.text",
      "5"
    );
    /* ==== End Cypress Studio ==== */
  });
});
