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
  Slider,
  TextInput,
  Keyboard
} from "react-native";

import styles from "../Searchpage/searchpage.scss";

import { withNavigation } from "react-navigation";

class Searchpage extends Component {
  //Screen navigation styling
  //   static navigationOptions = {
  //     header: null
  //   };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert("Keyboard Shown");
  }

  _keyboardDidHide() {
    alert("Keyboard Hidden");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SEARCH</Text>
        <TextInput
          style={styles.input}
          placeholder={"HOI"}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    );
  }
}

export default withNavigation(Searchpage);
