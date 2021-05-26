import React, { Component } from 'react'
import axios from 'axios'
import Login from './components/Login'
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
    axios.get('http://localhost:5000', options)
    .then(data => {
      console.log(data)
    })
  }  

  login = () => {
    axios.post('http://localhost:5000/users/login',{
      username: "anthony",
      email: "anthony@fake.com"
    })
    .then(response => {
      console.log(response)
      if(response.headers.authtoken != null){
        localStorage.setItem('authtoken', response.headers.authtoken)
      }
     
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>app</h1>
        <button onClick={this.get}>get</button>
        <button onClick={this.login}>post</button>
        <Login></Login>
      </div>
    )
  }
}
