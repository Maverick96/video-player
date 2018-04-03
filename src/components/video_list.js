import React from 'react'

const videoList = (props) => {
    console.log("Hey" + props.videos.length)
    return (
        <ul className = "col-md-4 list-group">
        </ul>
    )
}

export default videoList