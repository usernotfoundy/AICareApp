
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    Pressable,
    TextInput,
} from 'react-native';

const Stack = createNativeStackNavigator();


function Register({ navigation }) {
    return (
        <SafeAreaView style={styles.container} keyboardShouldPersistTaps="always">
            <Image source={require('../assets/login_assets/d1.png')} style={styles.setImage} fadeDuration={1000} />
            <Image source={require('../assets/login_assets/d2.png')} style={styles.setImage} fadeDuration={1000} />
            <Text style={styles.textMain}>Create an Account</Text>
            <Text style={styles.textHeader}>Student Number</Text>
            <TextInput style={styles.inputText} />
            <Text style={styles.textHeader}>Password</Text>
            <TextInput style={styles.inputText} secureTextEntry={true} />
            <Text style={styles.textHeader}>Re-enter Password</Text>
            <TextInput style={styles.inputText} secureTextEntry={true} />
            <Pressable style={styles.setButtonStyle} >
                <Text style={styles.setBTNText}>Register</Text>
            </Pressable>
            <Pressable style={styles.setLinkBTN} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.setRegularText}>Already have an account?</Text>
                <Text style={styles.setLinkText}>Login</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecfdf5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 250,
    },

    inputText: {
        borderColor: '#047857',
        borderWidth: 1,
        width: 280,
        height: 50,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        backgroundColor: '#ffffff',
    },

    textMain: {
        color: '#047857',
        position: 'absolute',
        fontSize: 40,
        fontWeight: 900,
        width: 250,
        top: 180,
        left: 20
    },

    textHeader: {
        color: '#047857',
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: 700,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 45,
    },

    setImage: {
        position: 'absolute',
        top: 0,
        right: -1,
    },

    setButtonStyle: {
        height: 60,
        width: 280,
        backgroundColor: '#047857',
        justifyContent: 'center',
        marginTop: 60,
        borderRadius: 50,
        marginBottom: 20,
    },

    setBTNText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 700,
    },

    setRegularText: {
        color: '#111111',
        margin: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },

    setLinkText: {
        color: '#047857',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        alignSelf: 'center',
    },

    setLinkBTN: {
        margin: 0,
        padding: 0,
        flexDirection: 'row',
    }
});

export default Register;
