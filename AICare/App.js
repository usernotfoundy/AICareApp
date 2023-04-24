import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Pressable
} from 'react-native';

export default function App(props) {

  const { onPress, buttonTitle = 'Get Started' } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/pickUp_getStarted.png')} style={styles.setImage} fadeDuration={1000} />

      <Text style={styles.setText1}>Get the Fastest Delivery Services for you.</Text>

      <Text style={styles.setText2}>We ensure that the items you require arrive on time. You focus on what needs to be done.</Text>

      <Pressable style={styles.setButtonStyle} onPress={onPress}>
        <Text style={styles.setRegularText}>{buttonTitle}</Text>
      </Pressable>

      <Text style={styles.setText2}>3/3</Text>

      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  setText1: {
    color: '#065F46',
    fontSize: 27,
    marginTop: 50,
    padding: 0,
    fontWeight: 900,
    width: 300,
    textAlign: 'center',
  },
  setText2: {
    color: '#94a3b8',
    fontSize: 15,
    marginTop: 20,
    padding: 0,
    width: 290,
    textAlign: 'center',
  },
  setImage: {
    height: 200,
    width: 200,
  },
  setButtonStyle: {
    height: 55,
    width: 250,
    backgroundColor: '#047857',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,

  },
  setRegularText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 700,
  },
});
