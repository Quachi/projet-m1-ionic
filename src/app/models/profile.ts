import Post from './post';
import {Commentary} from './comment';

export default interface Profile {
    _id: string;
    id: string;
    posts: Array<Post>;
    historyPosts: Array<Post>;
    comments: Array<Commentary>;
    historyComments: Array<Commentary>;
    username: string;
    mail: string;

}

