const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://buger-eats.vercel.app/',
    deliverUrl: 'https://buger-eats.vercel.app/deliver'
  }
})