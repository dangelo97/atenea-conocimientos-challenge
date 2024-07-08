exports.SignUpPage = class SignUpPage {
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.nombreField = page.locator('#name-input');
        this.emailField = page.locator('#email-input');
        this.contraseñaField = page.locator('#password-input');
        this.confirmarContraseñaField = page.locator('#confirm-password-input');
        this.registrarseButton = page.locator('#register-button');
    }

    async ingresoNombre(nombre) {
        await this.nombreField.fill(nombre)
    }

    async ingresoEmail(correo) {
        await this.emailField.fill(correo)
    }

    async ingresoContraseña(contraseña) {
        await this.contraseñaField.fill(contraseña)
    }

    async ingresoConfirmarContraseña(contraseña) {
        await this.confirmarContraseñaField.fill(contraseña)
    }

    async clickRegistrarse() {
        await this.registrarseButton.click()
    }
}
