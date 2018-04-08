import React,{ Component } from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term : ''}
    }

    handleOnChange(event){
        let term = event.target.value
        this.setState({term})
        this.props.handleSearch(term)
    }
    render(){
        return (
        <div className = "search-bar">
            <input type='text' 
            value = {this.state.term}
            onChange = {(event) => this.handleOnChange(event)} />
        </div>
        )
    }
}

export default SearchBar