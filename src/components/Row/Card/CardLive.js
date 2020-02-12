import React, { Fragment } from "react";
import { View, Text, Image, Button, TouchableHighlight } from "react-native";
//StyleSheet
import styles from "./card.scss";
//Screen navigation
import { withNavigation } from "react-navigation";

class CardLive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      id: this.props.id,
      title: this.props.title,
      type: this.props.type,
      image: this.props.image,
      videoId: this.props.videoId,

      // date: this.props.date,
      videoUrl: this.props.videoUrl,
      navigation: this.props.navigation,
      newVideoUrl: ""
    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate = () => {};

  onPress = () => {
    const { newVideoUrl, videoUrl, title, date } = this.state;

    this.props.navigation.navigate("VideoPlayerLive", {
      video: videoUrl[1],
      // video: newVideoUrl,
      title: title
    });
  };

  onSelect = () => {
    this.setState({ isSelected: true });
  };

  onExit = () => {
    this.setState({ isSelected: false });
  };

  render() {
    const { isSelected, id, title, type, image } = this.state;
    const appName = config.displayName.toUpperCase();

    return (
      <>
        <TouchableHighlight
          key={id}
          onPress={() => this.onPress()}
          onShowUnderlay={() => this.onSelect()}
          onHideUnderlay={() => this.onExit()}
          activeOpacity={0.7}
          underlayColor={"transparent"}
        >
          <View>
            <View
              style={
                ([styles.imageContainer],
                isSelected ? styles.selectedCard : styles.unselectedCard)
              }
            >
              <Image
                source={{ uri: image }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.type}>
                {appName}
                <Text style={styles.icon}>&#9679;</Text> {type}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </>
    );
  }
}

export default withNavigation(CardLive);
