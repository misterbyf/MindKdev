import React, { Fragment } from 'react';
import {Title} from "./Title";
import {Typography} from "@material-ui/core";

export const LogIn = ({ auth, renderComponent}) => {
  return(
      <Fragment>
          {auth ? <Title renderComponent={renderComponent}/> : (<Typography variant="h6">Log in</Typography>)}
      </Fragment>
  );
};