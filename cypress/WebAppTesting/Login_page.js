export class  LoginPage{
    username_textbox='#okta-signin-username'
    password_textbox='#okta-signin-password'
    login_button='#okta-signin-submit'

    enterUserName(username){
     cy.get(this.username_textbox).type(username)
    }

    enterPassWord(password){
        cy.get(this.password_textbox).type(password)

    }
    ClickLogin(){
        cy.get(this.login_button).click()
    }
}