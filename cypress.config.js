const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5t1hqp',
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    ignoreVideos: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});
