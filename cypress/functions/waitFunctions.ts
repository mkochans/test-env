import { getByLocator } from '../pages/allElemnts'

export namespace WaitFunctions {

    export async function waitForElementVisible(element: string) {
        getByLocator(element).should('be.visible', {timeout: 5000})
    }

    export async function waitForElementNotVisible(element: string) {
        getByLocator(element).should('not.be.visible', {timeout: 150000}) 
    }

    export async function waitForElementText(element: string, text: string) {
        getByLocator(element).should('have.text', text, {timeout: 3000})    
    }

    export async function wait(number: number) {
        cy.wait(number)  
    }
}