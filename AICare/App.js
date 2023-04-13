import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/AICareAppLogo.png')} style={styles.setImage} />
      <Text style={styles.setTextColor}>CARE</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfdf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setTextColor: {
    color: '#065F46',
    fontSize: 50,
    margin: 0,
    padding: 0,
    fontWeight: 700,
  },
  setImage: {
    height: 200,
    width: 200,
  },
});
