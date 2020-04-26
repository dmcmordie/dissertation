import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import AddProfileComponent from './addProfile/addProfile';
import InformationComponent from './information/information';
import MenuComponent from './menu/menu';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDYwh4gWL2YmgjhpbB33NJRJgrx6yCgDNI",
    authDomain: "candid-5172d.firebaseapp.com",
    databaseURL: "https://candid-5172d.firebaseio.com",
    projectId: "candid-5172d",
    storageBucket: "candid-5172d.appspot.com",
    messagingSenderId: "736961618968",
    appId: "1:736961618968:web:9b6339968909dd8f1e0f6d",
    measurementId: "G-RLN00LP52N"
});

const routing = (
  <Router>

    <div id='routing-container'>

      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      <Route path='/addProfile' component={AddProfileComponent}></Route>
      <Route path='/menu' component={MenuComponent}></Route>
      <Route path='/information' component={InformationComponent}></Route>
    </div>

  </Router>
)

ReactDOM.render(
    routing, document.getElementById('root')
);

//renders divs into document.getElementById('root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
