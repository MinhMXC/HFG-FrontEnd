export default interface User {
    id: number,
    email: string,
    image: null | string,
    full_name: string,
    age: number,
    handphone: number,
    is_male: boolean,
    is_admin: boolean,
    created_at: number,
    updated_at: number,
    is_current_user_admin: boolean
}