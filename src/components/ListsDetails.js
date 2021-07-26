import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const ListsDetails = ({ image, title, postId, albumId }) => {

    // returning statement..
    return (
        <View style={styles.container}>
            {/* --- For One Demo Image [ https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ] ----- */}

            <Image 
                source={{ uri: image }}
                style={styles.postImage}
            />
            <Text style={styles.title}>{ title }</Text>
            <Text style={styles.footer}>
                {postId} - no. post, from album {albumId}
            </Text>
        </View>
    );
};

// StyleSheet..
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        width: 300
    },
    postImage: {
        width: 300,
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 5
    },
    title: {
        // fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    footer: {
        color: 'gray',
        fontSize: 16
    }
});

export default ListsDetails;