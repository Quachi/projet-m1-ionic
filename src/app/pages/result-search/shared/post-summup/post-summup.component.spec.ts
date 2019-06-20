import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSummupPage } from './post-summup.page';

describe('PostSummupPage', () => {
  let component: PostSummupPage;
  let fixture: ComponentFixture<PostSummupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSummupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSummupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
