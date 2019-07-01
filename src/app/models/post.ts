// import {Type} from './type';
// import {User} from './user';

// export interface Post {
//     _id: string;
//     title: string;
//     description: string;
//     attendees: Array<string | User>;
//     host: string | User;
//     types: Array<string | Type>;
//     dateEvent: number;
//     maxPlace: number;
//     location: string;
//     additionalInformation: string;
//     tags: Array<string>;
// }

// export interface SearchPost {
//     title: string;
//     description: string;
//     host: string | User;
//     types: Array<string | Type>;
//     dateEvent: number;
//     maxPlace: number;
//     location: string;
//     tags: Array<string>;
// }

// export interface AddPost {
//     title: string;
//     description: string;
//     host: string | User;
//     types: Array<string | Type>;
//     dateEvent: number;
//     maxPlace: number;
//     location: string;
//     additionalInformation?: string;
//     tags: Array<string>;
// }

export interface Post {
    id: string,
    user: string,
    name: string,
    description?: string,
    medias?: [string],
    categories: [string],
    tags?: [string],
    groupSize: number,
    attendees: [string],
    wailist?: [string],
    unsub?: [string],
    timestamp: number,
    postal?: number
}