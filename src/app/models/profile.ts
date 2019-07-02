import {Post} from './post';
import {Commentary} from './comment';

export interface Profile {
    _id?: string;
    id?: string;
    username: string;
    mail: string;
    avatar?: string;
    description?: string;
    posts: Array<Post>;
    historyPosts: Array<Post>;
    comments: Array<Commentary>;
    historyComments: Array<Commentary>;

}

