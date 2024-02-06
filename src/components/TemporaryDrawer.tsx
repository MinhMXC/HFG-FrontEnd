import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import '../App.css';
import {ListSubheader} from "@mui/material";

interface ListProps {
    onClick: () => void,
    onKeyDown: () => void
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

function DrawerList(props: ListProps) {
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
            </List>
        </Box>
    );
}

export default function TemporaryDrawer(props: {
    open: boolean,
    setOpen: Function,
    toggleDrawer: Function
}) {
    return (
        <>
            <React.Fragment key="left">
                <Drawer
                    anchor="left"
                    open={props.open}
                    onClose={props.toggleDrawer(false)}
                >
                    <DrawerList onClick={() => props.setOpen(false)} onKeyDown={() => props.setOpen(false)} />
                    <Divider />
                    <UserDrawerList onClick={() => props.setOpen(false)} onKeyDown={() => props.setOpen(false)} />
                </Drawer>
            </React.Fragment>
        </>
    );
}