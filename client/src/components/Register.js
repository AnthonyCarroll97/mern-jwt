import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3100/users/register', this.state)
        .then(response => console.log(response))
        .catch(err => console.log(err.error))
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                <input
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input 
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />

                <input 
                placeholder="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
                <input 
                placeholder="repeat password"
                name="password2"
                type="password"
                value={this.state.password2}
                onChange={this.handleChange}
                />
                <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
