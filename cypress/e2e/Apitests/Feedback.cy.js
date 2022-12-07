describe("Feedback", () => {
  it("Create a Feedback", () => {
    cy.request({
      method: "POST",
      url: "https://app-pancam-dev-001.azurewebsites.net/feedback",

      body: {
        name: "",
        email: "",
        category: "",
        message: "",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("name", "");
      expect(res.body).has.property("email", "");
      expect(res.body).has.property("category", "");
      expect(res.body).has.property("message", "");
    });
  });
});
