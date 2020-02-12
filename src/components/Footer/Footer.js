import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <Fragment>
          <TouchableHighlight>
            <View style={styles.footer}>
              <Text style={styles.footerTitle}>
                &copy; 2020 - NDC mediagroep in samenwerking met Noorderp
                <Text style={{ color: "#E8B801" }}>&infin;</Text>rt studenten.
              </Text>
            </View>
          </TouchableHighlight>
        </Fragment>
      </>
    );
  }
}
