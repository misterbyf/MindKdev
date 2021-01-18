import React from 'react';
import 'fontsource-roboto';
import { makeStyles, Container } from "@material-ui/core";
import 'fontsource-roboto';
import { HomePageContainer } from "./containers/HomePage";

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Roboto",
    },


}));

const App = () => {
    const classes = useStyles();


      return (
        <Container maxWidth="sm" className={classes.root}>
            <HomePageContainer />
        </Container>
      );
};

export default App;
