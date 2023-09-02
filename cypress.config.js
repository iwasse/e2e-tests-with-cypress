const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 20000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  chromeWebSecurity: false,
  projectId: 'o74dn4'
})
