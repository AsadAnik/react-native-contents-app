import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getJsonPlaceHolderWithSpecific } from '../../api/api';

// UserView Component..
const UserView = ({ userId }) => {
    // Hooks..
    const [userData, setUserData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect Hook..
    useEffect(() => {
        getJsonPlaceHolderWithSpecific("users", userId, setUserData, setErrorMsg);
    }, []);

    // Conditinal returning statement..
    if (userData.length && !errorMsg) {
        return (
            <View style={styles.container}>
                {/*------ Users Basic ------*/}
                <Text style={styles.heading}>
                    {userData[0].name} | {userData[0].username}
                </Text>

                <Text style={styles.text}><Text style={styles.boldText}>Email:</Text> {userData[0].email}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Phone:</Text> {userData[0].phone}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Website:</Text> {userData[0].website}</Text>

                {/*------ Address ------*/}
                <Text style={styles.heading}>
                    Address
                </Text>

                <Text style={styles.text}><Text style={styles.boldText}>Street:</Text> {userData[0].address.street}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Suite:</Text> {userData[0].address.suite}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>City:</Text> {userData[0].address.city}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Zip-Code:</Text> {userData[0].address.zipcode}</Text>

                {/*------ Company ------*/}
                <Text style={styles.heading}>
                    Company
                </Text>

                <Text style={styles.text}><Text style={styles.boldText}>Company Name:</Text> {userData[0].company.name}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Catch Phrase:</Text> {userData[0].company.catchPhrase}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>BS:</Text> {userData[0].company.bs}</Text>
            </View>
        );

    } else {
        return <ActivityIndicator size={'small'} />;
    }
};

// Stylesheet...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 1,
    },
    text: {
        fontSize: 16,
        lineHeight: 25,

    },
    boldText: {
        fontWeight: 'bold',
    }
});

export default UserView;