const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 30000,
    use: {
        baseURL: "http://automationpractice.com/index.php",
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "only-on-failure"
    },
    projects: [
        {
            name:'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name:'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name:'Webkit',
            use: {browserName: 'webkit'}
        }
    ]
}
module.exports = config;