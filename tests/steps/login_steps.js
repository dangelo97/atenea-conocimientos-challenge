import { HomePage } from '../../page/home.page';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd();

Then('Valido que se inicio sesión con exito', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoUsuarioLogueado();
});
