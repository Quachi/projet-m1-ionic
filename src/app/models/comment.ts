// import {User} from './user';

// export interface Commentary {
//     _id: string;
//     createDate: number;
//     user: string | User;
//     text: string;
//     title: string;
// }

import { Profile } from "./user"

export interface Comment {
    id: string
    username: string
    avatar?: string
    text: string
    type: string
    context: string

}