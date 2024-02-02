import TemporaryDrawer from "./TemporaryDrawer";
import React, {useState} from "react";
import {IconButton} from "@mui/material";
import {Menu} from "@mui/icons-material";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
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
            <IconButton onClick={toggleDrawer(!open)}>
                <Menu />
            </IconButton>
            <TemporaryDrawer open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
        </header>
    )
}