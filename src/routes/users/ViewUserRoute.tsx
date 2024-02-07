import {Avatar, Button, ButtonGroup} from "@mui/material";
import img from "../../resources/cute anime girl.webp"
import {ContactPhone, Email} from "@mui/icons-material";
import {useLoaderData, useLocation} from "react-router-dom";
import User from "../../interfaces/User";
import fetchWithAuth from "../../helpers/fetchWithAuth";

export default function ViewUserRoute() {
    const user = useLoaderData() as User
    const pathname = useLocation().pathname

    return (
        <div className="standard-container">
            <div id="view-user-container">
                <Avatar
                    alt={user.full_name}
                    src={user.image === null ? img : user.image}
                    sx={{ width: 200, height: 200 }}
                />
                <div id="view-user-information-container">
                    <h1 id="view-user-name">{user.full_name}</h1>
                    <p id="view-user-age">Age: {user.age}</p>
                    <p id="view-user-gender">Gender: {user.is_male ? "Male": "Female"}</p>

                    <div id="view-user-contact-information-container">
                        <ContactPhone />
                        <p>+{user.handphone}</p>
                        <Email sx={{ ml: "20px" }} />
                        <a href={`mailto://${user.email}`}>{user.email}</a>
                    </div>
                </div>
            </div>
            <ButtonGroup variant="contained" disableElevation fullWidth sx={{ mt: "20px" }}>
                <Button onClick={() => fetchWithAuth(`/user/${user.id}/applications`, "GET")}>
                    View All Applications
                </Button>
                <Button onClick={() => fetchWithAuth(`/user/${user.id}/attendances`, "GET")}>
                    View All Attendances
                </Button>
            </ButtonGroup>
        </div>
    )
}