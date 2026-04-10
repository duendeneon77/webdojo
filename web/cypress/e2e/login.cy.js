import { getTodayFormattedDate } from "../support/utils";

describe("Login", () => {

  it("Deve logar com sucesso", () => {
    cy.login();
    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes.",
      );

    cy.getCookie('login_date').should('exist')
    cy.getCookie('login_date').should((cookie)=>{
      expect(cookie.value).to.eq(getTodayFormattedDate())
    })

    cy.window().then((win)=>{
      //vamos acessar a janela com o win
      const token = win.localStorage.getItem('token')
      //lembrando que o token foi retirado da aba 
      // do local storage nas ferramentas do desenv.
      //devemos saber o tipo do token, no nosso caso é um ctiptografado md5
      //vamos pedir pro gpt fazer a funçao
      //tokens podem mudar em empresas..por isso, é bom validar isso assim:

      expect(token).to.match(/^[a-fA-F0-9]{32}$/)
    })


  });

  it("Não deve logar com senha inválida", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana321");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com email nao cadastrado", () => {
    cy.start();

    cy.submitLoginForm("emailErrado@webdojo.com", "katana123");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
