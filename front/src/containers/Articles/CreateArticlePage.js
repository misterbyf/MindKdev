import React, {useCallback} from "react";
import {useMutation} from 'react-query';
import {CreateArticle} from "../../components/CreateArticle";
import {addPost} from "./hooks/crud";


export const CreateArticlePage =  () => {
    const {mutate: createNewPost} = useMutation(addPost);

    const onSubmit = useCallback( async data => {
        try {
            await createNewPost(data);
        } catch(e) {
            console.error(e);
        }
    }, [createNewPost]);

    return(
        <CreateArticle onSubmit={onSubmit} />
    )
};