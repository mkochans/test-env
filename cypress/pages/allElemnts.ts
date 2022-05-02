import { LoginElements } from "./loginPageElements"
import { MainPageElements } from "./mainPageElements"
import { PopUpElements } from "./popUpElements"

export const allElements = {
    ...LoginElements,
    ...MainPageElements,
    ...PopUpElements
}

export function getByLocator(locator: string) {
    const selector = allElements[locator];
    return cy.get(selector)
}