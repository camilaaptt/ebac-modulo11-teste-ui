module.exports = {
  projectId: 'vpi5f2',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
  },
}
