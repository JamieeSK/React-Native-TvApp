import React, { Fragment } from "react";
import axios from "axios";
import {
  View,
  ScrollView,
  Text,
  Platform,
  ActivityIndicator
} from "react-native";

// import CardLive from "./Card/CardLive";

import CardLive from "./Card/CardLive";
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
  return link.split("/c/")[1].replace(".html", "");
};

export default class RowLive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      cache: [],
      isLive: false,
    };

    this.onScroll = this.onScroll.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.split = this.split.bind(this);
  }

  onScroll = () => {
    // console.log("#onScroll");
  };


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
        console.log("cache");
        console.log(cache);
        

        cache.forEach(element => {
          // let reg = /^\/\/(.*?)?$/;
            let video = {
              id: element.id,
              title: element.title.rendered,
              type: element.match_sport,
              image: element.featured_image.medium_large,
              // videoId: getId(element.videos[0].split("?")),
              date: element.match_dates.start,
              videoV: element.videos,

              videoParts: element.videos[0],
              videoU: element.videos[0].split("?"),
              videoUrl: element.link,
     
            };

            console.log("video");
            console.log(video);
            
            data.push(video);

          });

          console.log("data:");
          console.log(data);



        this.setState({
          cache: data,
          isLoading: false,
          isLive: true,
        });
      

        if (cache.length === 0) {
            this.setState({
                isLive: false,
            })
        }


      })
      .catch(error => {
        if (error.response) {
          console.log(error.responderEnd);
          console.log(error);
          
        }
      });

   
  };

  componentDidMount() {
    const { isLoading } = this.state;
    this.fetchData();
    this.split();
    
  }


  split = () => {
    const { cache } = this.state;


    console.log("split");
    
    

  }

  render() {
    const { isLoading, cache, isLive } = this.state;

    console.log("cacheLIVE: ");
    console.log(cache);
    
    const CardContent = () => {
        return (
            cache.map(child => (
                <CardLive
                  key={child.id}
                  id={child.id}
                  title={child.title}
                  type={child.type}
                  image={child.image}
                  videoUrl={child.videoUrl}
                />
                
              ))
        )
    }

    const Content = () => {
        return isLoading ? (
            <ActivityIndicator
                style={styles.activityContainer}
                size="large"
                color="#E62341"
            />
      ) : (
        <ScrollView
            onScroll={this.onScroll()}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            snapToAlignment="start"
            contentInsetAdjustmentBehavior="automatic"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {isLive ?
                <CardContent/>
            :
                <View>
                    <Text style={styles.rowText}>Er zijn momenteel geen live uitzendingen</Text>
                </View>
            }
        </ScrollView>
        
      );
    };


    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.categoryTitle}>Live uitzendingen</Text>
            <Content />
        </View>
      </>
    );
  }
}
