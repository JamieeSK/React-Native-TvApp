import React, { Fragment, Children } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

import styles from "./banner.scss";

export default class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            cache: [],
        };

        this.onPress = this.onPress.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    fetchData = () => {
        const liveUrl = `https://sportnoord.nl/wp-json/wp/v2/sn-match/live`;

        axios
          .get(liveUrl)
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
                video: element.videos[0],
                videoParts: video.split("src=\""),
                videoUrl: videoParts[1].split("?"),               
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
    }

    onPress = () => {
        console.log('#onPress');
    }

    onSelect = () => {
        console.log('#onSelect');
        this.setState({ isSelected: true });
    }

    onExit = () => {
        console.log('#onExit');
        this.setState({ isSelected: false });
    }

    componentDidMount() {
    }

    render() {
        const { isLoading, cache, onPress } = this.state;
        console.log("Banner: " + isLoading);


        //FIXME: Banner -  //! LET OP! MOET NOG GETEST WORDEN!
        const Content = () => {
            return isLoading ? (
              // <Text style={styles.errorText}>
                // {"{"}LOADING...{"}"}
              // </Text>

              <View>
                <Image 
                  source={require("../img/SPORTNOORD_logo_RGB_diap.png")}
                ></Image>
              </View>

            ) : (
              cache.map(child => (
                // <View
                //   key={child.id}
                //   id={child.id}
                //   title={child.title}
                //   type={child.type}
                //   image={child.image}
                //   videoId={child.videoId}
                //   date={child.date}
                //   videoUrl={child.videoUrl}
                // />

                <TouchableHighlight
                  // onPress={() => this.onPress}
                >
                  <Image source={child.image}></Image>
                </TouchableHighlight>
                
              ))
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
