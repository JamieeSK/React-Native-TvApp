import React, { Fragment, Children } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import axios from "axios";

import styles from "./banner.scss";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      cache: []
    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  fetchData = () => {
    //* DAADWERKELIJKE LINK
    const liveUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/live`;

    //* TEST LINK!
    // const liveUrl = `https://acceptatie.sportnoord.nl/wp-json/wp/v2/sn-match/live`;

    axios
      .get(liveUrl)
      .then(res => {
        const cache = res.data;
        const data = [];

        this.setState({
          cache: data,
          isLoading: true
        });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.responderEnd);
        }
      });
  };

  onPress = () => {
    console.log("onPress Banner");
  };

  onSelect = () => {
    console.log("#onSelect");
    this.setState({ isSelected: true });
  };

  onExit = () => {
    console.log("#onExit");
    this.setState({ isSelected: false });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { isLoading, cache, onPress } = this.state;
    console.log("Banner: " + isLoading);

    //FIXME: Banner -  //! LET OP! MOET NOG GETEST WORDEN!
    const Content = () => {
      return isLoading ? (
        <View>
          <TouchableHighlight>
            <Text>NOT ONLINE</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <TouchableHighlight onPress={() => this.fetchData()}>
            <Text>ONLINE...</Text>
          </TouchableHighlight>
        </View>
      );
    };

    return (
      <>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerContainer}>
            {/* <Image style={styles.bannerPic} source={require('../img/test.jpeg')}></Image> */}
            <Content />
            {/* <Image styles={styles.bannerPic}></Image> */}
            {/* <View style={styles.bannerTest}> */}
            {/* <Image style={styles.bannerFiets} source={require('../img/screenshot.png')}></Image> */}
            {/* <Text style={styles.textTest}>{'{'}Catogorieën{'}'}</Text> */}
            {/* </View> */}
          </View>
        </View>
      </>
    );
  }
}
