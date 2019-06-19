import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Commentary} from '../../../models/comment';
import MOCK_COMMENTARY from '../../../shared/MOCK/MOCK_COMMENTARY';
import {User} from '../../../models/user';

@Component({
    selector: 'app-commentary-modal',
    templateUrl: './commentary-modal.component.html',
    styleUrls: ['./commentary-modal.component.scss'],
})
export class CommentaryModalComponent implements OnInit {
    commentaries: Array<Commentary> = MOCK_COMMENTARY;
    user: User = {
        '_id': '123452',
        'username': 'kevin',
        'email': 'kquach@lecko.fr',
    };

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {

    }

    async closeModal() {
        const onClosedData = 'Wrapped Up!';
        await this.modalController.dismiss(onClosedData);
    }
}
