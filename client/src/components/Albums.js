import axios from 'axios'
import React, { Component } from 'react'
import AlbumCard from './AlbumCard'
import NewAlbum from './NewAlbum'
import loadToken from '../utils/loadToken'

export default class Albums extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums: []
        }
    }
    componentDidMount(){
        this.getAlbums()
    }
    getAlbums = () => {
        axios.get('http://localhost:3100/albums')
        .then(response => {
            console.log(response)
            this.setState({albums: response.data})
        })
    }
    createAlbum = (albumObj) => {
        axios.post('http://localhost:3100/albums', albumObj, loadToken())
        .then(response => this.getAlbums())
        .catch(error => console.log(error.response.data))
    }

    renderAlbums = () => {
        return this.state.albums.map((album, index) => {
            return <AlbumCard album={album} key={index}></AlbumCard>
        })
    }


    render() {
        return (
            <div>
                <h1>Albums page</h1>
                {this.state.albums ? this.renderAlbums() : null}
                <NewAlbum createAlbum={this.createAlbum}></NewAlbum>
            </div>
        )
    }
}
