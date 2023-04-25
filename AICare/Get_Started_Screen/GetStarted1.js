import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Pressable
} from 'react-native';

function GetStarted1({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/boxes_getStarted.png')} style={styles.setImage} fadeDuration={1000} />

            <Text style={styles.setText1}>Delivers Anything</Text>

            <Text style={styles.setText2}>We offer services that delivers various packages that you requested.</Text>

            <Pressable style={styles.setButtonStyle} onPress={() => navigation.navigate('GetStarted2')}>
                <Text style={styles.setRegularText}>Next</Text>
            </Pressable>

            <Text style={styles.setText2}>1/3</Text>
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
        height: 250,
        width: 250,
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

export default GetStarted1;
