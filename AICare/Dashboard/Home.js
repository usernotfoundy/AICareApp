import { Header } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hi!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ecfdf5',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
);