exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.ingresarButton = page.locator('#login-button');
        this.registrarseButton = page.locator('#register-link');
    }

    async clickIngresar(){
        await this.ingresarButton.click()
    }

    async clickRegistrarse(){
        await this.registrarseButton.click()
    }
}