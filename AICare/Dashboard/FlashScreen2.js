import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Pressable,
    TextInput,
    ScrollView
} from 'react-native';

const Stack = createNativeStackNavigator();

function FlashScreen2({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/delivery_guy.gif')} style={styles.setImage} fadeDuration={1000} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
        },

        setImage: {
            height: 300,
            width: 300,
        }
    }
);

export default FlashScreen2;