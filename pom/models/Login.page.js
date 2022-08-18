const BasePage = require('./Base.page');

class LoginPage extends BasePage{
    constructor(page){
        super(page)

        //locators
        this.userNameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#log-in';
    }

    async navigate(){
        await super.navigate('index.html')
    }

    /**
     * 
     * @param {*} username 
     * @param {*} password 
     * @param {*} loginButton
     */
    async login(username, password){
        await this.page.fill(this.userNameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.loginButton);
    }
}
module.exports = LoginPage;