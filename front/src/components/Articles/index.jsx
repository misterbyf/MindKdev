import React from "react"
import Typography from "@material-ui/core/Typography";

export const Articles = ({posts, isFetched}) => {
    return (
        <Typography h="6" component="span" variant="body2">
            {(isFetched)
                ? posts.map(post => (
                <React.Fragment key={post.id}>
                    <strong>{post.id}.{post.title}</strong>
                    <div>{post.body}</div>
                </React.Fragment>
            ))
                : <div>Loading</div>}
        </Typography>
    )
};