/// <reference types='Cypress' />

describe("Fake Date Test", () => {
  it("test 1", () => {
    // common usage of intercept({requestObject},{responseObject})

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        //requestObject
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        // responseObject
        statusCode: 200,
        body: [
          // Mock body
          /*
          {
            book_name: "Cypress API",
            isbn: "22222",
            aisle: "676767",
          },
          {
            book_name: "Cypress UI ",
            isbn: "67899",
            aisle: "3445565",
          },
*/
          {
            book_name: "Life of Author Nedim ",
            isbn: "fkjfkhd",
            aisle: "45fdgdffh5",
          },
        ],
      }
    ).as("getBook");

    cy.get("button[class='btn btn-primary']").click(); // Virtual Library btn
    cy.wait("@getBook");
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
  it("test 2", () => {
    // common usage of intercept({requestObject},{responseObject})

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        //requestObject
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        // responseObject
        statusCode: 200,
        body: [
          // Mock body

          {
            book_name: "Cypress API",
            isbn: "22222",
            aisle: "676767",
          },
          {
            book_name: "Cypress UI ",
            isbn: "67899",
            aisle: "3445565",
          },

          {
            book_name: "Life of Author Nedim ",
            isbn: "678675",
            aisle: "45465",
          },
        ],
      }
    ).as("getBook");

    cy.get("button[class='btn btn-primary']").click(); // Virtual Library btn
    cy.wait("@getBook").should(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
    // cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
