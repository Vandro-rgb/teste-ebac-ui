/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
   
   beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

   afterEach(() => {
    cy.screenshot()
   });

    it('Deve fazer login com sucesso', () =>{
      cy.get('#username').type('vandro.teste@teste.com.br')
      cy.get('password').type('ebac@123')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vandro.teste (não é vandro.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
      cy.get('#username').type('vandro@teste.com.br')
      cy.get('password').type('ebac@123')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').should('exist')
      
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
      cy.get('#username').type('vandro.teste@teste.com.br')
      cy.get('password').type('eb@123')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail vandro.teste@teste.com.br esta incorreta. Perdeu a senha?')
      cy.get('.woocommerce-error').should('exist')

});

})