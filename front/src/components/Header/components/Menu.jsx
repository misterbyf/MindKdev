import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import {ArticlesPage} from "../../../containers/ArticlesPage";

export const MyMenu = ({ onChange, anchorEl, open, handleRenderComp }) => {
    return (
        <Fragment>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onChange}
                color="inherit"
            >
                <AccountCircle
                    fontSize="large"
                />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                handleRenderComp ={handleRenderComp}
            >
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Articles"})
                }}><Link to="/articles">Articles</Link></MenuItem>
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Create Article"})
                }}><Link to="/add">AddArticle</Link></MenuItem>
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Profile"})
                }}><Link to="/user">Profile</Link></MenuItem>
            </Menu>
        </Fragment>
    );
};
