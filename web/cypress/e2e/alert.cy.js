describe('Validações de alertas em javascript',()=>{
    beforeEach(()=>{
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })
    it('Deve validar a mensagem de alerta', ()=>{
        cy.on('window:alert',(msg)=>{
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })// cy.on('window:alert'é o listener que fica ouvindo 
        // o evento de alert,  isso deve ficar antes do click
        //  do botao
        cy.contains('button', 'Mostrar Alert').click()
    })


    it('Deve confirmar um diálogo e validar a resposta positiva', ()=>{
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Aperte um botão!')
            return true //isso simula que foi apertado o botão ok
        })
        cy.on('window:alert',(msg)=>{
            expect(msg).to.equal('Você clicou em Ok!')
            
        })
        cy.contains('button','Mostrar Confirm').click()
    })

    it('Deve cancelar um diálogo e validar a resposta negativa', ()=>{
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Aperte um botão!')
            return false //isso simula que foi apertado o botão cancelar
        })
        cy.on('window:alert',(msg)=>{
            expect(msg).to.equal('Você cancelou!')
            
        })
        cy.contains('button','Mostrar Confirm').click()
    })
    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem',()=>{
        //aqui é diferente, nao usaremos evento, o cy.window
        //  acessa diretamente a janela do navegador
        cy.window().then((win)=>{
            //o stub simula o comportamento do prompt.
            cy.stub(win, 'prompt').returns('Fernando')
        })
        cy.on('window.alert',(msg)=>{
            expect(msg).to.equal('Olá Fernando! Boas vindas ao WebDojo!')
        })
         cy.contains('button', 'Mostrar Prompt').click()
    })
})