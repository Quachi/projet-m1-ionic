import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHeaderPage } from './post-header.page';

describe('PostHeaderPage', () => {
  let component: PostHeaderPage;
  let fixture: ComponentFixture<PostHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
