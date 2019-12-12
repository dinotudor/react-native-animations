import React, {Component} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

// Components exported by Animated function:
// Animated.View,
// Animated.Text,
// Animated.Image,
// Animated.ScrollView

export default class App extends Component {
  componentDidMount() {
    Animated.timing();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.ball} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});
