import {Injectable} from '@angular/core';
import {HttpService} from '../../../shared/services/http.service';
import {Type} from '../../../models/type';
import {Post} from '../../../models/post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private httpService: HttpService) {
    }

    searchPost(category?: string, tags?: string): Promise<Array<Post>> {
        return this.httpService.get<Array<Post>>(`/post/search`);
    }

    getPostById(id: string): Promise<Post> {
        return this.httpService.get<Post>(`/post/${id}`);
    }

    getAllType(): Promise<Array<Type>> {
        return this.httpService.get<Array<Type>>(`/type`);
    }

    addPost(post: FormData): Promise<any> {
        return this.httpService.post('/post/new', post);
    }
}
