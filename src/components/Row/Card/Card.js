import React, { Fragment } from "react";
import { View, Text, Image, Button, TouchableHighlight } from "react-native";

import styles from "./card.scss";
// import Video from 'react-native-video';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      id: this.props.id,
      title: this.props.title,
      type: this.props.type,
      image: this.props.image,
      videoId: this.props.videoId,
      date: this.props.date,
      videoUrl: this.props.videoUrl
    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  onPress = () => {
    console.log("#onPress");
  };

  onSelect = () => {
    console.log("#onSelect");
    this.setState({ isSelected: true });
  };

  onExit = () => {
    console.log("#onExit");
    this.setState({ isSelected: false });
  };

  render() {
    const { isSelected, id, title, type, image, videoUrl } = this.state;

    console.log(videoUrl)

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
