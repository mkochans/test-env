# e2e-tests

Install packages:

npm install

Link the package:
npm link
npm link cypress-cucumber-preprocessor

Running tests:

run Cypress Launcher:

./node_modules/.bin/cypress open

click on a .feature file on the list of specs


Running without Cypress luncher
./node_modules/.bin/cypress run

Running without Cypress luncher headless
./node_modules/.bin/cypress run -headless

Running without Cypress luncher but with specific TAGS
./node_modules/.bin/cypress-tags run -e TAGS='@prod'

Running specific feature files
./node_modules/.bin/cypress-tags run -g 'cypress/integration/**/*.feature'

Fature Files:
Cucumber features should be added only in directory cypress/integration/

Files should have fallowing structure 

Steps definition should be implemented as in bellow example and contain just stepd definition 

 cypress/integration/featureName/featureName.ts
    
Steps funfctionality should be added to cypress/functions 

Project is using Page object Pattern so all objects should be added into cypress/pages

Additional Cypress configuration can be added in cypress.json 
   