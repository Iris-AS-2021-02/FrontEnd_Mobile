import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
      </Scene>
   </Router>
)
export default Routes