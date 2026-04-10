describe("Tocar o video", ()=>{
    it('Deve tocar o video de exemplo', ()=>{
        cy.login()
        cy.contains('Video').click()

        cy.wait(3000)//estrategia de think time

        cy.get('iframe[title="Video Player"]')
        .should('exist')
        // abaixo o 0 é pelo fato do iframe 
        // ser nosso iframe numero 0 (o its encontra 
        // por array)
        .its('0.contentDocument.body')
        //é um recurso do cypress para conseguir
        //  pegar o valor de um objeto, de um array 
        // ou de um elemento que está dentro de uma
        //  pagina do html. ele pega o elemento e 
        // transforma em um objeto do cypress. 
        // abaixo tambem demos um alias.
        .then(cy.wrap)
        .as('iFramePlayer')

        cy.get('@iFramePlayer')
        .find('.play-button')
        .click()

        cy.get("@iFramePlayer")
        .find('.pause-button')
        .should('be.visible')
    })
})