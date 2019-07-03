export interface User {
    _id?: string;
    username: string;
    email?: string;
    avatar?: string;
}

export interface AddUser {
    username: string;
    mail: string;
    password: string;
}

export interface LoginUser {
    username: string;
    password: string;
}
