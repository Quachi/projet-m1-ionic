export interface User {
    _id: string;
    name: string;
}

export interface AddUser {
    name: string;
    email: string;
    password: string;
}
