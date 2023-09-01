const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 20000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  chromeWebSecurity: false
})
