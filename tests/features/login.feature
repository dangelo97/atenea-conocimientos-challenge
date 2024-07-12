@regression
Feature: Automatizacion del inicio de sesion

    Scenario: Inicio de sesión exitoso con credenciales válidas
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Relleno el campo "Contraseña" con "local123"
        And Hago click en el botón "Ingresar"
        Then Valido que se inicio sesión con exito

    Scenario: Inicio de sesión sin credenciales
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Hago click en el botón "Ingresar"
        Then Debería ver un mensaje de error "Invalid email or password"

    Scenario: Inicio de sesión con solo el correo
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "daferrieri1905@gmail.com"
        And Hago click en el botón "Ingresar"
        Then Debería ver un mensaje de error "Invalid email or password"

    Scenario: Inicio de sesión con correo y contraseña inválidos
        Given Navego al sitio
        When Hago click en el botón "Ingresar" en el encabezado
        And Relleno el campo "Dirección de Email" con "usuario_invalido@example.com"
        And Relleno el campo "Contraseña" con "local12345"
        And Hago click en el botón "Ingresar"
        Then Debería ver un mensaje de error "Invalid email or password"