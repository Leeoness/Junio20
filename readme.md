se modifica el start en el package.json
src/index.js && node dist/main.js

se cambia el modo de inicio para poder diferenciar entre modo dev y prod
"webpack --config webpack.dev.js"

esta va en webpack common en caso de requerir un script
scripts: './src/scripts'

div.card.mb-4>div.card-header-py-3+div.card-body
> para tener hijos
+ para tener hermanos

React
npm i -D browser-sync
agregaremos babel
Ejemplo de reac con arrowfunctions
############################################
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <title>Class component</title>
</head>

<body>
  <div id="root"></div>
  <a onclick="window.history.back()">Go Back</a>

  <script type="text/babel">
    const ReactFunctionalComponent = () => {
      const msg = "React class component"
      return (
        <div>
          <h3>{msg}</h3>
          <InnerClassComponent1 />
          <InnerClassComponent2 />
        </div>
      )
    }
    const InnerClassComponent1 = () => {
      return (
        <h3>Inner functional component 1</h3>
      )
    }
    const InnerClassComponent2 = () => {
      return (
        <div>
          <h3>Inner functional component 2</h3>
          <p>composed by two tags</p>
        </div>
      )
    }


    ReactDOM.render(
      <ReactFunctionalComponent />,
      document.querySelector('#root')
    )
  </script>
</body>

</html>
###################################################
props es de react
#####################################################
