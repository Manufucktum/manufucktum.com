import React, { Component} from 'react'
import ReactPlayer from 'react-player'
import png from '../assets/layer.png';
import '../styles/video.scss';

class Video extends Component {
  
    state = {
      playing:true,
      volume: 0.8,
      pulled:false,
      loop:true,
      loading:false,
      muted: true,
      key: 0,
      url:'https://api.manufucktum.com/IN_01_teaser.mp4'
    }

    handlePlayPause = () => {
      this.setState({ playing: !this.state.playing })
    }

    handleError = () => {
      // console.log(this.player)
    }
    
    handlePlay = () => {
      // console.log(this.player.player);
    }

    handlePause = () => {
      // console.log(this.player.player); 
    }

    handleEnded = () => {
      // console.log('end');    
      // console.log(this.state.key+1);
         this.setState({key:this.state.key+1});
    }

    handleReady = () => {
      let live = this.props.manu.live;
      console.log(this.props.manu);
      if(!live){
        this.setState({pulled:true,url:"https://api.manufucktum.com/IN_01_teaser.mp4"});
      } else {
        this.setState({pulled:true,url:"https://www.twitch.tv/streamNFT"});
      }
    }
  
    handleStop = () => {
      // console.log(this.player);
      this.setState({ url: null, playing: false })
    }

    handleToggleMuted = () => {
      this.setState({ muted: !this.state.muted })
    }
    
    renderLoadButton = (url, label) => {
      return (
        <button onClick={() => this.load(url)}>
          {label}
        </button>
      )
    }
    ref = player => {
      this.player = player
    }
  
    render () {
    
      const { playing, muted ,key,url} = this.state;
 
      return (      
          <div className="video-container">
          <div className="hider">
            <img src={png} alt=""/>
              <ReactPlayer 
                 key={key}
                  url={url}
                  ref={this.ref}
                  muted={muted}
                  onEnded={this.handleEnded}
                  playing={playing}
                  onPlay={this.handlePlay}
                  onReady={this.handleReady}
                  onError={this.handleError}
                  config={
                   { 
                    twitch:{
                        options:{
                          'font-size':'small',
                          autoplay: 'true'
                        }
                    },
                    file: { 
                      attributes: { 
                        controlsList: "nodownload noremoteplayback noplaybackrate",
                        playsInline: true
                      } 
                    } 
                  }
                }
              />

          </div>
          <div className="playing" >
      
          {!playing ? 
            <button onClick={this.handlePlayPause}> 
              <svg 
                width="75px" height="75px" viewBox="0 0 75 75" fillRule="evenodd" clipRule="evenodd" >   
                <path d="M68.9,38l-62,33.8V4.2L68.9,38z M9.7,67.1L63,38L9.7,8.9V67.1z" />
              </svg>
            </button>: ''}
          </div>
          <div className="controls">
            <button onClick={this.handleToggleMuted} style={{ backgroundColor: this.props.manu.dark,color: this.props.manu.light  }}> 
            {muted ? 
              <svg 
                width="24" height="24" fillRule="evenodd" clipRule="evenodd"  style={{ fill: this.props.manu.light   }}>   
                <path d="M18 23l-9.305-5.998.835-.651 7.47 4.815v-10.65l1-.781v13.265zm0-15.794l5.384-4.206.616.788-23.384 18.264-.616-.788 5.46-4.264h-2.46v-10h5.691l9.309-6v6.206zm-11.26 8.794l1.26-.984v-7.016h-4v8h2.74zm10.26-8.013v-5.153l-8 5.157v6.244l8-6.248z" />
              </svg>  : 
              <svg 
                width="24" height="24" fillRule="evenodd" clipRule="evenodd"  style={{ fill: this.props.manu.light   }}>   
                <path d="M15 23l-9.309-6h-5.691v-10h5.691l9.309-6v22zm-9-15.009v8.018l8 5.157v-18.332l-8 5.157zm14.228-4.219c2.327 1.989 3.772 4.942 3.772 8.229 0 3.288-1.445 6.241-3.77 8.229l-.708-.708c2.136-1.791 3.478-4.501 3.478-7.522s-1.342-5.731-3.478-7.522l.706-.706zm-2.929 2.929c1.521 1.257 2.476 3.167 2.476 5.299 0 2.132-.955 4.042-2.476 5.299l-.706-.706c1.331-1.063 2.182-2.729 2.182-4.591 0-1.863-.851-3.529-2.184-4.593l.708-.708zm-12.299 1.299h-4v8h4v-8z" />
              </svg>
            }</button>
          </div>    
        </div>
      )
    }
}

export default Video


