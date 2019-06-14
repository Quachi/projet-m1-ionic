import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTagsPage } from './post-tags.page';

describe('PostTagsPage', () => {
  let component: PostTagsPage;
  let fixture: ComponentFixture<PostTagsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTagsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
