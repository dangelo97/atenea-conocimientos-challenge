const { expect } = require("@playwright/test");

exports.HomePage = class HomePage{
    constructor(page) {
        this.page = page;
        this.ingresarButton = page.locator('#navbar-link-ingresar');
        this.buscadorField = page.locator('#search-product-input');
        this.buscarButton = page.locator('#search-product-button');
        this.carritoButton = page.locator('#link-carrito');
        this.usuarioButton = page.locator('#username')
    }

    async clickIngresar(){
        await this.ingresarButton.click()
    }

    async ingresarProducto(producto){
        await this.buscadorField.fill(producto)
    }

    async clickBuscar(){
        await this.buscarButton.click()
    }

    async clickCarrito(){
        await this.carritoButton.click()
    }

    async validacionNombreUsuario(text){
        await expect(this.usuarioButton).toHaveText(text)
    }

    async validoUsuarioLogueado(){
        await expect(this.usuarioButton).toBeVisible()
    }
}