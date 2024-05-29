import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content4 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is Content 4</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Content4;
