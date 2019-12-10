import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61c123',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ANIMATIONS REACT NATIVE</Text>
    </View>
  );
}
export default App;
