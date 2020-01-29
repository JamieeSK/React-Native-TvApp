import React, { Fragment, Children } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import axios from "axios";

import styles from "./banner.scss";

import CardBanner from "./CardBanner";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLive: false,
      cache: []
    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  fetchData = () => {
    //* DAADWERKELIJKE LINK
    // const liveUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/live`;

    //* TEST LINK!
    const liveUrl = `https://acceptatie.sportnoord.nl/wp-json/wp/v2/sn-match/live`;
    // length= 1

    axios
      .get(liveUrl)
      .then(res => {
        const cache = res.data;
        const data = [];
        

        this.setState({
          cache: data,
          isLoading: true
        });
        console.log(cache);
        console.log(cache.length);
        console.log("cache[]");
        
        console.log(cache[0]);

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
              videoId: getId(element.videos[0].video),
              date: element.match_dates.start,
              video: element.videos[0],
              videoParts: video.split("src=\""),
              videoUrl: videoParts[1].split("?"),               
            };
  
            data.push(video);
          });
       
        } else if (cache.length === 0) {
          this.setState ({
            isLive: false,
          });
        }

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
    const { isLoading, cache, onPress, isLive} = this.state;
    console.log("Banner: " + isLoading);
    console.log("IsLive: " + isLive);

    //FIXME: Banner -  //! LET OP! MOET NOG GETEST WORDEN!
    const Content = () => {
      return isLive ? (
        // cache.map(child => (
        // <CardBanner
        //     key={child.id}
        //     id={child.id}
        //     title={child.title}
        //     type={child.type}
        //     image={child.image}
        //     videoId={child.videoId}
        //     date={child.date}
        //     videoUrl={child.videoUrl}
        //   />
        // ))

        <View>
          <TouchableHighlight onPress={() => this.fetchData()}>
            <Text style={styles.bannerText}>ONLINE...</Text>
          </TouchableHighlight>
        </View>

      ) : (
        <View>
          <TouchableHighlight>
            <Text style={styles.bannerText}>NOT ONLINE</Text>
          </TouchableHighlight>
        </View>
      );
    };

    return (
      <>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerContainer}>
            {/* <Image style={styles.bannerPic} source={require('../img/test.jpeg')}></Image> */}
            {/* <Text style={styles.bannerText}>HALLO</Text> */}
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
