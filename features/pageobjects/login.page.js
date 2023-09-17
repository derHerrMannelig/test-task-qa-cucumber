import Page from './page.js';

class LoginPage extends Page {
    get btnLogin () {
        return $('input[type="submit"]');
    }

    get errorMsg () {
        return $('h3[data-test="error"]')
    }

    async login () {
        await this.btnLogin.click();
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
