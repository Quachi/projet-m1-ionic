import {Type} from './type';
import {User} from './user';

export default interface Post {
    _id: string;
    name: string;
    title: string;
    description: string;
    attendees: Array<User>;
    host: User;
    types: Array<Type>;
    dateEvent: number;
    maxPlace: number;
}
