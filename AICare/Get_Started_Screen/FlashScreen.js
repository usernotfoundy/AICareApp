import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const Stack = createStackNavigator();

export default function FlashScreen({ navigation }) {
    // Wait for 2 seconds and then navigate to the next screen
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('GetStarted1');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/AICareAppLogo.png')} style={styles.setImage} fadeDuration={1000} />
            <Text style={styles.setTextColor}>CARE</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
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
        fontWeight: 900,
    },
    setImage: {
        height: 200,
        width: 200,
    },
});