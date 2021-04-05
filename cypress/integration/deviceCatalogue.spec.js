describe('Device Catalogue Tests', ()=> {
    describe('new flow', () => {
        beforeEach(() => {
            cy.visit('localhost:8080')
        })

        it('Renders the elements correctly for Iphones', () => {
            //the Nav bar should be visible
            cy.get('.nav-bar').should('be.visible')

            //Home Page should be visible
            cy.get('.home').should('be.visible')

            //link for iphones and watches should be visible
            cy.get('.iphone-link').should('be.visible')
            .then(() => {
                cy.get('.iphone-link')
                .click()

                // Check whether correct pages are displayed on the 
                //click of both the links:
                cy.get('.iphone-list').should('be.visible')

                //Check whether more than one iphone grids are visible
                cy.get('.iphone-card').its('length').should('be.gte',1)
            })
        })

        it('Renders the elements correctly for Watches', () => {
            //the Nav bar should be visible
            cy.get('.header-nav').should('be.visible')
            //link for watches should be visible
            cy.get('.watch-link').should('be.visible')
            .then(() => {
                cy.get('.watch-link')
                .click()

                // Check whether correct pages are displayed on the click of both the links:
                cy.get('.watch-list').should('be.visible')

                //Check whether more than one watch grids are visible
                cy.get('.watch-card').its('length').should('be.gte',1)

            })
        })
    })
})