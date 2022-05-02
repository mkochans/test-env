import { Given , When, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonFunctions } from '../../functions/commonFunction'
import { WaitFunctions } from '../../functions/WaitFunctions'
import { urls , userData } from '../../support/data'

Given(/^User clicks on "(.*)" in element "(.*)"$/, (string: string, element: string) => {
 CommonFunctions.clickElementContainingString(element, string)
});


