import {Post} from './post';
import {Commentary} from './comment';
import {Category} from './category';
import {Group} from './group';
import {User} from './user';
import {Tag} from './tag';

export interface Profile {
    _id?: string;
    categories: Array<Category | string>;
    description?: string;
    group: Array<Group | string>;
    groupSize: number;
    media: Array<string>;
    username: string;
    avatar?: string;
    posts: Array<Post>;
    historyPosts: Array<Post>;
    comments: Array<Commentary>;
    historyComments: Array<Commentary>;
    user: User | string;
    mail: string;
    username: string;
    postal: string;
    tags: Array<string | Tag>;
    timestamp: number;

}

