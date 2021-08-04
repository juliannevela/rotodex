import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokedexScreen from './screens/PokedexScreen';

export default function Rotodex() {
    return (
        <View style={styles.container}>
            <Text>Howdy World!</Text>
            <PokedexScreen />
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
