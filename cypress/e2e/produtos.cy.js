describe('Funcionalidade Página de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade , 'Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')

    })

    it('Deve adicionar produtos ao carrinho - Usando Comandos Customizados', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Red', 3)

        cy.get('.woocommerce-message').should('contain' , quantidade , 'Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.') 
    });
})