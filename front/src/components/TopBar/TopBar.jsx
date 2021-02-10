import React from "react";

import Header from "../Header/Header";
// import { Profile } from "../Profile/Profile"
// import {ArticlesPage} from "../../containers/ArticlesPage";
// import { CreateArticle } from "../CreateArticle";

import PropTypes from "prop-types";


export const TopBar = ({
                             auth,
                             open,
                             handleMenu,
                             anchorEl,
                             renderComponent,
                             handleRenderComp ,
                             register,
                             handleSubmit,
                             onSubmit,
                             nameSurname,
                             userData
}) => {
  return(
      <React.Fragment>
        <Header
            auth={auth}
            open={open}
            handleMenu={handleMenu}
            anchorEl={anchorEl}
            handleRenderComp ={handleRenderComp}
            renderComponent={renderComponent}
            nameSurname={nameSurname}
        />
        {/*{(renderComponent.whichComponentToShow === "Articles" && auth && <Articles/>)}*/}
        {/*{(renderComponent.whichComponentToShow === "Add Article" && auth && <AddArticle/>)}*/}
        {/*{(renderComponent.whichComponentToShow === "Profile" && auth && <Profile*/}
        {/*    register={register}*/}
        {/*    handleSubmit={handleSubmit}*/}
        {/*    onSubmit={onSubmit}*/}
        {/*    userData={userData}*/}
        {/*/>)}*/}

      </React.Fragment>
  )
};

TopBar.propTypes = {
    auth: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
    renderComponent: PropTypes.object.isRequired,
    handleRenderComp: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    nameSurname: PropTypes.object.isRequired,
    userData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.shape({
            fileId: PropTypes.number.isRequired,
            file: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
                size: PropTypes.number.isRequired
            })
        }),
        friends: PropTypes.arrayOf(PropTypes.object), //array of users
        articles: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.object), // array of files
            createdAt: PropTypes.string.isRequired,
            editedAt: PropTypes.string.isRequired,
            likes:PropTypes.arrayOf(PropTypes.shape(
                {userId: PropTypes.number.isRequired, user: PropTypes.shape({id: PropTypes.number.isRequired}), date: PropTypes.string.isRequired},
                {userId: PropTypes.number.isRequired, user: PropTypes.shape({id: PropTypes.number.isRequired}), date: PropTypes.string.isRequired}
            ))
        }))
    })
};


