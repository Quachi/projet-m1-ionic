import {Injectable} from '@angular/core';
import {HttpService} from '../../../shared/services/http.service';
import {environment} from '../../../../environments/environment';
import {Post} from '../../../models/post';
import {Type} from '../../../models/type';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = environment.apiUrl;

    constructor(private httpService: HttpService) {
    }


    searchPost(category: string, tags: string): Promise<Array<Post>> {
        return this.httpService.get<Array<Post>>(`${this.apiUrl}/post/search`)
            .toPromise();
    }

    getPostById(id: string): Promise<Post> {
        return this.httpService.get<Post>(`${this.apiUrl}/post/${id}`)
            .toPromise();
    }

    getAllType(): Promise<Array<Type>> {
        return this.httpService.get<Array<Type>>(`${this.apiUrl}/type`)
            .toPromise();
    }
}
