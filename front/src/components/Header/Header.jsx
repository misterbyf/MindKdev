import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MyMenu } from "./components/Menu"
import { Logo } from "./components/Logo";
import {LogIn} from "./components/LogIn";
import {ShowName} from "./components/ShowName";


const useStyles = makeStyles(() => ({
    bar: {
        justifyContent: "space-between",
    },
}));

export default function MenuAppBar({
                                       auth,
                                       handleMenu,
                                       anchorEl,
                                       open,
                                       renderComponent,
                                       handleRenderComp,
                                       nameSurname

}) {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Logo/>
                    <LogIn auth={auth} renderComponent={renderComponent} />
                    <ShowName auth={auth} nameSurname={nameSurname} />
                    {(auth && (<MyMenu
                        onChange={handleMenu}
                        anchorEl={anchorEl}
                        open={open}
                        handleRenderComp={handleRenderComp}
                    />))}

                </Toolbar>

            </AppBar>
        </Fragment>
    );
}