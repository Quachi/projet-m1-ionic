import {User} from './user';

export interface Commentary {
    _id: string;
    createDate: number;
    user: string | User;
    text: string;
    title: string;
}
