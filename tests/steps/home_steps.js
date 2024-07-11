import { SignUpPage } from '../../page/signUp.page';
import { LoginPage } from '../../page/login.page';
import { HomePage } from '../../page/home.page';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Then('Valido que se muestra el producto {string} en los resultados', async ({page}, producto) => {
    const homePage = new HomePage(page);
    await homePage.validoNombreProducto(producto);
});

Then('Valido que es visible el producto destado {string} del carrusel', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    switch (producto) {
        case "Apple Watch Series 7":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Sony PlayStation 5":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Canon EOS R5":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Microsoft Xbox Series X":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Sony Alpha a7 III":
            await homePage.validoProductoCarrusel(producto);
            break;
        default:
            throw new Error("Caso no cubierto para el step.")
    }
});
