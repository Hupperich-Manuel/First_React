import { thru } from "lodash";
import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API = 'AIzaSyCZ0COpGJB7qZfpQHhzdNWGyqf95kRqO38';

//Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props); //in a function object props is an argument. In a class based component you have to use this.props 'this' == 'self.'

        this.state = {  //this state is used for looping
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    };
    videoSearch(term) {
        YTSearch({key: API, term:term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
       });//this.setState({videos:videos}) it only woks when those have the same name
    };

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/> 
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} /> 
            </div> //this.state.videos is in brakets because it is javascript
        );
    }
}
//Take this componenets generated and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));