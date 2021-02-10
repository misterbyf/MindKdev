import React from "react";
import {UsersComponent} from "../components/Users";

export const Users = (props) => {
    const {year, month, day} = props.match.params;
    const newMonth = month - 1;

    function isDateBeforeToday(date) {
        return new Date(date.toDateString()) <= new Date(new Date().toDateString());
    }

    const result = isDateBeforeToday(new Date(year,newMonth,day));

    console.log(result);

    return(
        (result && <UsersComponent />)
    )
};
