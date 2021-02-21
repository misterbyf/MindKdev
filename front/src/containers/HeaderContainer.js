import React, {Fragment} from "react";
import {TopBar} from "../components/TopBar/TopBar";
import {Switcher} from "../components/Switcher/Switcher";
import {useForm} from "react-hook-form";


export const HeaderContainer = () => {
    const [nameSurname, setNameSurname] = React.useState({
       name: "",
       surname: "",
    });
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [renderComponent, setRenderComponent] = React.useState({
        visible: false,
        whichComponentToShow: ""
    });
    const {register, handleSubmit} = useForm();

    const onSubmit = ({name, surname}) => {
        setNameSurname({
            name,
            surname
        })
    };

    const open = Boolean(anchorEl);


    const handleRenderComp = ({ whichComponentToShow }) => {
        setRenderComponent({visible: true, whichComponentToShow});
        setAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const userData = {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 25,
        avatar: {
            fileId: 1,
            file: {
                id: 1,
                name: 'photo.jpg',
                path: '/upload/photo.jpg',
                size: 1234
            }
        },
        friends: [{}, {}, {}], //array of users
        articles: [{
            title: 'Article 1',
            text: 'Some text',
            images: [{}, {}, {}], // array of files
            createdAt: '2020-12-17 19:00:00',
            editedAt: '2020-12-17 20:00:00',
            likes: [
                {userId: 2, user: {id: 2}, date: '2020-12-17 21:00:00'},
                {userId: 3, user: {id: 3}, date: '2020-12-17 22:00:00'}
            ]
        }]
    };

    return(
        <Fragment>
            <Switcher auth={auth} onChange={handleChange}/>
            <TopBar
                auth={auth}
                open={open}
                handleMenu={handleMenu}
                anchorEl={anchorEl}
                renderComponent={renderComponent}
                handleRenderComp ={handleRenderComp }
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                nameSurname={nameSurname}
                userData={userData}
            />
        </Fragment>
    );
};

