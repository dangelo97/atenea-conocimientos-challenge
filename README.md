# atenea-conocimientos-challenge
## Descripción

Este proyecto es una automatización de pruebas para la página de pruebas [Atenea](https://atenea.uno/). Utiliza Playwright y Cucumber empleando el modelo de objeto de página (Page Object Model - POM) para estructurar y organizar las pruebas.

## Estructura de Carpetas

```
.github/workflows
     - playwright.yml
page
     - base.page.js
     - home.page.js
     - login.page.js
     - signUp.page.js
tests
     - features
           - home.feature
           - login.feature
           - signUp.feature
     - steps
           - home_steps.js
           - login_steps.js
           - signUp_steps.js
utils
     - util.js
.gitignore
LICENSE
README.md
package-lock.json
package.json
playwright.config.js
```

## Instalación

Para comenzar con el proyecto, primero necesitas clonar el repositorio y luego instalar las dependencias.

```bash
git clone https://github.com/dangelo97/atenea-conocimientos-challenge.git
cd atenea-conocimientos-challenge
npm install
```

## Scripts de NPM

En el archivo `package.json`, se han definido los scripts útiles:

- `test:headed`: Ejecuta las pruebas en modo headed (con interfaz gráfica).
- `test:regression`: Ejecuta las pruebas con la etiqueta `@regression` en modo headless.
- `test:headless`: Ejecuta todas las pruebas en modo headless (sin interfaz gráfica).

```bash
npm run test:headed
npm run test:regression
npm run test:headless
```

## Configuración de Playwright

El archivo `playwright.config.js` contiene la configuración necesaria para ejecutar las pruebas. Asegúrate de configurar las variables necesarias, especialmente la URL base (`BASE_URL`), que puede ser definida en tu entorno o a través de un archivo `.env`.

## Page Object Model (POM)

El proyecto está organizado utilizando el modelo de objeto de página, lo que facilita la mantenibilidad y escalabilidad de las pruebas.

- `base.page.js`: Clase base que contiene métodos y propiedades comunes a todas las páginas.
- `home.page.js`, `login.page.js`, `signUp.page.js`: Clases específicas para cada página, heredando de la clase base.

## Estructura de Pruebas

Las pruebas están organizadas en el directorio `tests`:

- `features`: Contiene los archivos `.feature` que definen los escenarios de prueba en Gherkin.
- `steps`: Contiene los archivos `.js` que implementan los pasos definidos en los archivos `.feature`.

## Utilidades

El directorio `utils` contiene archivos de utilidad, como `util.js`, que proporcionan funciones auxiliares utilizadas en las pruebas.

## Integración Continua (CI/CD)

El proyecto incluye un archivo de configuración de GitHub Actions (`.github/workflows/playwright.yml`) para la integración continua.

### Configuración del CI/CD

```yaml
name: Playwright Tests

on:
  push:
    branches: [develop, master]
  pull_request:
    branches: [develop, master]
  workflow_dispatch:

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        env:
          BASE_URL: ${{ secrets.BASE_URL }}
        run: npm run test:headless

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

Este flujo de trabajo se ejecuta en los eventos `push`, `pull_request` y `workflow_dispatch` en las ramas `develop` y `master`. Realiza las siguientes acciones:

1. Checkout del código.
2. Configuración del entorno Node.js.
3. Instalación de dependencias.
4. Instalación de los navegadores necesarios para Playwright.
5. Ejecución de las pruebas en modo headless.
6. Carga del reporte de Playwright como un artefacto.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.

## Autor

Dangelo Ferrieri

