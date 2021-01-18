import React from "react";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
    },
    button: {
        margin: theme.spacing(1),
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));

export const Form = ({register, handleSubmit, onSubmit}) => {
    const classes = useStyles();



    return(
        <div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField type="text" name="name" inputRef={register} label="Name"   />
                <TextField type="text" name="surname" inputRef={register}  label="Surname"   />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon />}
                    type={"submit"}
                >
                    Send
                </Button>
            </form>
        </div>

    )
};