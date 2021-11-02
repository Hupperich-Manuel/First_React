import React from "react";

const VideoListItem = ({video, onVideoSelect})=>{ //We are telling the function that please grab that video and declare a new video or a new variable called video
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className='video-list media'>
                <div className='video-left'>
                    <img className='media-object' src={imageUrl} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title} </div>
                </div>
            </div>
        </li>
    );
}
export default VideoListItem;