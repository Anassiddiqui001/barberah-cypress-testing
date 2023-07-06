import "cypress-file-upload";
describe("Create Barber  Test Case", () => {
  beforeEach(() => {
    cy.login();
    // ===========
    cy.get(".text-14").click();
    cy.get(".nav-item > :nth-child(3) > .flex").click();
  });

  it("Creates a Barber", () => {
    /* ==== Generated with Cypress Studio ==== */

    cy.get('[href="/salonowner/barber"] > p').click();
    cy.get("#barbername").type("OOO Barber");
    cy.get("#worksat").type("ABCD Salon");
    cy.get("#timings").type("1pm-6pm");
    cy.get("#experience").type("5");
    cy.get(":nth-child(6) > .input").attachFile("barber.jpg");
    cy.get(".submit").click();
    /* ==== End Cypress Studio ==== */
  });
});
