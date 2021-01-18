import React, { Fragment } from 'react';
import {Typography} from "@material-ui/core";

export const ShowName = ({ auth, nameSurname}) => {
    return(
        <Fragment>
            {(auth && nameSurname) && (<Typography variant="h6">{nameSurname.name + " " + nameSurname.surname}</Typography>)}
        </Fragment>
    );
};