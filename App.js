import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNSimpleCrypto from "react-native-simple-crypto";

export default function App() {
  const message = "data to encrypt";
  const messageArrayBuffer = RNSimpleCrypto.utils.convertUtf8ToArrayBuffer(
    message
  );
  console.log(message);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
