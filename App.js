import React, { Component } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

// Components exported by Animated function:
// Animated.View,
// Animated.Text,
// Animated.Image,
// Animated.ScrollView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2);

export default class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    const { ballY } = this.state;
    Animated.spring(ballY, {
      toValue: 300,
      bounciness: 20,
    }).start();
  }

  render() {
    const { ballY } = this.state;
    const { ballX } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
      </View>
    );
  }
}
