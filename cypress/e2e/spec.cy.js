describe("User Flow of Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", '/sampleData.json')
    .as("orders");
    cy.visit("http://localhost:3000");
  });

  it("Should take the user to the Main Page that shows the Header & Form", () => {
    cy.get("header")
      .contains("Burrito Builder")
      .get("form")
      .should("exist")
      .get("input")
      .get(".ingredient-buttons")
      .should("have.length", 12)
      .should("contain", "steak")
      .get("p")
      .should("contain", "Order:")
      .get("h4")
      .should(
        "contain",
        "Please enter a name and select at least one ingredient for your burrito!"
      );
  });

  it("Should show the stubbed sighting on Main Page load", () => {
    cy

    .wait("@orders")
      .its("response.body")
      .should("have.length", 16)
      // .get(".order")
      // .should("exist")
    // .should('have.length', 4)
    // .get('.order-name').should('contain', 'bear')
    // .get('.ingredients').should('contain', 'beans')
  });

  it('Should be able to create a new burrito', () => {
    cy.get("form")
      .get("input").should('have.attr', 'name', 'name').type('BIGUN')
      .get('.ingredient-buttons').first().should('contain', 'beans').click()
      .get('.submit-button' ).click()
  })
});
