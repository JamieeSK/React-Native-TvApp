import React, { Fragment } from "react";
import axios from "axios";
import {
  View,
  ScrollView,
  Text,
  Platform,
  ActivityIndicator
} from "react-native";

import Card from "./Card/CardVideo";

import styles from "./row.scss";

/**
 * @async
 * @param {string} link the id for the link.
 * @returns the Id of the video.
 *
 * @author Tim Twiest
 * @version 0.0.1
 * @since 0.0.1
 */
const getId = link => {
  return link.split("/c/")[1].replace(".js", "");
};

export default class RowVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      cache: []
    };

    this.onScroll = this.onScroll.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  onScroll = () => {
    console.log("#onScroll");
  };

  fetchData = () => {
    const videoUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/ondemand?page=1&per_page=50`;

    axios
      .get(videoUrl)
      .then(res => {
        const cache = res.data;
        const data = [];

        cache.forEach(element => {
          let video = {
            id: element.id,
            title: element.title.rendered,
            type: element.match_sport,
            image: element.featured_image.medium_large,
            videoId: getId(element.videos[0].video),
            date: element.match_dates.start,
            videoUrl: `https://ndc.bbvms.com/mediaclip/${getId(
              element.videos[0].video
            )}/redirect/MP4_HD`
          };

          data.push(video);
        });

        this.setState({
          cache: data,
          isLoading: false
        });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.responderEnd);
        }
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { isLoading, cache } = this.state;
    console.log(isLoading);

    const Content = () => {
      return isLoading ? (
        <ActivityIndicator
          style={styles.activityWrapper}
          size="large"
          color="#E62341"
        />
      ) : (
        cache.map(child => (
          <Card
            key={child.id}
            id={child.id}
            title={child.title}
            type={child.type}
            image={child.image}
            videoId={child.videoId}
            date={child.date}
            videoUrl={child.videoUrl}
          />
        ))
      );
    };

    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.categoryTitle}>SAMENVATTINGEN</Text>
          <ScrollView
            onScroll={this.onScroll()}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            snapToAlignment="start"
            contentInsetAdjustmentBehavior="automatic"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Content />
          </ScrollView>
        </View>
      </>
    );
  }
}
