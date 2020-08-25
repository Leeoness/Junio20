const authFunction = {

  isAuthenticated: false,

  authenticate(callbackFn){
    authFunction.isAuthenticated = true
    setTimeout(callbackFn, 3000); //fake auth
  },
  signout(callbackFn){
    authFunction.isAuthenticated = false
    setTimeout(callbackFn, 3000); //fake auth
  }
}

export default authFunction