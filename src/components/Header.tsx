import TemporaryDrawer from "./TemporaryDrawer";
import React, {useEffect, useState} from "react";
import {Avatar, Button, IconButton} from "@mui/material";
import {Menu} from "@mui/icons-material";
import fetchWithAuth from "../helpers/fetchWithAuth";
import SimpleUser from "../interfaces/SimpleUser";
import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import APP_CONSTANTS from "../helpers/CONSTANTS";

function SearchBar() {
    return (
        <div id="search-bar-container">

        </div>
    )
}

function LoginSignUpButtons(props: {
    navigate: NavigateFunction
}) {
    const navigate = props.navigate
    return (
        <div id="login-signup-button-container">
            <Button disableElevation variant="contained" onClick={() => navigate("/auth")}>Login</Button>
            <Button disableElevation variant="contained"  onClick={() => navigate("/auth")}>Sign Up</Button>
        </div>
    )
}

function UserInfoButton(props: {
    user: SimpleUser,
    navigate: NavigateFunction
}) {
    const user = props.user
    const navigate = props.navigate

    return (
        <Button disableElevation onClick={() => navigate(`/users/${user.id}`)} sx={{ mr: "10px" }}>
            <Avatar alt={user.full_name} src={user.image!} />
            <p id="full_name_header">{user.full_name}</p>
        </Button>
    )
}

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<SimpleUser | undefined>(undefined)

    useEffect( () => {
        fetchWithAuth("/current_user", "GET")
            .then(json => json.status === "success"
                ? setUser(json.data as SimpleUser)
                : setUser(APP_CONSTANTS.DEFAULT_SIMPLE_USER))
    }, [location])

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };

    return (
        <header>
            <IconButton onClick={toggleDrawer(!open)} sx={{ ml: "10px" }}>
                <Menu />
            </IconButton>

            <SearchBar></SearchBar>

            {
                user === undefined
                    ? undefined
                    : user.id === -1
                    ? <LoginSignUpButtons navigate={navigate} />
                    : user.id > 0
                    ? <UserInfoButton user={user} navigate={navigate} />
                    : undefined
            }

            <TemporaryDrawer user={user} open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
        </header>
    )
}