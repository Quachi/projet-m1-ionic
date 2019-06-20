import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInformationComplementaryPage } from './post-information-complementary.page';

describe('PostInformationComplementaryPage', () => {
  let component: PostInformationComplementaryPage;
  let fixture: ComponentFixture<PostInformationComplementaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInformationComplementaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInformationComplementaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
