import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
                <ListItem key="Create Activity" disablePadding>
                    <ListItemButton href="/activities/create">Create Activity</ListItemButton>
                </ListItem>
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