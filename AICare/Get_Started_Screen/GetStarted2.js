import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Pressable
} from 'react-native';

const Stack = createNativeStackNavigator();


function GetStarted2({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/map_getStarted.png')} style={styles.setImage2} fadeDuration={1000} />

            <Text style={styles.setText1}>Track Delivery Status</Text>

            <Text style={styles.setText2}>You can track your delivery location and status without worries.</Text>

            <Pressable style={styles.setButtonStyle} onPress={() => navigation.navigate('GetStarted3')}>
                <Text style={styles.setRegularText}>Next</Text>
            </Pressable>

            <Text style={styles.setText2}>2/3</Text>

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
        paddingTop: 100,
    },
    setText1: {
        color: '#065F46',
        fontSize: 27,
        marginTop: 50,
        padding: 0,
        fontWeight: 900,
    },
    setText2: {
        color: '#94a3b8',
        fontSize: 15,
        marginTop: 20,
        padding: 0,
        width: 250,
        textAlign: 'center',
    },
    setImage: {
        height: 200,
        width: 300,
    },
    setButtonStyle: {
        height: 55,
        width: 110,
        backgroundColor: '#047857',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginEnd: 30,
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

export default GetStarted2;
