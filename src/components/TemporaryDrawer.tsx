import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom";
import '../App.css';

interface ListProps {
    onClick: () => void,
    onKeyDown: () => void
}

function DrawerList(props: ListProps) {
    return (
        <Box
            role="presentation"
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <Link to={text === 'Inbox' ? "/" : "/main"}>
                            <ListItemButton>
                                {text}
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, _) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
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
                </Drawer>
            </React.Fragment>
        </>
    );
}