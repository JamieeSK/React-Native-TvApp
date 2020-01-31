import React, { Fragment } from "react";
import axios from "axios";
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
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
    // console.log("#onScroll");
  };

  fetchData = () => {
    const videoUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/ondemand?page=1&per_page=15`;

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

    return (
      <>
        <SafeAreaView style={styles.rowContainer}>
          <Text style={styles.categoryTitle}>SAMENVATTINGEN</Text>
          {isLoading ? (
            <ActivityIndicator
              style={styles.activityWrapper}
              size="large"
              color="#E62341"
            />
          ) : (
            <FlatList
              horizontal
              data={cache}
              renderItem={({ item }) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  type={item.type}
                  image={item.image}
                  videoId={item.videoId}
                  date={item.date}
                  videoUrl={item.videoUrl}
                />
              )}
              keyExtractor={item => item.id}
              keyboardShouldPersistTaps="always"
              keyboardDismissMode="on-drag"
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}
