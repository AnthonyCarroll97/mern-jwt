import React, { Component } from 'react'
import axios from 'axios'
import Login from './components/Login'
import Register from './components/Register'
import Albums from './components/Albums'
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom'

export default class App extends Component {

  get = () => {
    let options
    if(localStorage.getItem('authToken')){
       options = {
        headers: {
          authToken: localStorage.getItem('authToken')
        }
      }
    }
    axios.get('http://localhost:3100/albums', options)
    .then(data => {
      console.log(data)
    })
  }  

  render() {
    return (
      <div>
        <Login></Login>
        <BrowserRouter>
          <Switch>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/register" exact component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
