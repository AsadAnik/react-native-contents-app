import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import Details of List ( List Body )..
import ListsDetails from './ListsDetails';


const ResultList = ({ title, data, errorMsg }) => {
    // Get Navigation prop..
    const navigation = useNavigation();

    // Conditional Rendering...
    if (!errorMsg) {
        return (
            <>
                {data.length ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>{title}</Text>
                        <FlatList
                            vertical
                            showsVerticalScrollIndicator={false}
                            data={data}
                            keyExtractor={result => result.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Details", { id: item.id })}
                                    >
                                        <ListsDetails
                                            postId={item.id}
                                            image={item.thumbnailUrl}
                                            title={item.title}
                                            albumId={item.albumId}
                                        />
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                )
                    :
                    (
                        <ActivityIndicator style={styles.loading} size={'large'} color={'red'} />
                    )
                }
            </>
        );
    } else {
        return (
            <>
                <Text>{errorMsg}</Text>
            </>
        );
    }
};

// Stylesheet for styling...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        // color: 'darkgrey',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
    },
    loading: {
        marginTop: 100
    }
});

export default ResultList;