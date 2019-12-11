import React from 'react';
import {StyleSheet, Animated, View} from 'react-native';

// Components exported by Animated function:
// Animated.View,
// Animated.Text,
// Animated.Image,
// Animated.ScrollView

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

function App() {
  state = {
    ballY: Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValues: 500,
      duration: 1000,
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View style={styles.ball} />
    </View>
  );
}
export default App;
