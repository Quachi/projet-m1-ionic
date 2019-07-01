// export interface User {
//     _id?: string;
//     username: string;
//     email?: string;
//     avatar?: string;
// }

// export interface AddUser {
//     username: string;
//     email: string;
//     password: string;
// }

// export interface LoginUser {
//     username: string;
//     password: string;
// }


export interface User {
    username: string
    password: string
}

export interface Profile {
    id: string
    username: string
    avatar?: string
    description?: string
    posts: Array<string>
    comments: Array<string>
    historyPosts: Array<string>
    historyComments: Array<string>
}

export interface Token {
    token: string
    expiresIn: number
}
