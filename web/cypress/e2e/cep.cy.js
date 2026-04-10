import address from "../fixtures/cep.json";

describe("CEP", () => {
  beforeEach(() => {
    cy.login();
    cy.goTo("Integração", "Consulta de CEP");
  });

  it("Deve validar a consulta de CEP", () => {
    cy.intercept("GET", `https://viacep.com.br/ws/${address.cep}/json/`, {
      statusCode: 200,
      body: {
        logradouro: address.street,
        bairro: address.neighborhood,
        localidade: address.city,
        uf: address.state,
      },
    }).as("getCep");

    //repare que acima,no body  após status
    // code é como a app devolveria
    //  os dados e json

    cy.get("#cep").type(address.cep);
    cy.contains("button", "Buscar").click();

    cy.wait("@getCep"); //isso aqui, antes de validar
    //  faz a interceptação

    cy.get("#street").should("have.value", address.street);

    cy.get("#neighborhood").should("have.value", address.neighborhood);

    cy.get("#city").should("have.value", address.city);

    cy.get("#state").should("have.value", address.state);
  });
});
