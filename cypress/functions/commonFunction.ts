import { getByLocator } from '../pages/allElemnts'


export namespace CommonFunctions {

    export async function navigateTo(url: string) {
         cy.visit(url);
    }

    export function input(element: string, string: string) {
        getByLocator(element).clear()
        getByLocator(element).type(string)  
    }

    export function inputWithoutClear(element: string, string: string) {
        getByLocator(element).type(string, {force: true})  
    }

    export function clickElementContainingString(element: string, itemName: string) {
        getByLocator(element).contains(itemName).click()
    }

    export async function clickOnElement(element :string) {
        getByLocator(element).click({force: true})
    }

    export async function clickOnFirstElement(element :string) {
        getByLocator(element).first().click({force: true})
    }

    export async function clickOnLastElement(element :string) {
        getByLocator(element).last().click({force: true})
    }

    export async function selectElementFromDropDown(string: string) {
        cy.contains(string).first().click()
    }

    export async function clickElementContainingExectName(string: string) {
        cy.contains(string).click()
    }

    export async function clearElement(element: string) {
        getByLocator(element).clear({force: true}) 
    }
}