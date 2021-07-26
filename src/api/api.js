import axios from 'axios';
const axiosDefault = require("axios").default;

// API requests on testing..
const jsonPlaceHolder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Authorization: false
    }
});

// upcFood Rapid API...
const upcFoodRapid = axiosDefault.create({
    baseURL: 'https://upcfood.p.rapidapi.com/v1.0/product.cfm',
    params: { upc: '4011', apiKey: 'f41cf300-bb18-11eb-8918-005056a6fcdc', Format: 'jSon' },
    headers: {
        'x-rapidapi-key': '1ddd6011f0msh87ef6a80c649f87p1d7618jsn368ecf7beebc',
        'x-rapidapi-host': 'upcfood.p.rapidapi.com'
    }
});


/// Api edition for jsonplaceholder api..
// Renders with Limits of Start & End..
const getJsonPlaceHolderWithLimits = async (type, start, end, setData, setError) => {
    try {
        const response = await jsonPlaceHolder.get(`/${type}?start=${start}&_end=${end}`);
        setData(response.data);

    } catch (error) {
        setError(error.message);
    }
};

// Render Specific item..
const getJsonPlaceHolderWithSpecific = async (type, id, setData, setError) => {
    try {
        const response = await jsonPlaceHolder.get(`/${type}?id=${id}`);
        setData(response.data);

    } catch (error) {
        setError(error.message);
    }
};

// Render All Things..
const getJsonPlaceHolder = async (type, setData, setError) => {
    try {
        const response = await jsonPlaceHolder.get(`/${type}`);
        setData(response.data);

    } catch (error) {
        setError(error.message);
    }
};


// Export Modules..
export {
    jsonPlaceHolder,
    upcFoodRapid,
    getJsonPlaceHolderWithLimits,
    getJsonPlaceHolderWithSpecific,
    getJsonPlaceHolder
};
