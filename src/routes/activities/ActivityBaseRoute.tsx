import * as React from "react";
import {Button, ButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import fetchWithAuth from "../../helpers/fetchWithAuth";
import SimpleUser from "../../interfaces/SimpleUser";
import APP_CONSTANTS from "../../helpers/CONSTANTS";

export default function ActivityBaseRoute () {
    const navigate = useNavigate()
    const pathname = useLocation().pathname
    const index = pathname.lastIndexOf("/")

    let formattedPath = pathname
    if (isNaN(Number(pathname.charAt(pathname.length - 1)))) {
        formattedPath = pathname.slice(0, index)
    }
    const [path] = useState<string>(formattedPath)

    const currentViewIndex = pathname.slice(index + 1) === "applications"
                           ? 1
                           : pathname.slice(index + 1) === "attendances"
                           ? 2
                           : pathname.slice(index + 1) === "statistics"
                           ? 3
                           : 0
    const [currentView, setCurrentView] = useState<number>(currentViewIndex)
    const [user, setUser] = useState<SimpleUser | undefined>(undefined)

    useEffect( () => {
        fetchWithAuth("/current_user", "GET")
            .then(json => json.status === "success"
                ? setUser(json.data as SimpleUser)
                : setUser(APP_CONSTANTS.DEFAULT_SIMPLE_USER))
    }, [])

    return user?.is_admin ? (
        <div className="standard-container" style={{ width: "900px" }}>
            <ButtonGroup
                disableElevation
                fullWidth
            >
                <Button
                    variant={currentView === 0 ? "contained" : "outlined"}
                    onClick={() => {
                            setCurrentView(0)
                            navigate(`${path}`)
                        }
                    }
                >View</Button>
                <Button
                    variant={currentView === 1 ? "contained" : "outlined"}
                    onClick={() => {
                            setCurrentView(1)
                            navigate(`${path}/applications`)
                        }
                    }
                >Applications</Button>
                <Button
                    variant={currentView === 2 ? "contained" : "outlined"}
                    onClick={() => {
                            setCurrentView(2)
                            navigate(`${path}/attendances`)
                        }
                    }
                >Attendance</Button>
                <Button
                    variant={currentView === 3 ? "contained" : "outlined"}
                    onClick={() => {
                            setCurrentView(3)
                            navigate(`${path}/statistics`)
                        }
                    }
                >Statistics</Button>
            </ButtonGroup>
        </div>
    ) : <></>
}