//Import React
import React, { Component } from "react";
//Import Basic React Native Component
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Slider
} from "react-native";

//Import React Native Video to play video
import Video from "react-native-video";
//Media Controls to control Play/Pause/Seek and full screen
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";

//StyleSheet
import stylesImg from "../VideoPlayer/videoPlayer.scss";
//Screen navigation
import { withNavigation } from "react-navigation";

// This does not work!!!!!
// import styles from "app.css";

//FIXME: //!Fix tvHandler. _enableTVEventHandler()

var TVEventHandler = require("TVEventHandler");

class VideoPlayer extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this._tvEventHandler;

    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: "cover", //changed from "content" to "cover"
      navigation: this.props.navigation
    };

    this.goBackButton = this.goBackButton.bind(this);
  }

  //Screen navigation styling
  static navigationOptions = {
    header: null
  };

  // TODO: add backbutton eventType = "back";
  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, (cmp, evt) => {
      if (evt && evt.eventType === "right") {
        if (this.state.currentTime + 5 < this.state.duration) {
          this.onSeek(this.state.currentTime + 5);
        }
      } else if (evt && evt.eventType === "back") {
        this.props.navigation.navigate("Homepage");
      } else if (evt && evt.eventType === "left") {
        if (this.state.currentTime - 5 > 0) {
          this.onRewind(this.state.currentTime);
        } else {
          this.onSeek(0);
        }
      } else if (evt && evt.eventType === "down") {
      } else if (evt && evt.eventType === "select") {
        if (this.state.paused) {
          this.onPaused(PLAYER_STATES.PLAYING);
        } else {
          this.onPaused(PLAYER_STATES.PAUSED);
        }
      } else if (evt && evt.eventType === "playPause") {
        if (this.state.paused) {
          this.onPaused(PLAYER_STATES.PLAYING);
        } else {
          this.onPaused(PLAYER_STATES.PAUSED);
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
  };

  onRewind = seek => {
    this.videoPlayer.seek(seek - 5);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState
    });
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

  onError = () => alert("Oh! ", error);

  exitFullScreen = () => {
    alert("Exit full screen");
  };

  enterFullScreen = () => {};

  onFullScreen = () => {
    if (this.state.screenType == "content")
      this.setState({ screenType: "cover" });
    else this.setState({ screenType: "content" });
  };

  goBackButton = () => {
    this.props.navigation.goBack();
  };

  renderToolbar = () => (
    <TouchableHighlight onPress={() => this.goBackButton()}>
      <View style={stylesImg.container}>
        <Image
          style={stylesImg.img}
          source={require("../../img/goback.png")}
        ></Image>
        <Text style={stylesImg.text}>
          {JSON.stringify(this.props.navigation.getParam("title", "Untitled"))}{" "}
        </Text>
      </View>
    </TouchableHighlight>
  );

  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    let video = JSON.stringify(
      this.props.navigation.getParam("video", "NO-Video")
    );
    video = video.replace(/\"/g, "");

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
    flex: 1
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5
  },

  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black"
  }
});

export default withNavigation(VideoPlayer);
