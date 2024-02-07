import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import '../App.css';
import {ListSubheader} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Email, Facebook, Instagram, YouTube} from "@mui/icons-material";
import SimpleUser from "../interfaces/SimpleUser";

interface ListProps {
    onClick: () => void,
    onKeyDown: () => void
}

function DefaultDrawerList(props: ListProps) {
    return (
        <Box
            role="presentation"
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            sx={{ width: "200px" }}
        >
            <List
                subheader={<ListSubheader sx={{ color: "black", fontWeight: 800, fontSize: "20px" }}>About Us</ListSubheader>}
            >
                <ListItem disablePadding>
                    <ListItemButton href="https://www.bigatheart.org/">Our Main Website</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="mailto:team@bigatheart.org">
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        Email
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="https://instagram.com/thebigatheart">
                        <ListItemIcon>
                            <Instagram />
                        </ListItemIcon>
                        Instagram
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="https://www.facebook.com/TheBigAtHeart">
                        <ListItemIcon>
                            <Facebook />
                        </ListItemIcon>
                        Facebook
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="https://youtube.com/@thebigatheart">
                        <ListItemIcon>
                            <YouTube />
                        </ListItemIcon>
                        Youtube
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

function UserDrawerList(props: ListProps) {
    return (
        <Box
            role="presentation"
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            sx={{ width: "200px" }}
        >
            <List
                subheader={<ListSubheader sx={{ color: "black", fontWeight: 800, fontSize: "20px" }}>User</ListSubheader>}
            >
                <ListItem disablePadding>
                    <ListItemButton href="/">Homepage</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/">Applications</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/">Attendances</ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

function AdminDrawerList(props: ListProps) {
    return (
        <Box
            role="presentation"
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            sx={{ width: "200px" }}
        >
            <List
                subheader={<ListSubheader sx={{ color: "black", fontWeight: 800, fontSize: "20px" }}>Admin</ListSubheader>}
            >
                <ListItem disablePadding>
                    <ListItemButton href="/activities/create">Create Activity</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/activities/create">View All Applications</ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default function TemporaryDrawer(props: {
    user: SimpleUser | undefined,
    open: boolean,
    setOpen: Function,
    toggleDrawer: Function
}) {
    const user = props.user
    const fun = () => props.setOpen(false)
    return (
        <>
            <React.Fragment key="left">
                <Drawer
                    anchor="left"
                    open={props.open}
                    onClose={props.toggleDrawer(false)}
                >
                    <p id="big-at-heart-text">Big At Heart</p>
                    {
                        user === undefined || user.id === -1
                        ? undefined
                        : user.is_admin
                        ? (
                            <>
                                <Divider />
                                <AdminDrawerList onClick={fun} onKeyDown={fun} />
                                <Divider />
                                <UserDrawerList onClick={fun} onKeyDown={fun} />
                            </>
                        )
                        : (
                            <>
                                <Divider />
                                <UserDrawerList onClick={fun} onKeyDown={fun} />
                            </>
                        )
                    }
                    <Divider />
                    <DefaultDrawerList onClick={fun} onKeyDown={fun} />
                </Drawer>
            </React.Fragment>
        </>
    );
}