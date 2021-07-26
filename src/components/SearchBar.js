import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

// Search bar component..
const SearchBar = ({ searchTerm, onTermChange, onTermEnd }) => {
    return (
        <View style={styles.searchBar}>
            <Fontisto style={styles.iconStyle} name="search" size={30} color="black" onPress={onTermEnd} />
            <TextInput 
                autoCapitalize={false}
                autoCorrect={false}
                style={styles.searchArea} 
                placeholder="Search here..."
                value={searchTerm}
                onChangeText={onTermChange}
                onEndEditing={onTermEnd}
            />
        </View>
    );
};

// Stylesheet Object..
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        backgroundColor: '#f0eeee',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row'
    },

    searchArea: {
        flex: 1,
        fontSize: 20
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
