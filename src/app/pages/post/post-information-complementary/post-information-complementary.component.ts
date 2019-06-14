import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-information-complementary',
  templateUrl: './post-information-complementary.component.html',
  styleUrls: ['./post-information-complementary.component.scss'],
})
export class PostInformationComplementaryComponent implements OnInit {
  @Input() additionalInformation: string;
  constructor() { }

  ngOnInit() {}

}
