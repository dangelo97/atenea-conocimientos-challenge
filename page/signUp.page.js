exports.SignUpPage = class SignUpPage{
    constructor(page) {
        this.page = page;
        this.ingresarButton = page.locator('id=navbar-link-ingresar');
        this.nombreField = page.locator('id=name-input');
        this.emailField = page.locator('id=email-input');
        this.contraseñaField = page.locator('id=password-input');
        this.confirmarContraseñaField = page.locator('id=confirm-password-input')
        this.registrarseButton = page.locator('id=register-button');
    }

    async ingresoNombre(nombre){
        await this.nombreField.fill(nombre)
    }

    async ingresoEmail(correo){
        await this.emailField.fill(correo)
    }

    async ingresoContraseña(contraseña){
        await this.contraseñaField.fill(contraseña)
    }

    async ingresoConfirmarContraseña(contraseña){
        await this.confirmarContraseñaField(contraseña)
    }

    async clickRegistrarse(){
        await this.registrarseButton.click()
    }
}
