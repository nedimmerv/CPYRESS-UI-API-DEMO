describe("Delete Existing Employee", () => {
  it.only("Delete existing Employee by ID", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3434/api/deleteemployee/7",
    }).then((res) => {
      expect(res.status).to.eq(200);

      expect(res.body).to.have.property(
        "msg",
        "Employee Deleted Successfully!..."
      );
      expect(res.body).to.have.property("id", 7);
    });
  });
});
