@regression
Feature: Automatizacion de busqueda y agregar al carrito de los productos

    Scenario: Valido la busqueda de un producto
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        And Relleno el campo "Buscar Productos" con "Sony PlayStation 4"
        And Hago click en el botón "Buscar"
        Then Valido que se muestra el producto "Sony PlayStation 4" en los resultados

    Scenario: Valido el funcionamiento de la navegación del carrusel
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        Then Valido que son visibles los productos destados del carrusel

    Scenario: Valido que se añada el producto al carrito
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        And Relleno el campo "Buscar Productos" con "Sony PlayStation 4"
        And Hago click en el botón "Buscar"
        And Hago click en el producto "Sony PlayStation 4"
        And Hago click en el botón "Añadir al carrito"
        Then Valido que es visible el producto "Sony PlayStation 4" del carito

    Scenario: Valido que se puede agregar una unidad mas al carrito
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        And Relleno el campo "Buscar Productos" con "Sony PlayStation 4"
        And Hago click en el botón "Buscar"
        And Hago click en el producto "Sony PlayStation 4"
        And Hago click en el botón "Añadir al carrito"
        And Selecciono el campo de cantidades para agregar 1 unidad mas
        Then Valido que es agregada la unidad al pedido

    Scenario: Valido que se puede eliminar el producto del carrito
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        And Relleno el campo "Buscar Productos" con "Sony PlayStation 4"
        And Hago click en el botón "Buscar"
        And Hago click en el producto "Sony PlayStation 4"
        And Hago click en el botón "Añadir al carrito"
        And Hago click en el icono de "Eliminar"
        Then Valido que fue eliminado el producto del carrito 

