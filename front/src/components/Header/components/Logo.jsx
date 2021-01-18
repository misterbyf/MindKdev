import React from "react";
import Typography from "@material-ui/core/Typography";
import {Link, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: theme.spacing(3),
    },
}));

export const Logo = () => {
    const classes = useStyles();
  return(
      <Link className={classes.link} color="inherit" underline="none">
          <Typography variant="h4">
              LOGO
          </Typography>
      </Link>
  )
};