//Import React
import React, { Component } from 'react';
//Import Basic React Native Component
import { 
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight,
    Image,
    Slider,
} from 'react-native';

//Import React Native Video to play video
import Video from 'react-native-video';
//Media Controls to control Play/Pause/Seek and full screen
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

//StyleSheet
import stylesImg from "../VideoPlayer/videoPlayer.scss";
//Screen navigation
import { withNavigation } from 'react-navigation';

// This does not work!!!!!
// import styles from "app.css";

//FIXME: //!Fix tvHandler. _enableTVEventHandler()

var TVEventHandler = require('TVEventHandler');

class VideoPlayer extends Component {
    videoPlayer;
    _tvEventHandler;
    
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0,
            isFullScreen: false,
            isLoading: true,
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
            screenType: "cover", //changed from "content" to "cover"
            navigation: this.props.navigation,
        };
    
        this.goBackButton = this.goBackButton.bind(this);
    }

    //Screen navigation styling
    static navigationOptions = {
        header: null,
    }

    // _enableTVEventHandler() {
    //   this._tvEventHandler = new TVEventHandler();
    //   this._tvEventHandler.enable(this, function(cmp, evt) {
    //     if (evt && evt.eventType === 'right') {
    //       cmp.setState({Gboard: cmp.state.board.move(2)});
    //     } else if(evt && evt.eventType === 'up') {
    //       cmp.setState({board: cmp.state.board.move(1)});
    //     } else if(evt && evt.eventType === 'left') {
    //       cmp.setState({board: cmp.state.board.move(0)});
    //     } else if(evt && evt.eventType === 'down') {
    //       cmp.setState({board: cmp.state.board.move(3)});
    //     } else if(evt && evt.eventType === 'playPause') {
    //       cmp.restartGame();
    //     }
    //     console.log("cmp:" + cmp);
    //   console.log("evt:" + evt);
    //   });
      
      _enableTVEventHandler() {
        this._tvEventHandler = new TVEventHandler();
        this._tvEventHandler.enable(this, function(cmp, evt) {

          if (evt) {
            // console.log(evt);
            // console.log(evt.eventType);
            // console.log(cmp);
        
          }

        //   if (evt && evt.eventType === "rewind"){
        //     console.log("REWIND");
        //   }

          
          if (evt && evt.eventType === "select"){
            // console.log("SELECT");
            
            
          }


          if (evt && evt.eventType === "playPause") {
            // console.log("cmp.state.paused:");
            // console.log(cmp.state.paused);
            
            if (cmp.state.paused == false) {
                // console.log(cmp);
                
                cmp.state.paused = true;

                // console.log("true");
                // console.log(cmp);
            } else {
                
           //FIXME: //! Won't set the state to "false" once the state is "true"
                cmp.state.paused = false;
                
                // console.log("false");
                // console.log(cmp);
            }

          }

        });
    }
  
    _disableTVEventHandler() {
      if (this._tvEventHandler) {
        this._tvEventHandler.disable();
        delete this._tvEventHandler;
      }
    }
  
    componentDidMount() {
      this._enableTVEventHandler();
    }
  
    componentWillUnmount() {
      this._disableTVEventHandler();
    }

    onSeek = seek => {
        //Handler for change in seekbar
        this.videoPlayer.seek(seek);   
        // console.log(seek);
    };

    // onRewind = seek => {
    //     this.videoPlayer.seek(seek - 5);   
    //     console.log(seek - 5);
    // }

    onPaused = playerState => {
        //Handler for Video Pause
        this.setState({
            paused: !this.state.paused,
            playerState,
        });

        // console.log("paused: ");
        // // console.log(this.state.paused);
        // console.log(this.playerState);
        

    };

    onReplay = () => {
        //Handler for Replay
        this.setState({ playerState: PLAYER_STATES.PLAYING });
        this.videoPlayer.seek(0);
    };

    onProgress = data => {
        const { isLoading, playerState } = this.state;
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currentTime: data.currentTime });
        }
    };

    onLoad = data => this.setState({ duration: data.duration, isLoading: false });

    onLoadStart = data => this.setState({ isLoading: true });

    onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

    onError = () => alert('Oh! ', error);

    exitFullScreen = () => {
        alert('Exit full screen');
    };

    enterFullScreen = () => {};

    onFullScreen = () => {
        if (this.state.screenType == 'content')
            this.setState({ screenType: 'cover' });
        else this.setState({ screenType: 'content' });
    };

    goBackButton = () => {
        this.props.navigation.goBack();
    }

    renderToolbar = () => (
        <TouchableHighlight
            onPress={() => this.goBackButton()}
        >
            <View style={stylesImg.container}>
                <Image style={stylesImg.img} source={require('../../img/goback.png')}></Image>
                <Text style={stylesImg.text}>{ JSON.stringify(this.props.navigation.getParam("title", 'Untitled')) } </Text>
            </View>
        </TouchableHighlight>
    );

    onSeeking = currentTime => this.setState({ currentTime });

    render() {
        let video = JSON.stringify(this.props.navigation.getParam("video", 'NO-Video'))
        video = video.replace(/\"/g, "");        


        // console.log("LOADING: ");
        // console.log(this.state.isLoading);
        
        
        // console.log("playerstate: ");
        // console.log(this.state.playerState);

        console.log("paused: ");
        console.log(this.state.paused);

        return (
            <View style={styles.container}>
                <Video
                    onEnd={this.onEnd}
                    onLoad={this.onLoad}
                    onLoadStart={this.onLoadStart}
                    onProgress={this.onProgress}
                    paused={this.state.paused}
                    ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                    resizeMode={this.state.screenType}
                    onFullScreen={this.state.isFullScreen}
                    source={{ uri: video }}
                    style={styles.mediaPlayer}
                    volume={50}
                />
                <MediaControls
                    duration={this.state.duration}
                    isLoading={this.state.isLoading}
                    mainColor="#333"
                    onFullScreen={this.onFullScreen}
                    onPaused={this.onPaused}
                    onReplay={this.onReplay}
                    onSeek={this.onSeek}
                    onSeeking={this.onSeeking}
                    playerState={this.state.playerState}
                    progress={this.state.currentTime}
                    toolbar={this.renderToolbar()}
                />
            </View>
        );
    }
}

//only works with styling in the script.
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
   
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
});

export default withNavigation(VideoPlayer);