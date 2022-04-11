import React, { Component } from "react"
import PropTypes from "prop-types"
// import Img from "gatsby-image"
// import styled from "styled-components"
// import { Dialog } from "@reach/dialog"
// import "@reach/dialog/styles.css"
import '../styles/lightbox.scss'


export default class Lightbox extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired, // eslint-disable-line
  }
  constructor(props) {
    super(props)
    
    this.state = {
      showLightbox: false,
      selectedVideo: null,
    }
  }
  render() {
    const { videos, width, height } = this.props
    
    const { selectedVideo, showLightbox } = this.state
    console.log(videos);
    return (
      <>
       <div className="lightbox-container">
          {videos.nfts.map(video => (
         
            <button
              key={video.id}
              className="lightbox-button"
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedVideo: video })
              }>
                
                <div className="lightbox-video"><video  loop src={video.file} type="video/m4v" /></div>
                <div className="lightbox-content">  
                  <span>{videos.artist.name}</span>
                  <h1>{video.title}</h1> 
                  <div className="lightbox-buy"><span>Buy Now</span>
                  <svg viewBox="0 0 10 35" fill="black">        
                        <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                    </svg>
                    </div>
                </div>

             </button>
          ))}
        </div>
        {/* {showLightbox && (
          <Dialog>
            <div className="lightbox-overlay"  
                style={{
                    width: width,
                    height: height
                }} >
          
            <video  
                autoplay="true"
                loop="true" 
                src={selectedVideo.file} 
                type="video/m4v" 
            />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
            X
            </button>
            </div>
          </Dialog>  */}
        )}
      </>
    )
  }
}