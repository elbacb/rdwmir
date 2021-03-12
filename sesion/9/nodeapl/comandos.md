## pasos aplicación en node
#### crear proyecto
mkdir nodeapl
(npm es un manejador de paquetes que permite crear aplicación de nodejs e instalarle paquetes)
npm init: repositorio en nodeapl
    package name: <nombre aplicación>
    version: <Enter>
    description:
    entry point: (archivo principal, referencia de esta aplicación) <archivo, por defecto index.js>
    test command: <Enter> (por ahora, )
    git repository: https://github.com/elbacb
    keywords: <pe: js>
    author: elbacb
    license: <por defecto ISC>
estos datos se guardan solos en el archivo package.json

#### instala librería (bcrypt)
npm i bcrypt. Se hizo en la carpeta padre de nodeapl, ie, en este caso dentro de 9/

#### crear el index.js

#### crear gitignore
**/node_modules/* en el gitignore para que no añada tantos archivos al repositorio
si se borra o no está esa carpeta en el repositorio y se necesita reinstalar esa carpeta -> npm install

#### ejecución
node index.js hola. hola es la cadena a encriptar