const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 20000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  chromeWebSecurity: false,
  projectId: 'o74dn4'
})
