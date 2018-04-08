import React from 'react'

const videoDetail = (props) => {
    if(!props.video){
        return <div className = 'video-detail'> Loading..... </div>
    }
    
    const videoId = props.video.id.videoId
    const videoUrl = `https://www.youtube.com/embed/${videoId}`
    const title = props.video.snippet.title
    const description = props.video.snippet.description
    return (
        <div className = "video-detail col-md-6">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {videoUrl}/>
            </div>
            <div className="detail">
                <div>{title}</div>
                <div>{description} </div>
            </div>
        </div>
    )
}

export default videoDetail