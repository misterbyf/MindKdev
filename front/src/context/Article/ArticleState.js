import React, {useReducer} from 'react';
import axios from "axios";
import {ArticleContext} from "./articleContext";
import {articleReducer} from "./articleReducer";
import {FETCH_POSTS, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_API_URL;

export const ArticleState = ({children}) => {

    const initialState = {
        posts: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(articleReducer, initialState);

    const showLoader = () => {
        dispatch({type: SHOW_LOADER});
    };

    const fetchPosts = async () => {
        showLoader();
        const res = await axios.get(`${url}/posts?_limit=10&page=1`);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key,
            }
        });
        dispatch({type: FETCH_POSTS, payload});
    };
    return(
        <ArticleContext.Provider value={{
            showLoader, fetchPosts,
            loading: state.loading,
            posts: state.posts
        }}>
            {children}
        </ArticleContext.Provider>)
};