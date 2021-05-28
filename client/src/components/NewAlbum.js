import React, { Component } from 'react'


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
        this.props.createAlbum(this.state)
        // Clear form
        this.setState({title: "", artists: "", genre: ""})
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
