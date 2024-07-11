import { SignUpPage } from '../../page/signUp.page';
import { LoginPage } from '../../page/login.page';
import { HomePage } from '../../page/home.page';
import { BasePage } from '../../page/base.page';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');

Then('Valido que se inicio sesión con exito', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoUsuarioLogueado();
});
