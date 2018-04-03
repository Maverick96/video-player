//Getting started with react! Create a new component
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import SearchBar from './components/search_bar'
import searchYT from 'youtube-api-search'
import VideoList from './components/video_list'

const YOUTUBE_API_KEY = "AIzaSyAw7sr93wzdeSL8blWKeoPSPMxyn_n5dCA"

class App extends Component{
    constructor(props){
        super(props)
        this.state = { videos : [], term : ''}
        searchYT({key : YOUTUBE_API_KEY, term : 'React Javascript'}, (videos) =>{
            this.setState({videos : videos, term : ''})
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

//Add it to DOM
ReactDom.render(<App />, document.querySelector(".container"))

