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
        this.nombreProductoDestacado = page.locator('.active.carousel-item');
        this.siguienteProductoBtn = page.locator('.carousel-control-next-icon');
        this.añadirCarritoBtn = page.locator('#add-to-cart-button');
        this.productoCarrito = page.locator('.col-md-3');
        this.cantidadField = page.locator('#select-qty-668d1db50bdc0ed2470b33fc');
        this.cantidadPedidoCarrito = page.locator('.badge.rounded-pill.bg-success');
        this.iconoEliminar = page.locator('#button-remove-668d1db50bdc0ed2470b33fc');
        this.carritoVacioTxt = page.locator('.fade.alert.alert-info.show')
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
        const maxAttempts = 5;

        for (let attempts = 0; attempts <= maxAttempts; attempts++) {

            try {

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

                await this.siguienteProductoBtn.click()
                if (attempts == maxAttempts) {
                    console.log("Número máximo de intentos alcanzado. El producto aún no está presente.");
                }
            }
        }
    }

    async clickProducto() {
        await this.page.waitForTimeout(1000);
        await this.nombreProducto.click()
    }

    async clickAñadirCarrito() {
        await expect(this.añadirCarritoBtn).toBeVisible()
        await this.page.waitForTimeout(1000);
        await this.añadirCarritoBtn.click()
    }

    async validoProductoCarrito(producto) {
        await expect(this.productoCarrito).toContainText(producto)
    }

    async agregoMasProductos(){
        await this.cantidadField.selectOption('2');
    }

    async validoCantidadProductos(){
        await expect(this.cantidadPedidoCarrito).toContainText('2')
    }
     
    async clickIconoEliminar(){
        await this.iconoEliminar.click();
    }

    async validoCarritoVacio(){
        await expect(this.carritoVacioTxt).toContainText('Tu carrito está vacío ')
    }
}