import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getJsonPlaceHolderWithSpecific } from '../api/api';

// Posts Details for..
import DetailsView from '../components/detailsScreen';


const DetailScreen = ({ route }) => {
    // grabe the id which is set by SearchScreens items..
    const param = route.params;
    const { id } = param;

    // Hooks..
    const [photosData, setPhotosData] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect Hook..
    useEffect(() => {
        getJsonPlaceHolderWithSpecific("photos", id, setPhotosData, setErrorMsg);
        getJsonPlaceHolderWithSpecific("posts", id, setPostsData, setErrorMsg);
    }, []);


    // console.log(photosData);

    // console.log(id);

    // returning statement..
    if (photosData.length && postsData.length && !errorMsg) {
        return <DetailsView photoData={photosData[0]} postData={postsData[0]} />;

    } else {
        if (errorMsg) {
            return <Text>{errorMsg}</Text>;
        }
        return <ActivityIndicator style={styles.loading} size={'large'} color={'red'} />;
    }
};


// The Stylesheet here..
const styles = StyleSheet.create({
    loading: {
        marginTop: '50%',
    }
});


export default DetailScreen;