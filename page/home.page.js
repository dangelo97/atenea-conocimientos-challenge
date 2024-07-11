const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.ingresarButton = page.locator('#navbar-link-ingresar');
        this.buscadorField = page.locator('#search-product-input');
        this.buscarButton = page.locator('#search-product-button');
        this.carritoButton = page.locator('#link-carrito');
        this.usuarioButton = page.locator('#username');
        this.nombreProducto = page.locator('#producto-0');
        this.nombreProductoDestacado = page.locator('.active.carousel-item')
        this.siguienteProductoBtn = page.locator('.carousel-control-next-icon')
    }

    async clickIngresar() {
        await this.ingresarButton.click()
    }

    async ingresarProducto(producto) {
        await expect(this.buscadorField).toBeVisible()
        await this.page.waitForTimeout(1000);
        await this.buscadorField.fill(producto);
    }

    async clickBuscar() {
        await this.buscarButton.focus()
        await this.buscarButton.click({ force: true })
    }

    async clickCarrito() {
        await this.carritoButton.click()
    }

    async validacionNombreUsuario(text) {
        await expect(this.usuarioButton).toHaveText(text)
    }

    async validoUsuarioLogueado() {
        await expect(this.usuarioButton).toBeVisible()
    }

    async validoNombreProducto(producto) {
        await expect(this.nombreProducto).toContainText(producto)
    }

    async validoProductoCarrusel(producto) {
        const maxAttempts = 5; // Número máximo de intentos

        for (let attempts = 0; attempts <= maxAttempts; attempts++) {
            
            try {
                //await expect(this.nombreProductoDestacado).toContainText(producto)
                // Espera 2 segundos para ver si el botón desaparece
                await this.page.waitForTimeout(1000);
                const isVisible = await expect(this.nombreProductoDestacado).toContainText(producto);
                if (!isVisible) {
                    console.log("Se encontro el producto");
                    break;
                } else {
                    console.log("El producto aun no se encuentra. Intentando nuevamente...");
                }
            } catch (error) {
                console.log("Ocurrió un error:", error);
                //attempts++;
                await this.siguienteProductoBtn.click()
                if (attempts == maxAttempts) {
                    console.log("Número máximo de intentos alcanzado. El producto aún no está presente.");
                }
            }
        }
    }
}