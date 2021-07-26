import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getJsonPlaceHolderWithSpecific } from '../../api/api';

// Other Modules..
import AlbumView from './AlbumView';
import UserView from './UserView';


const Details = ({ photoData, postData }) => {
    const [albumsData, setAlbumsData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    const { albumId } = photoData;

    // useEffect Hook..
    useEffect(() => {
        getJsonPlaceHolderWithSpecific("albums", albumId, setAlbumsData, setErrorMsg);
    }, []);


    // returning statement..
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/*------- Photo Data View ------*/}
            <Text style={styles.title}>{photoData.title}</Text>
            <Image
                source={{ uri: photoData.url }}
                style={styles.coverImage}
            />

            {/*------- Albums (from Photos albumId) Data View -------*/}
            {albumsData.length ? (
                <AlbumView albumData={albumsData[0]} errorMsg={errorMsg} />
            ) : (
                <ActivityIndicator size={'small'} color={'blue'} />
            )}

            {/*------- Post Data View -------*/}
            <Text style={styles.body}>{postData.title} : {postData.body}</Text>

            {/*------- User Data View (from albums userId) -------*/}
            {albumsData.length ? (
                <UserView userId={albumsData[0].userId} />
            ) : (
                <ActivityIndicator size={'small'} color={'green'} />
            )}
        </ScrollView>
    );
};


// The Stylesheet here..
const styles = StyleSheet.create({
    container: {
        margin: '2%'
    },
    coverImage: {
        height: 400,
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    body: {
        fontSize: 16,
        textTransform: 'capitalize',
        lineHeight: 20,
        backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 10
    }
});


export default Details;