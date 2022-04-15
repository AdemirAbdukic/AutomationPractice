# Automation Practice

## Project description
This is a test project that contains a few smoketests automated in Node.js using Playwright and Visual Studio Code. It is based on the website `http://automationpractice.com/index.php`.
Tests that are automated are:
- Login with valid credentials (`smoke_login.spec.js`)
- Adding to cart from search results (`smoke_addcart.spec.js`)
- Checkout when user is logged in and has product already in cart (`smoke_checkout.spec.js`)

I added a project configuration file (`playwright.config.js`) with setup for different browsers. Scripts for running them in the tests are in `package.json` file. \
There are three .yml workflows files (`chrome-run.yml`, `safari-run.yml`, `test-run.yml`) using different browsers to run the project on GitHub. They are in folder .github/workflows.

I have used `https://temp-mail.org/en/` email address generator to generate an email for user.

## Running tests

### On GitHub
To run the tests in github open Actions, choose the desired workflow, and click on run workflow. 

### Locally
Prerequisites for running the tests locally are:
- Installed Git
- Installed Node.js
- Installed Visual Studio Code

To run the tests locally, clone the repository to local folder in Visual Studio Code.\
In VSC terminal run the command `npm run test:selectedBrowser` where selectedBrowser can be firefox, chrome and webkit (used for Safari).
