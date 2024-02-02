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
import ErrorText from "../component/ErrorText";
import fetchWithAuth from "../helpers/fetchWithAuth";

async function loginOnClick(setError: Function) {
    const data = {
        email: (document.getElementById("email") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value
    }

    const json = await fetchWithAuth("/auth/sign_in", "POST", data)
    if (json.data !== undefined)
        console.log(json);
    else
        setError(json.errors.full_messages)
}

function Login() {
    const [error, setError] = useState<string>("")

    return (
        <div className="login-signup-container">
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" type="password" variant="outlined" />
            <ErrorText error={error} />
            <Button
                disableElevation
                variant="contained"
                onClick={() => loginOnClick(setError)}
            >Login</Button>
        </div>
    )
}

async function signUpOnClick(date: Date, sex: string, setError: Function) {
    const data = {
        email: (document.getElementById("email") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value,
        password_confirmation: (document.getElementById("confirm_password") as HTMLInputElement).value,
        full_name: (document.getElementById("full_name") as HTMLInputElement).value,
        handphone: (document.getElementById("handphone") as HTMLInputElement).value,
        age: (new Date(date)).getTime() / 1000,
        is_male: sex === "true"
    }

    const json = await fetchWithAuth("/auth", "POST", data)
    if (json.data !== undefined)
        console.log(json);
    else
        setError(json.errors.full_messages)
}

function SignUp() {
    const [date, setDate] = useState<Date>(new Date())
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
                <RadioGroup row onChange={(event, value) => setSex(value)}>
                    <FormControlLabel value="true" control={<Radio />} label="Male" />
                    <FormControlLabel value="false" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            <ErrorText error={error} />
            <Button
                disableElevation
                variant="contained"
                onClick={() => signUpOnClick(date, sex, setError)}
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
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className="auth-container">
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label="Login" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel index={0} value={value}>
                <Login />
            </TabPanel>
            <TabPanel index={1} value={value} >
                <SignUp />
            </TabPanel>
        </div>
    )
}