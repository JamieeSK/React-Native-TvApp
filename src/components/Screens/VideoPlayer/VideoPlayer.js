import React, { Component } from 'react';
//Import React
import { 
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight 
} from 'react-native';
//Import Basic React Native Component
import Video from 'react-native-video';
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
//Media Controls to control Play/Pause/Seek and full screen


import { withNavigation } from 'react-navigation';

// This does not work!!!!!
// import styles from "app.css";

class VideoPlayer extends Component {
    videoPlayer;

    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0,
            isFullScreen: false,
            isLoading: true,
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
            // screenType: 'content',
            screenType: "cover", //changed from "content" to "cover"
            navigation: this.props.navigation,
        };
    
        this.goBack = this.goBack.bind(this);
    }

    static navigationOptions = {
        // title: "VideoPlayer", 
        
        // headerShown: false,
        // header: null,
        // header: !null,
        // headerTitle: "Video" ,
        // headerTintColor: "white",

        // headerStyle: {
        //     backgroundColor: "black",
        //     // backgroundColor: "transparent",/
        // }, 
    }

    onSeek = seek => {
        //Handler for change in seekbar
        this.videoPlayer.seek(seek);

    };

    onPaused = playerState => {
        //Handler for Video Pause
        this.setState({
            paused: !this.state.paused,
            playerState,
        });

        //? Kijken of dit kan.. 
        //*Wanneer video op pauze is, de header laten zien. Anders niet.
        if (this.paused) {
            navigationOptions = {
                header: !null,
                title: "VideoPlayer", 
                headerTitle: "Video",
                headerTintColor: "white",

                headerStyle: {
                    backgroundColor: "black",
                
                },
            }
        }
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

    goBack = () => {
        this.props.navigation.goback(null);
    }

    renderToolbar = () => (
        <TouchableHighlight>
            <View>
                <Text> Name Video </Text>
            </View>
        </TouchableHighlight>
    );

    onSeeking = currentTime => this.setState({ currentTime });

    render() {
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
                    source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
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

// export default VideoPlayer;
export default withNavigation(VideoPlayer);