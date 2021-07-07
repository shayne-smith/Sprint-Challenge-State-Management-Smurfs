import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
export const ON_NAME_INPUT_CHANGE = 'ON_NAME_INPUT_CHANGE';
export const ON_AGE_INPUT_CHANGE = 'ON_AGE_INPUT_CHANGE';
export const ON_HEIGHT_INPUT_CHANGE = 'ON_HEIGHT_INPUT_CHANGE';

const url = 'http://localhost:3333/smurfs';

// make an async request using redux-thunk to return a function instead of object
export const fetchSmurfs = () => {

    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        console.log('fetchSmurfs is running...');

        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
            })
            .catch(err => console.log(err));
    };
};

export const postSmurf = (smurf) => {

    return dispatch => {
        dispatch({ type: POST_SMURF_START });
        console.log('postSmurf is running...');

        axios
            .post(url, smurf)
            .then(res => {
                console.log(res.data);
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => console.log(err));

    };
};

export const onNameInputChange = (event) => {
    event.preventDefault();
    console.log('onNameInputChange action creator called')
    return {
        type: ON_NAME_INPUT_CHANGE,
        payload: event
    }
};

export const onAgeInputChange = (event) => {
    console.log('onAgeInputChange action creator called')
    return {
        type: ON_AGE_INPUT_CHANGE,
        payload: event
    }
};

export const onHeightInputChange = (event) => {
    console.log('onHeightInputChange action creator called')
    return {
        type: ON_HEIGHT_INPUT_CHANGE,
        payload: event
    }
};

// export const onInputChange = (event) => {
//     console.log('onInputChange action creator called')
//     return {
//         type: ON_INPUT_CHANGE,
//         payload: event
//     }
// };