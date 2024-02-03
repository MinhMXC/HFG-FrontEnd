import {Avatar} from "@mui/material";
import img from "../resources/cute anime girl.webp"
import {ContactPhone, Email} from "@mui/icons-material";
import {useLoaderData} from "react-router-dom";
import User from "../interfaces/User";

export default function ViewUserRoute() {
    const user = useLoaderData() as User

    return (
        <div id="view-user-container">
            <Avatar alt={user.full_name} src={user.image === null ? img : user.image} />
            <div>
                <p>{user.full_name}</p>
                <p>{user.age}</p>
                <p>{user.is_male ? "Male": "Female"}</p>

                <div>
                    <ContactPhone />
                    <p>{user.handphone}</p>
                    <Email />
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}