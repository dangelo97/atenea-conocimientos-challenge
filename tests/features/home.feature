Feature: Automatizacion de

    Scenario: Valido la busqueda de un producto
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago clic en el botón "Ingresar"
        And Relleno el campo "Buscar Productos" con "Sony PlayStation 4"
        And Hago clic en el botón "Buscar"
        Then Valido que se muestra el producto "Sony PlayStation 4" en los resultados


    Scenario Outline: Valido el funcionamiento de la navegación del carrusel
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago clic en el botón "Ingresar"
        Then Valido que es visible el producto destado "<Producto>" del carrusel

        Examples:
            | Producto                |
            | Apple Watch Series 7    |
            | Sony PlayStation 5      |
            | Canon EOS R5            |
            | Microsoft Xbox Series X |
            | Sony Alpha a7 III       |