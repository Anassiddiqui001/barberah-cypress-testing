import "cypress-file-upload";
describe("Register to the website", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("passes", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://kind-gray-bluefish-tie.cyclic.app/register");
    cy.get(":nth-child(3) > .pl-2").type("yedel");
    cy.get(":nth-child(4) > .pl-2").type("yedel@gmail.com");
    cy.get(":nth-child(5) > .pl-2").type("yedel123");
    cy.get('[value="salonowner"]').check();
    cy.get(".py-3 > .w-full").attachFile("pro.jpeg");
    cy.get(".block").click();
    /* ==== End Cypress Studio ==== */
  });
});
