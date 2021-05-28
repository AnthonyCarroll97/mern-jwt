import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            message: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, email, password, password2 } = this.state
        axios.post('http://localhost:3100/users/register', {username, email,password, password2})
        .then(response => {
            if(response.status === 201) {
                this.setState({ 
                    message: "Account created successfully",
                    email: "",
                    password: "",
                    password2: "",
                    username: ""
                })     
            }

        })
        .catch(err => console.log(err.error))
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
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
