import React, {Fragment} from "react";
import {Form} from "./Form/Form";
import {Typography} from "@material-ui/core";
import {UserData} from "./Form/UserData"

export const Profile = ({handleSubmit, register, onSubmit, userData}) => {
  return(
      <Fragment>
          <Typography variant="h6">Profile</Typography>
        <Form handleSubmit={handleSubmit} register={register} onSubmit={onSubmit}/>
        <UserData userData={userData} />
      </Fragment>
  )
};
