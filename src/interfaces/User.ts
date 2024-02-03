export default interface User {
    email: string,
    image: null | string,
    full_name: string,
    age: number,
    handphone: number,
    is_male: boolean,
    is_admin: boolean,
    created_at: bigint,
    updated_at: bigint
}