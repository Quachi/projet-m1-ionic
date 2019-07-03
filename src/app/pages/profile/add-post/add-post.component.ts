import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../post/service/post.service';
import {Type} from '../../../models/type';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Profile} from '../../../models/profile';
import {FileValidatorDirective} from '../../../directive/file-validator.directive';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
    types: Array<Type>;
    addPostForm: FormGroup;
    @Input() profile: Profile;
    today = new Date().toISOString();

    constructor(
        private postService: PostService,
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private router: Router
    ) {
        this.addPostForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            tags: ['', Validators.required],
            categories: ['', Validators.required],
            groupSize: ['', Validators.required],
            timestamp: ['', Validators.required],
            media: [[], [Validators.required, FileValidatorDirective]],
        });
    }

    ngOnInit() {
        this.postService.getAllType()
            .then(response => {
                this.types = response;
            });
    }


    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log(file);
            // this.addPostForm.get('media').setValue(file);
        }
    }

    submit() {
        // TODO: handle media data
        // TODO: confirm toast
        const timestamp = new Date(this.addPostForm.get('timestamp').value).getTime();
        this.addPostForm.patchValue({'timestamp': timestamp});
        const formData = new FormData();
        formData.append('images', this.addPostForm.get('media').value);
        const promise = new Promise(resolve => {
            Object.entries(this.addPostForm.getRawValue())
                .forEach((key) => {
                    formData.append(key[0], this.addPostForm.get(key[0]).value);
                });
            resolve();
        });

        promise.then(() => {
            this.postService.addPost(formData)
                .then(() => this.router.navigate(['/profile']));
        });
    }

    async closeModal() {
        await this.modalController.dismiss();
    }
}
