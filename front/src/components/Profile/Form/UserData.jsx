import React from "react"
import Typography from "@material-ui/core/Typography";

export const UserData = ({userData}) => {
    return(
        <Typography variant="h6">
            <p>Object...</p>
            {userData.firstName}
            {" "}
            {userData.lastName}
        </Typography>
    )
};