import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import styles from "../Menu/menu.scss";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
        }

        this.onPress = this.onPress.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.click = this.click.bind(this);
    }

    onSelect = () => {
        console.log('#onSelect');
        this.setState({ isSelected: true });
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


    click = () => {
        console.log("Vergrootglas");
        this.props.navigation.navigate("VideoPlayer", {id: 200});
    }

    componentDidMount() {
    }

    render() {

        const { isSelected, } = this.state 
       
        if (isSelected) {
            zoeken = <Text style={styles.menuText}>Zoeken</Text>
            samenvattingen = <Text style={styles.menuText}>Samenvattingen</Text>
            clubs = <Text style={styles.menuText}>Clubs</Text>
            shows = <Text style={styles.menuText}>Shows</Text>
        } else {
            zoeken = <Text style={styles.menuText}></Text>
            samenvattingen = <Text style={styles.menuText}></Text>
            clubs = <Text style={styles.menuText}></Text>
            shows = <Text style={styles.menuText}></Text>
        };

        //!Controleren wanneer 1 van de afbeeldingen is geselecteerd
        return (
            <>
                <View style={[styles.menuContainer], isSelected ? styles.menuContainer__active : styles.menuContainer}>
                    <TouchableHighlight 
                        onShowUnderlay={() => this.onSelect()}
                        onHideUnderlay={() => this.onExit()}
                        onPress={() => this.click()}
                        style={styles.menu}
                    >
                        <View style={styles.menuContent}>
                            <Image style={styles.menuImg} source={require('../img/zoeken.png')}></Image>
                           {zoeken}
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onShowUnderlay={() => this.onSelect()}
                        onHideUnderlay={() => this.onExit()}
                        onPress={() => this.click()}
                        // style={styles.menuAfter}
                    >
                        <View style={styles.menuContent}>
                            <Image style={styles.menuImg} source={require('../img/samenvattingen.png')}></Image>
                           {samenvattingen}
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onShowUnderlay={() => this.onSelect()}
                        onHideUnderlay={() => this.onExit()}
                        onPress={() => this.click()}
                    >
                        <View style={styles.menuContent}>
                            <Image style={styles.menuImg} source={require('../img/clubs.png')}></Image>
                           {clubs}
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onShowUnderlay={() => this.onSelect()}
                        onHideUnderlay={() => this.onExit()}
                        onPress={() => this.click()}
                    >
                       <View style={styles.menuContent}>
                            <Image style={styles.menuImg} source={require('../img/shows.png')}></Image>
                           {shows}
                        </View>
                    </TouchableHighlight>

                </View>


                {/* <TouchableHighlight  */}
                    {/* style={styles.menuContainer} */}
                    {/* onPress={this.click} */}
                    {/* // onSelect={this.onSelect} */}
                    {/* onShowUnderlay={() => this.onSelect()} */}
                {/* > */}
                    {/* <View > */}
                        {/* <Image style={styles.menuSearch} source={require('../img/path61.png')}></Image> */}
                        {/* <Image style={styles.menuSearch} source={require('../img/path61.png')}></Image> */}
                        {/* <Image style={styles.menuSearch} source={require('../img/path61.png')}></Image> */}
                        {/* <Image style={styles.menuSearch} source={require('../img/path61.png')}></Image> */}
                    {/* </View>     */}
                {/* </TouchableHighlight> */}
            </>
        );
    }
}

export default withNavigation(Menu);