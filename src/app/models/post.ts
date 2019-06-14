import {Type} from './type';
import {User} from './user';

export default interface Post {
    _id: string;
    title: string;
    description: string;
    attendees: Array<string | User>;
    host: string | User;
    types: Array<string | Type>;
    dateEvent: number;
    maxPlace: number;
    location: string;
    additionalInformation: string;
    tags: Array<string>;
}
