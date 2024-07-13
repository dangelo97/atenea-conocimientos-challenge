import { HomePage } from '../../page/home.page';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

Then('Valido que se muestra el producto {string} en los resultados', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.validoNombreProducto(producto);
});

Then('Valido que son visibles los productos destados del carrusel', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoProductoCarrusel2();
});

When('Hago click en el producto {string}', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.clickProducto();
});

Then('Valido que es visible el producto {string} del carito', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.validoProductoCarrito(producto);
});

When('Selecciono el campo de cantidades para agregar 1 unidad mas', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.agregoMasProductos();
});

Then('Valido que es agregada la unidad al pedido', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoCantidadProductos();
});

When('Hago click en el icono de {string}', async ({ page }, icono) => {
    const homePage = new HomePage(page);
    await homePage.clickIconoEliminar();
});

Then('Valido que fue eliminado el producto del carrito', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoCarritoVacio();
});