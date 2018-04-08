import React from 'react'

const videoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url
    return (
        <li className = "list-group-item" onClick = {() => props.onclick(props.video)}>
            <div className = "video-list-media">
                <div className = "media-left">
                    <img className = "media-object" src = {imageUrl}/>
                 </div>   
                <div className = "media-body">
                    <div className = "media-heading"> 
                        {props.video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default videoListItem