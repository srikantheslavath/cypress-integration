import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.watchForFileChanges = false; // Correct way to set watchForFileChanges to false
      on('task', {
        // This event handler will run before each test run
        // and will enable screenshots on test failure
        'test:after:run'(test, runnable) {
          if (test.state === 'failed') {
            // Take a screenshot
            cy.screenshot();
          }
        }
      });
    }
  }
});
