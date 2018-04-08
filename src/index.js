//Getting started with react! Create a new component
import React, {Component} from 'react'
import ReactDom from 'react-dom'
//search videos from youtube
import SearchBar from './components/search_bar'
import searchYT from 'youtube-api-search'
//lists top 5 videos based on the search
import VideoList from './components/video_list'
//provides a video player for the selected video
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const YOUTUBE_API_KEY = "AIzaSyAw7sr93wzdeSL8blWKeoPSPMxyn_n5dCA"

class App extends Component{
    constructor(props){
        super(props)
        this.state = { 
            videos : [], 
            selectedVideo : null
        }
        this.searchVideo('React Javascript')
        
    }
    searchVideo(term){
        // console.log("Called at " + new Date())

        //Fetch search results on updation of search term
        searchYT({key : YOUTUBE_API_KEY, term : term}, (videos) =>{
            console.log(this)
            this.setState({videos : videos, selectedVideo : videos[0]})
        })
    }
    render(){
        //Throttle search, function is called after 400ms it was last invoked
        const searchVideo = _.debounce((term) => {this.searchVideo(term)}, 400)
        return (
            <div>
                <SearchBar handleSearch = {searchVideo}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onClick={(video) => this.setState({selectedVideo : video})} />
            </div>
        )
    }
}

//Add it to DOM
ReactDom.render(<App />, document.querySelector(".containers"))

