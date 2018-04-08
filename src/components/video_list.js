import React from 'react'
import VideoListItem from './video_list_item'

const videoList = (props) => {
    const videoItems = props.videos.map((video,index) => {
        return <VideoListItem key= {video.etag} video={video} onclick={props.onClick} />
    })
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default videoList