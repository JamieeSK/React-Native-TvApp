import React, { Fragment, Children } from "react";
import { View, Text, Image, TouchableHighlight, ActivityIndicator } from "react-native";
import axios from "axios";

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
    // this.navigate = this.navigate.bind(this);


    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData = () => {
    //* DAADWERKELIJKE LINK
    const liveUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/live`;

    // * TEST LINK!
    // const liveUrl = `https://acceptatie.sportnoord.nl/wp-json/wp/v2/sn-match/live`;
    // length= 1

    axios
      .get(liveUrl)
      .then(res => {
        const cache = res.data;
        const data = [];

        if (cache.length === 1) {
          this.setState ({
            isLive: true,

          });

          cache.forEach(element => {
            let video = {
              id: element.id,
              title: element.title.rendered,
              type: element.match_sport,
              image: element.featured_image.medium_large,
              // videoId: getId(element.videos[0].video),
              // date: element.match_dates.start,
              // video: element.videos[0],
              // videoParts: video.split("src=\""),
              // videoUrl: videoParts[1].split("?"),               
            };

            data.push(video);

          });
       
        } 
        else if (cache.length === 0) {
          this.setState ({
            isLive: false,
          });
        }

        this.setState({
          cache: data,
          isLoading: false,
        });
        console.log("data");
        console.log(data);

      })
      
      .catch(error => {
        if (error.response) {
          console.log(error.responderEnd);
        }
      });
  };

  onPress = () => {
    console.log("onPress Banner");
    const { cache } = this.state;
    this.props.navigation.navigate("VideoPlayer", 
    {
        // video: videoUrl, 
        title: cache[0].title,
        date: cache[0].date
    });
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
    const { isLoading, cache, isLive} = this.state;

    //FIXME: Banner -  //! LET OP! MOET NOG GETEST WORDEN!
    const Content = () => {

      return isLoading ? (         
        <View>
          <Text style={styles.bannerText}>ONLINE... </Text>
        </View>

      ) : (

        <View>
          {isLive ? 
            <TouchableHighlight
              onPress={() => this.onPress()}
            >
              <Text style={styles.bannerText}>LIVE</Text>
            </TouchableHighlight>
            
          : 
            <Image style={styles.banner_image} source={require("../img/offlineBanner.png")}></Image>
          }
        </View>
      );
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