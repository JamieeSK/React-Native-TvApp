import React, { Fragment, Children } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableHighlight, 
  ActivityIndicator 
} from "react-native";

import styles from "./banner.scss";

const getId = link => {
  return link.split("/c/")[1].replace(".js", "");
};

import { withNavigation } from 'react-navigation';

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLive: true,
      cache: [],
      navigation: this.props.navigation,

    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  onPress = () => {
    const { cache } = this.state;

    this.props.navigation.navigate("Live")
  };

  onSelect = () => {
    this.setState({ isSelected: true });
  };

  onExit = () => {
    this.setState({ isSelected: false });
  };


  render() {
    const { isLoading, cache, isLive} = this.state;

    //FIXME: Banner -  //! LET OP! MOET NOG GETEST WORDEN!
    const Content = () => {
      return (
          <TouchableHighlight
            onPress={() => this.onPress()}
          >
            <View>               
              <Image style={styles.banner_image} source={require("../img/liveBanner3.png")}></Image>
            </View>
          </TouchableHighlight>
      )
    };

    return (
      <>
        <View style={styles.bannerContainer}>
            <Content />
        </View>
      </>
    );
  }
}

export default withNavigation(Banner);
