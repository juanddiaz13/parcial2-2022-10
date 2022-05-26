#Nota para el calificador: hubo un problema con el archivo JSON que retornaba la API usando el fetch así que decidí hardcodear el JSON directamente para poder eliminar el elemento que afectaba el formato y poder continuar haciendo problemas sobre el parcial sin problemas

# Parcial 2



### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules (en el root)

   ```bash
   npm install
   ```

4. Ejecutar servidor. Ubicado en el root del repositorio ejecutar:

   ```bash
   npm run start
   ```

   El anterior comando desplegará el frontend de la aplicación en el puerto 3000. Ir **http://localhost:3000/** debería ver la página principal de la aplicación en react.

5. Si desea ejecutar la aplicación en modo producción. Siga los siguientes pasos:

- Ubicarse sobre el root del repositorio y ejecutar:
  ```bash
  npm run build
  ```
- Luego, dentro de la carpeta build ejecutar **http-server -o** (Si no tiene instalado el paquete ejecutar **npm install -g http-server**)

- Ahora al ingresar a **http://localhost:3000** debería observar la aplicación en react.

_Jhonatan Alarcón._
