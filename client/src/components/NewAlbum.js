import axios from 'axios'
import React, { Component } from 'react'
import loadToken from '../utils/loadToken'

export default class NewAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.placeholder]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { title, artist, genre } = this.state
        axios.post('http://localhost:3100/albums', {title, artist, genre}, loadToken())
        .then(response => console.log(response))
        .catch(error => console.log(error.response.data))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        />
                        <input 
                        placeholder="artist"
                        onChange={this.handleChange}
                        value={this.state.artist}
                        />
                        <input 
                        placeholder="genre"
                        onChange={this.handleChange}
                        value={this.state.genre}
                        />
                        <button>New Album</button>
                </form>
                
            </div>
        )
    }
}
