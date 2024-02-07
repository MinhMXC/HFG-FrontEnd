import {createTheme, IconButton, InputBase, ThemeProvider} from "@mui/material";
import {Clear, Search, Tune} from "@mui/icons-material";
import React from "react";

const searchBarTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    paddingLeft: 10,
                },
                root: {
                    backgroundColor: "#f6f6f6",
                    borderRadius: 7,
                    padding: 5
                }
            }
        }
    }
})

export default function SearchBar() {
    return (
        <ThemeProvider theme={searchBarTheme}>
            <div id="search-bar-container">
                <InputBase
                    id="search-bar"
                    startAdornment={
                        <>
                            <IconButton><Tune /></IconButton>
                            <IconButton sx={{padding: 0.5}}>
                                <Search/>
                            </IconButton>
                        </>
                    }
                    endAdornment={
                        <IconButton>
                            <Clear/>
                        </IconButton>
                    }
                    placeholder="All Activities"
                    type="search"
                    fullWidth={true}
                    sx={{ maxWidth: "1000px" }}
                />
            </div>
        </ThemeProvider>
    )
}