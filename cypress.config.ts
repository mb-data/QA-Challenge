import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

  baseUrl: 'http://localhost:5173/',
  defaultCommandTimeout: 30000,
  viewportHeight:900,
  viewportWidth:1400,
  chromeWebSecurity: false,
  watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
