se modifica el start en el package.json
src/index.js && node dist/main.js

se cambia el modo de inicio para poder diferenciar entre modo dev y prod
"webpack --config webpack.dev.js"

esta va en webpack common en caso de requerir un script
scripts: './src/scripts'