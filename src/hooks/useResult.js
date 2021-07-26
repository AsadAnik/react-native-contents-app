import {useState, useEffect} from 'react';
import { jsonPlaceHolderWithLimits } from '../api/api';

// API data fetching method...
export default () => {
    const [results, setResult] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    // Hook useEffect..
    useEffect(() => {
        callAPIFunction(type, start, end);
    }, []);

    // api calling from here..
    const callAPIFunction = async(type, start, end) => {
        await jsonPlaceHolderWithLimits(type, start, end, setResult, setErrorMsg);
    };

    return [results, errorMsg, callAPIFunction];
};
