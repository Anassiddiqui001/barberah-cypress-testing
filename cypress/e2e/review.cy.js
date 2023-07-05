describe("Review Test Case", () => {
  beforeEach(() => {
    cy.login();
    // ===========
    cy.get(
      '[href="/specificSalon/62d295a85a61c523c04a085b/Alpha Barbers"] > .my-4 > .card > .btn > .fancy > .text'
    ).click();
    cy.get(
      '[href="/specificBarber/62d295d35a61c523c04a085e/Alex Barber/Alpha Barbers"] > .bg-\\[\\#fff\\] > .mt-3 > .bg-black > .text-\\[\\#37c7da\\]'
    ).click();
  });

  it("give review", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".text-2xl").should(
      "have.text",
      "Submit Your Review For Alex Barber Barber "
    );
    cy.get(".submitDialogTextArea").click();
    cy.get(".px-6 > .h-12").click();
    cy.get(":nth-child(19) > p").should("have.text", "bravo");
    cy.get(":nth-child(19) > .reviewCardComment").should(
      "have.text",
      "Good Service!"
    );
    /* ==== End Cypress Studio ==== */
  });
});
