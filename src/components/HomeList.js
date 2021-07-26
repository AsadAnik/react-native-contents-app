import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import { getJsonPlaceHolderWithLimits } from '../api/api';
import { useNavigation } from '@react-navigation/native';

// import Details of List ( List Body )..
import ListsDetails from './ListsDetails';


const HomeList = ({ title, limits }) => {

    const [listData, setListData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // Get Navigation prop..
    const navigation = useNavigation();

    // useEffect Hook..
    useEffect(() => {
        getJsonPlaceHolderWithLimits("photos" ,limits.start, limits.end, setListData, setErrorMsg);
    }, []);


    // Conditional Rendering...
    if (!errorMsg) {
        return (
            <>
                {listData.length ? (
                    <>
                        <Text style={styles.title}>{title}</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={listData}
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
                    </>
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

export default HomeList;