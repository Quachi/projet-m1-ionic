import {Type} from './type';
import {User} from './user';
import {Category} from './category';
import {Group} from './group';
import {Tag} from './tag';

export interface Post {
    _id: string;
    title: string;
    description: string;
    attendees: Array<string | User>;
    user: string | User;
    types: Array<string | Type>;
    dateEvent: number;
    additionalInformation: string;
    tags: Array<string | Tag>;
    categories: Array<Category | string>;
    groupSize: number;
    medias: Array<string>;
    name: string;
    postal: string;
    timestamp: number;
    waitList: [User | string];
}

export interface SearchPost {
    title: string;
    description: string;
    host: string | User;
    types: Array<string | Type>;
    dateEvent: number;
    maxPlace: number;
    location: string;
    tags: Array<string>;
}

export interface AddPost {
    title: string;
    description: string;
    host: string | User;
    types: Array<string | Type>;
    dateEvent: number;
    maxPlace: number;
    location: string;
    additionalInformation?: string;
    tags: Array<string>;
}
