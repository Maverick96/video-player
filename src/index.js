//Getting started with react! Create a new component
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import SearchBar from './components/search_bar'
import searchYT from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const YOUTUBE_API_KEY = "AIzaSyAw7sr93wzdeSL8blWKeoPSPMxyn_n5dCA"
let self = undefined;
class App extends Component{
    constructor(props){
        super(props)
        this.state = { 
            videos : [], 
            selectedVideo : null
        }
        self = this
        this.searchVideo('React Javascript')
        
    }
    searchVideo(term){
        console.log("Called at " + new Date())
        searchYT({key : YOUTUBE_API_KEY, term : term}, (videos) =>{
            console.log(this)
            this.setState({videos : videos, selectedVideo : videos[0]})
        })
    }
    render(){
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

