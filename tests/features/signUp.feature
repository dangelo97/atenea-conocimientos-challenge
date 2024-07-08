Feature: Automatización del Registro de Atenea

    Scenario: Registro exitoso con datos válidos
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Hago clic en el botón "Registrarse"
        And Relleno el campo "Nombre" con un nombre autogenerado
        And Relleno el campo "Dirección de Email"
        And Relleno el campo "Contraseña" con "contraseña"
        And Relleno el campo "Confirmar contraseña" con "contraseña"
        And Hago clic en el botón "Registrarse" de la seccion Sign Up
        Then Valido que el nombre de usuario se muestra con exito

    Scenario: Registro con solo el nombre
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Hago clic en el botón "Registrarse"
        And Relleno el campo "Nombre" con un nombre autogenerado
        And Hago clic en el botón "Registrarse" de la seccion Sign Up
        Then Debería ver un mensaje de error "User validation failed: email: Path `email` is required., password: Path `password` is required."

    Scenario: Registro con nombre y correo
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Hago clic en el botón "Registrarse"
        And Relleno el campo "Nombre" con un nombre autogenerado
        And Relleno el campo "Dirección de Email"
        And Hago clic en el botón "Registrarse" de la seccion Sign Up
        Then Debería ver un mensaje de error "User validation failed: password: Path `password` is required."

    Scenario: Registro con nombre, correo y contraseña sin confirmación
        Given Navego al sitio
        When Hago clic en el botón "Ingresar" en el encabezado
        And Hago clic en el botón "Registrarse"
        And Relleno el campo "Nombre" con un nombre autogenerado
        And Relleno el campo "Dirección de Email"
        And Relleno el campo "Contraseña" con "contraseña"
        And Hago clic en el botón "Registrarse" de la seccion Sign Up
        Then Debería ver un mensaje de error "Passwords do not match"

    