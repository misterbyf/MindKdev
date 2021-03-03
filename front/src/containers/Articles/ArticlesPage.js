import React, {useContext, useEffect, useState} from "react";
import {
    useQuery,
} from 'react-query'
import {Articles} from "../../components/Articles";
import {getPosts} from "./hooks/crud";


export const ArticlesPage = () => {
    const { data:response, isFetched } = useQuery("posts",() => getPosts({posts: "posts", limit: 10, page: 1}));
    const { data:posts } = response || [];

    return(
        <React.Fragment>
            <Articles posts={posts} isFetched={isFetched}/>
        </React.Fragment>
    )
};