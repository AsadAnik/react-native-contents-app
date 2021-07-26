import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// AlbumView Component..
const AlbumView = ({ albumData, errorMsg }) => {
    // Conditional returning statement..
    if (!errorMsg) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {albumData.title} albums's from.
                </Text>
            </View>
        );

    }else{
        return <Text>{errorMsg}</Text>;
    }
};

// Stylesheet...
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
        padding: 10
    }
});

export default AlbumView;