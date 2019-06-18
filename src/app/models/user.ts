export interface User {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface AddUser {
    name: string;
    email: string;
    password: string;
}
