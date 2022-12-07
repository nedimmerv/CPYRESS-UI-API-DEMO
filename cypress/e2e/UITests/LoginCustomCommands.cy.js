describe("login with custom command", () => {
  it("Login  command ", () => {
    cy.visit("https://demo.nopcommerce.com");
    cy.clickLink("Log in"); // Custom command
    cy.loginApp("merv@gmail.com", "test123");
    cy.get(".ico-account").should("have.text", "My account");
  });
});
