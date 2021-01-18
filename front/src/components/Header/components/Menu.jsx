import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const MyMenu = ({ onChange, anchorEl, open, handleRenderComp  }) => {
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
                handleRenderComp ={handleRenderComp }
            >
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Articles"})
                }}>Articles</MenuItem>
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Add Article"})
                }}>AddArticle</MenuItem>
                <MenuItem onClick={() => {
                    handleRenderComp ({whichComponentToShow: "Profile"})
                }}>Profile</MenuItem>
            </Menu>
        </Fragment>
    );
};
