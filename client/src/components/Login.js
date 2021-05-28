import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = this.state
        axios.post('http://localhost:3100/users/login', { email, password })
        .then(response => {
            // Set auth token if the login was successful
            const { authtoken } = response.headers
            if(response.status === 200 && authtoken){
                localStorage.setItem('authToken', authtoken)
                this.setState({ email: "", password: "", message: "Logged in Successfully" })
            }
        })
        .catch(err => console.log(err))
        // Reset input fields
        this.setState({ email: "", password: ""})
    }

    logout = () => {
        // Remove auth token from local storage
        const authToken = localStorage.authToken
        if(authToken) localStorage.removeItem('authToken')
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
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
