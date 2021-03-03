import React, {useContext, useEffect, useState} from "react";
import {Articles} from "../components/Articles";
import {ArticleContext} from "../context/Article/articleContext";


export const ArticlesPage = () => {
    const {loading, posts, fetchPosts} = useContext(ArticleContext);
    useEffect(() => {
       fetchPosts();
    }, []);

    return(
        <React.Fragment>
            {loading
                ? <div>Loading</div>
                : <Articles posts={posts} />
            }
        </React.Fragment>
    )
};