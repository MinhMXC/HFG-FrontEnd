import React, {useState} from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ErrorText from "../components/ErrorText";
import fetchWithAuth from "../helpers/fetchWithAuth";
import {NavigateFunction, useNavigate} from "react-router-dom";

async function loginOnClick(setError: Function, navigate: NavigateFunction) {
    const data = {
        email: (document.getElementById("email") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value
    }

    const json = await fetchWithAuth("/auth/sign_in", "POST", data)
    if (json.status === "error")
        setError(json.errors.full_messages)
    else
        navigate("/")
}

function Login(props: {
    navigate: NavigateFunction
}) {
    const [error, setError] = useState<string>("")

    return (
        <div className="login-signup-container">
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" type="password" variant="outlined" />
            <ErrorText error={error} />
            <Button
                disableElevation
                variant="contained"
                onClick={() => loginOnClick(setError, props.navigate)}
            >Login</Button>
        </div>
    )
}

async function signUpOnClick(date: Date | undefined, sex: string, setError: Function, navigate: NavigateFunction) {
    const data = {
        email: (document.getElementById("email") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value,
        password_confirmation: (document.getElementById("confirm_password") as HTMLInputElement).value,
        full_name: (document.getElementById("full_name") as HTMLInputElement).value,
        handphone: (document.getElementById("handphone") as HTMLInputElement).value,
        age: date === undefined ? undefined : (new Date(date)).getTime() / 1000,
        is_male: sex === "true" ? true : sex === "false"  ? false : undefined
    }

    const json = await fetchWithAuth("/auth", "POST", data)
    if (json.status === "error")
        setError(json.errors.full_messages)
    else
        navigate(`/users/${json.data.id}`)
}

function SignUp(props: {
    navigate: NavigateFunction
}) {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [sex, setSex] = useState<string>("")
    const [error, setError] = useState<string>("")

    return (
        <div className="login-signup-container">
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" type="password" variant="outlined" />
            <TextField id="confirm_password" label="Confirm Password" type="password" variant="outlined" />

            <TextField id="full_name" label="Full Name" variant="outlined" />
            <TextField id="handphone" label="Handphone" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(value, _) => setDate(value as Date)} label="Date of Birth" />
            </LocalizationProvider>
            <FormControl sx={{ ml: 0.5 }}>
                <p id="gender-label">Gender</p>
                <RadioGroup row onChange={(_, value) => setSex(value)}>
                    <FormControlLabel value="true" control={<Radio />} label="Male" />
                    <FormControlLabel value="false" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            <ErrorText error={error} />
            <Button
                disableElevation
                variant="contained"
                onClick={() => signUpOnClick(date, sex, setError, props.navigate)}
            >Sign Up</Button>
        </div>
    )
}

interface TablePanelProps {
    children?: React.ReactNode,
    index: number,
    value: number
}

function TabPanel(props: TablePanelProps) {
    const { children, value, index } = props;

    return (
        <div hidden={value !== index}>
            {value !== index ? undefined : children}
        </div>
    )
}

export default function AuthRoute() {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className="standard-container" id="auth-container">
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label="Login" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel index={0} value={value}>
                <Login navigate={navigate} />
            </TabPanel>
            <TabPanel index={1} value={value} >
                <SignUp navigate={navigate} />
            </TabPanel>
        </div>
    )
}