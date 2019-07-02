import {Type} from './type';
import {User} from './user';
import {Category} from './category';
import {Group} from './group';
import {Tag} from './tag';

export interface Post {
    id: string;
    title: string;
    description: string;
    attendees: Array<string | User>;
    user: string;
    types?: Array<string>;
    additionalInformation: string;
    tags: Array<string | Tag>;
    categories: Array<string>;
    groupSize: number;
    medias: Array<string>;
    name: string;
    postal: string;
    timestamp: number;
    waitList: Array<User | string>;
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
    name: string;
    description: string;
    types: Array<string | Type>;
    timestamp: number;
    groupSize: number;
    postal: string;
    additionalInformation?: string;
    tags: Array<string>;
}
