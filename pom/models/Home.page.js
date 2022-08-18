const BasePage = require('./Base.page');

class HomePage extends BasePage{
    constructor(page){
        super(page)

        //locators
        this.loggedUser = '.logged-user-name';
        this.balances = '.balance-value';
    }

    /**
     * @param {string} user
     * @returns string
     */
    async getUserName(){
        let user = await this.page.$(this.loggedUser);
        return await user.innerText();
    }

    /**
     * 
     * @param {strings} balType : 'total', 'credit', 'due today'
     * @returns string
     */
     async getBalance(balType){
        let balArray  = await this.page.$$(this.balances);
        if(balType == 'total'){
            // according to the DOM the first balance has an extra span
            return (await balArray[0].$('span')).innerText();
        }
        else if(balType ==  'credit'){
            return (await balArray[1]).innerText();
        }
        else {
            return (await balArray[2]).innerText();
        }
    }

    async navigate(){
        await super.navigate('app.html')
    }
}
module.exports = HomePage;