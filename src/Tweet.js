import React from 'react'

export default function Tweet(props) {
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>This is a random tweet</p>
            <h3>Number of Likes</h3>
        </div>
    )
}
