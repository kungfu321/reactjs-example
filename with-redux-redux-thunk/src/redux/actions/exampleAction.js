import {
    FETCH_EXAMPLE_REQUEST,
    FETCH_EXAMPLE_SUCCESS,
    FETCH_EXAMPLE_ERROR,
} from '../constants/example';

export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: FETCH_EXAMPLE_REQUEST });

        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url)
        const responseBody = await response.json();
        dispatch({
            type: FETCH_EXAMPLE_SUCCESS,
            data: responseBody
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_EXAMPLE_ERROR,
            message: error
        });
    }
}