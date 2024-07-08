import { SignUpPage } from '../../page/signUp.page';
import { LoginPage } from '../../page/login.page';
import { HomePage } from '../../page/home.page';
import { BasePage } from '../../page/base.page';
import { createBdd } from 'playwright-bdd';
import { generateRandomEmail } from '../../utils/util';
import { generateName } from '../../utils/util';

const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
let nombreFormulario = '';

Given('Navego al sitio', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.ingresoBaseUrl();
});

When('Hago clic en el botón {string} en el encabezado', async ({ page }, boton) => {
    const homePage = new HomePage(page);
    await homePage.clickIngresar();
});

When('Hago clic en el botón {string}', async ({ page }, boton) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickRegistrarse();
});

When('Relleno el campo {string} con un nombre autogenerado', async ({ page }, nombre) => {
    const signUpPage = new SignUpPage(page);
    nombreFormulario = generateName()
    await signUpPage.ingresoNombre(nombreFormulario);
});

When('Relleno el campo {string}', async ({ page }, email) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.ingresoEmail(generateRandomEmail());
});

When('Relleno el campo {string} con {string}', async ({ page }, text, password) => {
    const signUpPage = new SignUpPage(page);
    switch (text) {
        case "Contraseña":
            await signUpPage.ingresoContraseña(password);
            break;
        case "Confirmar contraseña":
            await signUpPage.ingresoConfirmarContraseña(password);
            break;
        default:
            throw new Error("Caso no cubierto para el step.")
    }
});

When('Hago clic en el botón {string} de la seccion Sign Up', async ({ page }, boton) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.clickRegistrarse();
});

Then('Valido que el nombre de usuario se muestra con exito', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validacionNombreUsuario(nombreFormulario);
})

Then('Debería ver un mensaje de error {string}', async ({ page }, error) => {
    await expect(page.getByRole('alert')).toHaveText(error);
})
