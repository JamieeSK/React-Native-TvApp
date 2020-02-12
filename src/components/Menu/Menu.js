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
  }

  onSelect = () => {
    this.setState({ isSelected: true });
  };

  onPress = () => {
    this.props.navigation.navigate("Homepage") 
  };

  onSelect = () => {
    this.setState({ isSelected: true });
  };

  onExit = () => {
    this.setState({ isSelected: false });
  };

  click = () => {
  };

  componentDidMount() {}

  render() {
    const { isSelected } = this.state;

    if (isSelected) {
      zoeken = <Text style={styles.menuText}>Zoeken</Text>;
      samenvattingen = <Text style={styles.menuText}>Samenvattingen</Text>;
      clubs = <Text style={styles.menuText}>Clubs</Text>;
      shows = <Text style={styles.menuText}>Shows</Text>;
      // home = <Text style={styles.menuText}>Home</Text>;
    } else {
      zoeken = <Text style={styles.menuText}></Text>;
      samenvattingen = <Text style={styles.menuText}></Text>;
      clubs = <Text style={styles.menuText}></Text>;
      shows = <Text style={styles.menuText}></Text>;
      // home = <Text style={styles.menuText}></Text>;
    }

    return (
      <>
        <View
        style={styles.menuContainer}
          // style={
          //   ([styles.menuContainer],
          //   isSelected ? styles.menuContainer__active : styles.menuContainer)
          // }
        >
          {/* Home */}
          <TouchableHighlight
            onShowUnderlay={() => this.onSelect()}
            onHideUnderlay={() => this.onExit()}
            onPress={() => this.onPress()}
            style={styles.menuHome}
          >
            <View style={styles.menuContent}>
              <Image
                style={styles.menuImg}
                // source={require("../img/home.png")}
              ></Image>
              {/* {home} */}
            </View>
          </TouchableHighlight>

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
