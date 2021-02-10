import React from 'react';

import {makeStyles, Container} from "@material-ui/core";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {RegisterPage} from "./containers/RegisterPage";
import {LoginPage} from "./containers/LoginPage";
import {NotFound} from "./components/NotFound";
import {HeaderContainer} from "./containers/HeaderContainer";

import 'fontsource-roboto';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {ArticlePage} from "./containers/ArticlePage";
import {ArticlesPage} from "./containers/ArticlesPage";
import {Profile} from "./components/Profile/Profile";
import {CreateArticlePage} from "./containers/CreateArticlePage";
import {Users} from "./containers/Users";

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Roboto",
    }
}));





const App = () => {

    const idRegex = "(\\d+)";
    const pathRegex = "(edit|avatar|file)";
    const wordRegex = "(\\w{1,10})";
    const yearRegex = "(\\d{4})";
    const monthRegex = "(\\d{2})";
    const dayRegex = "(\\d{2})";
    const formatRegex = "(docx|jpeg|pdf|txt)";
    const versionRegex = "(\\d)";
    const pathId =
        `/users/:id${idRegex}/:path${pathRegex}/:secondId${idRegex}-:word${wordRegex}-:year${yearRegex}-:month${monthRegex}-:day${dayRegex}.:format${formatRegex}/v.:v1${versionRegex}.:v2${versionRegex}.:v3${versionRegex}`;

    const classes = useStyles();
      return (
          <Router>
              <ErrorBoundary>
                  <Container maxWidth="sm" className={classes.root}>
                      <HeaderContainer/>
                      <Route path="/404" component={NotFound} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/register" component={RegisterPage} />
                      <Route path="/article" component={ArticlePage} />
                      <Route path="/articles" component={ArticlesPage} />
                      <Route path="/user" component={Profile} />
                      <Route path="/add" component={CreateArticlePage}/>
                      <Route path={pathId} component={Users}/>
                  </Container>
              </ErrorBoundary>
          </Router>
      );
};

export default App;
