# Automation Practice

## Project description
This is a test project that contains a few smoke tests automated in Node.js using Playwright and Visual Studio Code. It is based on the website `http://automationpractice.com/index.php`.
Tests that are automated are:
- Login with valid credentials (`smoke_login.spec.js`)
- Adding to cart from search results (`smoke_addcart.spec.js`)
- Checkout when the user is logged in and has the product already in the cart (`smoke_checkout.spec.js`)
    - For this test, I had to use the `beforeEach` method that runs actions that are prerequisites for this test case  

I added a project configuration file (`playwright.config.js`) with setup for different browsers and other important parameters for running the tests. Scripts for running them in the tests are in the `package.json` file. \
There are three .yml workflows files (`chrome-run.yml`, `safari-run.yml`, `test-run.yml`) using different browsers to run the project on GitHub. They are in folder `.github/workflows`. I have used `https://playwright.dev/docs/ci` for reference.

I have used the `https://temp-mail.org/en/` email address generator to generate an email for the user.

There are also xlsx files (`Bug reports.xlsx` and `Test cases.xlsx`) that I added for other parts of the assignment. The can be downloaded and opened in Excel.

## Running tests

### On GitHub
To run the tests in GitHub open Actions, choose the desired workflow, and click on run workflow. 

### Locally
Prerequisites for running the tests locally are:
- Installed Git
- Installed Node.js
- Installed Visual Studio Code

To run the tests locally, clone the GitHub repository to the local folder in Visual Studio Code.\
In the VSC terminal run the command `npm run test:selectedBrowser` where `selectedBrowser` can be `firefox`, `chrome`, or `webkit` (used for Safari).\
To run only one test run the command `npm run test:selectedBrowser testPath` where `testPath` is a folder where the test is stored and the name of the specific test, for example, `tests/smoke_checkout.spec.js`.