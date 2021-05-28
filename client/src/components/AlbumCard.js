import React from 'react'

export default function AlbumCard(props) {
    // Destructure props for ease of use
    const { title, artist, genre } = props.album
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li>Artist: {artist}</li>
                <li>Genre: {genre}</li>
            </ul>
        </div>
    )
}
