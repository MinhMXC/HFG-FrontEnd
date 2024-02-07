import fetchWithAuth from "../helpers/fetchWithAuth";
import {NavigateFunction} from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import * as React from "react";
import {useState} from "react";

export default function AdminActivityOptions(props: {
    navigate: NavigateFunction
    activity_id: number
}) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: any) => { setAnchorEl(event.currentTarget) }
    const handleClose = () => { setAnchorEl(null) }
    const handleUpdate = () => {
        props.navigate(`/activities/update/${props.activity_id}`)
    }

    const handleDelete = async () => {
        fetchWithAuth(`/activities/${props.activity_id}`, "DELETE")
        props.navigate(0)
    }

    return (
        <>
            <IconButton sx={{ padding: 0 }}>
                <MoreVert onClick={handleClick}/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleUpdate}>Update Activity</MenuItem>
                <MenuItem onClick={handleDelete}>Delete Activity</MenuItem>
            </Menu>
        </>
    )
}