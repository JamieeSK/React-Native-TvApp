import React, { Fragment } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

//StyleSheet
import styles from "../Menu/menu.scss";
//Screen navigation
import { withNavigation } from "react-navigation";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      navigation: this.props.navigation,

    };

    this.onPress = this.onPress.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.click = this.click.bind(this);

    this.navigate = this.navigate.bind(this);

  }

  navigate = () => {
    console.log("navigate");
}

  onSelect = () => {
    console.log("#onSelect");
    this.setState({ isSelected: true });
  };

  onPress = () => {
    console.log("#onPress");
    this.props.navigation.navigate("Searchpage") 
  };

  onSelect = () => {
    console.log("#onSelect");
    this.setState({ isSelected: true });
  };

  onExit = () => {
    console.log("#onExit");
    this.setState({ isSelected: false });
  };

  click = () => {
    console.log("Vergrootglas");
  };

  componentDidMount() {}

  render() {
    const { isSelected } = this.state;

    if (isSelected) {
      zoeken = <Text style={styles.menuText}>Zoeken</Text>;
      samenvattingen = <Text style={styles.menuText}>Samenvattingen</Text>;
      clubs = <Text style={styles.menuText}>Clubs</Text>;
      shows = <Text style={styles.menuText}>Shows</Text>;
    } else {
      zoeken = <Text style={styles.menuText}></Text>;
      samenvattingen = <Text style={styles.menuText}></Text>;
      clubs = <Text style={styles.menuText}></Text>;
      shows = <Text style={styles.menuText}></Text>;
    }

    return (
      <>
        <View
          style={
            ([styles.menuContainer],
            isSelected ? styles.menuContainer__active : styles.menuContainer)
          }
        >
          {/* "Zoeken" */}
          {/* <TouchableHighlight
            onShowUnderlay={() => this.onSelect()}
            onHideUnderlay={() => this.onExit()}
            onPress={() => this.onPress()}
            style={styles.menu}
          >
            <View style={styles.menuContent}>
              <Image
                style={styles.menuImg}
                source={require("../img/zoeken.png")}
              ></Image>
              {zoeken}
            </View>
          </TouchableHighlight> */}

          {/* "Samenvattingen" */}
          {/* <TouchableHighlight
            onShowUnderlay={() => this.onSelect()}
            onHideUnderlay={() => this.onExit()}
            onPress={() => this.click()}
            // style={styles.menuAfter}
          >
            <View style={styles.menuContent}>
              <Image
                style={styles.menuImg}
                source={require("../img/samenvattingen.png")}
              ></Image>
              {samenvattingen}
            </View>
          </TouchableHighlight> */}

          {/* "Clubs" */}
          {/* <TouchableHighlight
            onShowUnderlay={() => this.onSelect()}
            onHideUnderlay={() => this.onExit()}
            onPress={() => this.click()}
          >
            <View style={styles.menuContent}>
              <Image
                style={styles.menuImg}
                source={require("../img/clubs.png")}
              ></Image>
              {clubs}
            </View>
          </TouchableHighlight> */}

          {/* "Shows" */}
          {/* <TouchableHighlight
            onShowUnderlay={() => this.onSelect()}
            onHideUnderlay={() => this.onExit()}
            onPress={() => this.click()}
          >
            <View style={styles.menuContent}>
              <Image
                style={styles.menuImg}
                source={require("../img/shows.png")}
              ></Image>
              {shows}
            </View>
          </TouchableHighlight> */}
        </View>
      </>
    );
  }
}

export default withNavigation(Menu);
