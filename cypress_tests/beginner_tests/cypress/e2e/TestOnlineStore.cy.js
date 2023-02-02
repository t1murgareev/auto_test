describe('Test of making a purchase', () => {
     it('Purchase of goods', () => {
        cy.visit('https://testqastudio.me/')
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click()
        for(let i = 0; i < 2; i++){cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()}        
       
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()
        cy.get('#menu-top > .menu-item-home > a').click()
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click()
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()
        cy.wait(5000)
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Tima')
        cy.get('#billing_last_name').type('Gareev')
        cy.get('#billing_address_1').type('Омск правды 21 кв 12')
        cy.get('#billing_city').type('Омск')
        cy.get('#billing_state').type('Омска область')
        cy.get('#billing_postcode').type('1212')
        cy.get('#billing_phone').type('89122041566')
        cy.get('#billing_email').type('xxx@mail.ru')
        cy.get('#place_order').click()
        cy.contains('Оформение заказа')
        

     })

})