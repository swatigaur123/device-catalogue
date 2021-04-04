describe('Device Catalogue Tests', ()=> {
    describe('new flow', () => {
        beforeEach(() => {
            cy.visit('localhost:8080')
        })

        it('Renders the elements correctly for Iphones', () => {
            //the Nav bar should be visible
            cy.get('.headerNav').should('be.visible')
            //link for iphones and watches should be visible
            cy.get('.iphoneLink').should('be.visible')
            .then(() => {
                cy.get('.iphoneLink')
                .click()

                // Check whether correct pages are displayed on the 
                //click of both the links:
                cy.get('.iphone-list').should('be.visible')

                //Check whether more than one iphone grids are visible
                cy

            })
        })

        it('Renders the elements correctly for Watches', () => {
            //the Nav bar should be visible
            cy.get('.headerNav').should('be.visible')
            //link for watches should be visible
            cy.get('.watchesLink').should('be.visible')
            .then(() => {
                cy.get('.watch-list')
                .click()

                // Check whether correct pages are displayed on the click of both the links:
                cy.get('.iphonesGrid').should('be.visible')

            })
        })
    })
})