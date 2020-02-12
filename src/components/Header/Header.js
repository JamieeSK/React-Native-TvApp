import React, { Fragment } from "react";
import { View, Image } from "react-native";

import styles from "./header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  onPress = () => {};

  onSelect = () => {
    this.setState({ isSelected: true });
  };

  onExit = () => {
    this.setState({ isSelected: false });
  };

  render() {
    return (
      <>
        <View style={styles.headerContainer}>
          <View style={styles.cardContainer}>
            <Image
              style={styles.headerLogo}
              source={require("../img/SPORTNOORD_logo_RGB_diap.png")}
            ></Image>
          </View>
        </View>
      </>
    );
  }
}
