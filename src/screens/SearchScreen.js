import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
// import useResult from '../hooks/useResult';
import { getJsonPlaceHolder } from '../api/api';
import HomeList from '../components/HomeList';
import ResultsList from '../components/ResultsList';


// Search bar Component..
import SearchBar from '../components/SearchBar';

// Search Component..
const SearchScreen = () => {
    const [dataTerm, setDataTerm] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTerm, setFilteredTerm] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect Hook..
    useEffect(() => {
        getJsonPlaceHolder("photos", setDataTerm, setErrorMsg);
        // console.log('------ Rendered with ------');
    }, []);

    // change text handle function..
    const changeTerm = (newTerm) => {
        setSearchTerm(newTerm);
    };

    // end of text search typing..
    const endTerm = () => {
        // console.log(searchTerm);

        // filter the Search Value here..
        const filtered = dataTerm.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // setting up filtered item..
        setFilteredTerm(filtered);
    }

    // console.log('======= dataTerm ======', dataTerm.length);
    // console.log('======= FilteredTerm ====', filteredTerm.length);

    // Returning statement..
    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={changeTerm}
                onTermEnd={endTerm}
            />

            {/*---------- The Result's List here --------*/}
            <ScrollView>
                {
                    !searchTerm ? (
                        <>
                            <HomeList title={"Recent items"} limits={{ start: 1, end: 10 }} />
                            <HomeList title={"Most Favorites"} limits={{ start: 11, end: 20 }} />
                            <HomeList title={"Others"} limits={{ start: 21, end: 100 }} />
                        </>
                    ) : (
                        <>
                            {
                                !filteredTerm.length ? (
                                    <Text style={styles.notFountTxt}>Result Not Found!</Text>
                                ) : (
                                    <ResultsList
                                        title={`Search for '${searchTerm}'`}
                                        data={filteredTerm.length === 0 ? dataTerm : filteredTerm}
                                        errorMsg={errorMsg}
                                    />
                                )
                            }
                        </>
                    )
                }
            </ScrollView>
        </>
    );
};

// Stylesheet object...
const styles = StyleSheet.create({
    notFountTxt: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        textTransform: 'capitalize',
        color: 'red'
    }
});

export default SearchScreen;
