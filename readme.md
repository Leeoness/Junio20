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
version 4 con clases y version 5 con hooks / react routing
https://reactrouter.com/

//////////////////////////////////
ejericio conditional rendering / Tarea
mostrar componente signout (aun no creado)
cuando authFunction.isAuthenticated = true
###############################################################
mi scss
*{
  --primary: #07038C;
  --background-color: #0439D9;
  margin: 0;
  padding: 0;
}

body{
  background-color: var(--primary);
  color: whitesmoke;
  font-family: 'Baloo Tamma 2', cursive;
}
nav{
  background-color: orange;
}
nav ul {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}
nav ul li{
  padding: .6rem .9rem;
}
nav ul li a{
  display: inline-block;
  min-width: 15rem;
  background-color: azure;
  color: grey;
  border: .3rem solid rgb(9, 89, 164);
  border-radius: .3rem;
  padding: .3rem .6rem;
  text-decoration: none;
  margin-left: .6rem;
}
nav ul li a:hover{
  background-color: rgb(9, 89, 164);
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem;
}