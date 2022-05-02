import { Given , When, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonFunctions } from '../../functions/commonFunction'
import { WaitFunctions } from '../../functions/WaitFunctions'
import { urls } from '../../support/data'


Given(/User logs to Physitrack UK/, () => {
  CommonFunctions.navigateTo(urls.ukDomain)
  CommonFunctions.clickOnElement("loginButton")
});

When(/^User assign "(.*)" to an excerise plan$/, (name: string) => {
  CommonFunctions.input("searchInput", name)
  WaitFunctions.wait(2000)
     
  if(WaitFunctions.waitForElementVisible("closeReccentSearches")){
    CommonFunctions.clickOnElement("closeReccentSearches")
  }

  CommonFunctions.clickOnFirstElement("addExcerciseButton")
  //cy.get("div.list-content-container div.lc-text a").contains("Bird dog").click() // Could be used in not demo version, as there is subscription popUp Advertisement 
  CommonFunctions.clickOnFirstElement("addExcerciseButton")
  CommonFunctions.clickOnElement("cartButton")
  CommonFunctions.clickOnElement("assignButton")
  CommonFunctions.clickOnElement("selectMenu")
  CommonFunctions.clickOnElement("selectFirstPatient")
  WaitFunctions.wait(2000)
  CommonFunctions.inputWithoutClear("selectFirstPatient", "{enter}")
  CommonFunctions.clickOnElement("assignPlan")
});

Then(/^Exercise "(.*)" should be assignet to patient$/, (name: string) => {
  CommonFunctions.clickOnElement("patientLink")
  CommonFunctions.clickOnElement("viewProgramButton")
  WaitFunctions.waitForElementText("programItem", name)
  CommonFunctions.clickOnElement("removeExercise")
});
