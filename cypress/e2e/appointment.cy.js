describe("Appointment test case", () => {
  beforeEach(() => {
    cy.login();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("makes an appointment", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      '[href="/specificSalon/62d295a85a61c523c04a085b/Alpha Barbers"] > .my-4 > .card > .btn > .fancy > .text'
    ).click();
    cy.get(
      '[href="/specificBarber/62d295d35a61c523c04a085e/Alex Barber/Alpha Barbers"] > .bg-\\[\\#fff\\] > .mt-3 > .bg-black > .text-\\[\\#37c7da\\]'
    ).click();
    cy.get(":nth-child(2) > .border").should("have.value", "bravo");
    cy.get(":nth-child(3) > .border").should("have.value", "Alex Barber");
    cy.get(".px-7 > :nth-child(4) > .border").should(
      "have.value",
      "Alpha Barbers"
    );
    cy.get(":nth-child(5) > .border").type("2023-07-05");
    cy.get(":nth-child(5) > .border").click();
    cy.get(":nth-child(6) > .border").select("500");
    // cy.get(".justify-between > .h-12").click();
    cy.contains("Book Appointment").click();
    cy.get("tbody > :nth-child(7) > :nth-child(1)").should(
      "have.text",
      "2023-07-02T00:00:00.000Z"
    );
    cy.get("tbody > :nth-child(7) > :nth-child(2)").should(
      "have.text",
      "bravo"
    );
    /* ==== End Cypress Studio ==== */
  });
});
