import { LoginPage } from "../WebAppTesting/Login_page";

const loginpage = new LoginPage()

describe('Login Test', () => {
  it('emmes login', () => {
    cy.visit("https://emmes.okta.com/")

    // Load test data from the fixture file
    cy.fixture('testdata').then((data) => {
      const username = data.validCredentials.username;
      const password = data.validCredentials.password;

      // Perform login using data from the fixture file
      loginpage.enterUserName(username);
      loginpage.enterPassWord(password);
      loginpage.ClickLogin();
    });
  });
});
