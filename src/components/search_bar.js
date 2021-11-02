import React, { Component } from "react";


//const Component = React.Component
//It is better to start with a functional component, however, when we notice that we need addes functionality we should refactor to a class 
class SearchBar extends Component{
    constructor(props){ //first and only function called automatically whenever a new instance of a class is created
        super(props);

        this.state= {term: ''}; //state is a plain js object that exists on any component that it's a class based component
    } //'' this initializes this.state

    render() { //This is the syntax fro defining methods in a class. It is like 'render function(){}'
        return ( 
            <div className="search-bar"> 
                <input 
                value = {this.state.term} //input is a control component. This does not change the input value, but the 'value'
                onChange = {event=>this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term); //this code is used to get the videos in list
    }
}

export default SearchBar;




//From the first class we only did a function. Now we include this in a class
//const SearchBar = () => {
    //return <input /> //it creates React.create element, thats why we import React
//};