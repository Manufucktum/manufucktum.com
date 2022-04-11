import React from 'react'

// import ReactTwitchEmbedVideo from "react-twitch-embed-video"
// import { useWindowSize } from "../hooks/useWindowSize";

import '../styles/video.scss'

const Video = () => {
    return (
        <div className="video-container">
                <iframe title="videoEmbed" src="https://player.twitch.tv/?channel=streamnft&html5&parent=www.manufucktum.com" frameBorder="0" allowFullScreen={false} scrolling="no" height="378" width="620"></iframe>
                {/* <ReactTwitchEmbedVideo height="1080" width="1080" layout="video" channel="brutusbrecht" /> */}
        </div>
    )
}

export default Video