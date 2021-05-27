import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3100/users/login', this.state)
        .then(response => {
            // Set auth token if the login was successful
            const { authtoken } = response.headers
            if(authtoken){
                localStorage.setItem('authToken', authtoken)
            }
        })
        .catch(err => console.log(err))
        this.setState({ email: "", password: ""})
    }

    logout = () => {
        const authToken = localStorage.authToken
        if(authToken) localStorage.removeItem('authToken')
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleChange} 
                    value={this.state.email}
                    name="email" 
                    placeholder="email"
                    />
                    <input 
                    onChange={this.handleChange}
                    value={this.state.password}
                    name="password"
                    type="password"
                    placeholder="password"
                    />
                    <button>Login</button>
                    
                </form>
                <button onClick={this.logout}>Logout</button>
                <p>test</p>
            </div>
        )
    }
}
