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

export default class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ballY: new Animated.Value(0),
    // ballX: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballY } = this.state;
    // Animated.sequence - chaining of animations
    // Animated.parellel - Executes all animations in array simultaneosly
    // Animated.stagger - first parameter is a delay between animations inside array
    // Animated.delay(amount) - delay between animations
    // Animated.loop() - enclose all chaining to loop the array
    Animated.timing(ballY, {
      toValue: 400,
      duration: 1000,
    }).start();
  }

  render() {
    const { ballY } = this.state;
    // const { ballX } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: ballY,
              opacity: ballY.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0],
              }),
            },
          ]}
        />
      </View>
    );
  }
}
