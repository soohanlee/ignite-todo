describe("Todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const todoTitle = "Test todo";

    cy.get("[data-cy=input]").type(todoTitle).should("have.value", todoTitle);

    cy.get("[data-cy=submit-button]").click();

    cy.get("[data-cy=unordered-list]").contains(todoTitle);
  });

  it("Add new todo", () => {
    const todoTitle = "Test todo";

    cy.get("[data-cy=input]").type(todoTitle).should("have.value", todoTitle);

    cy.get("[data-cy=submit-button]").click();

    cy.get("[data-cy=unordered-list]").contains(todoTitle);
  });

  it("Toggle todo status", () => {
    cy.get("[data-cy=todo-item-checkbox]").check({ force: true });

    cy.get("[data-cy=todo-item-checkbox]").should("be.checked");
  });

  it("Filter todos", () => {
    cy.get("[data-cy=select]").select("ing").should("have.value", "ing");

    cy.get("[data-cy=unordered-list]")
      .find("[data-cy=todo-item]")
      .should("have.length", 1);
  });

  it("Remove todo", () => {
    cy.get("[data-cy=remove-button]").first().click();

    cy.get("[data-cy=unordered-list]")
      .find("[data-cy=todo-item]")
      .should("have.length", 0);
  });
});
