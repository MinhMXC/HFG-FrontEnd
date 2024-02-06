import SimpleUser from "../interfaces/SimpleUser";

const DEFAULT_SIMPLE_USER: SimpleUser = {
    id: -1,
    full_name: "",
    image: null,
    is_admin: false
}

const APP_CONSTANTS = {
    FRONTEND_URL: "http://localhost:3000",
    BACKEND_URL: "http://localhost:5000",
    DEFAULT_SIMPLE_USER: DEFAULT_SIMPLE_USER
}

export default APP_CONSTANTS