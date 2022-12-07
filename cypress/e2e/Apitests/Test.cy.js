describe("test", () => {
  it("test", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/2").as("poke");
    cy.get("@poke")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });

  it("test status code verify", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/2").as("poke");
    cy.get("@poke").its("status").should("equal", 200);
  });
  it("test validate name", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/2").as("poke");
    cy.get("@poke").its("body").should("include", { name: "ivysaur" });
  });

  it("test status code-404 verify", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/1000",
      failOnStatusCode: false,
    }).as("poke");
    cy.get("@poke").its("status").should("equal", 404);
  });
});
