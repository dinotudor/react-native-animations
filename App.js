import React, { Component } from 'react';
import { StyleSheet, Animated, View, PanResponder } from 'react-native';

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
    ball: new Animated.ValueXY({ x: 0, y: 0 }),
    // ballX: new Animated.Value(0),
  };

  componentWillMount() {
    const { ball } = this.state;
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderGrant: (e, gestureState) => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value,
        });

        ball.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: ball.x,
            dy: ball.y,
          },
        ],
        {
          listener: (e, gestureState) => {
            console.log(gestureState);
          },
        },
      ),
      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    });
  }

  // componentDidMount() {
  //   const { ballY } = this.state;
  // Animated.sequence - chaining of animations
  // Animated.parellel - Executes all animations in array simultaneosly
  // Animated.stagger - first parameter is a delay between animations inside array
  // Animated.delay(amount) - delay between animations
  // Animated.loop() - enclose all chaining to loop the array
  //    Animated.timing(ballY, {
  //      toValue: 500,
  //      duration: 1000,
  //    }).start();
  //  }

  render() {
    const { ball } = this.state;
    // const { ballX } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [{ translateX: ball.x }, { translateY: ball.y }],
            },
          ]}
        />
      </View>
    );
  }
}
