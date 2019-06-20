import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasePostPage } from './showcase-post.page';

describe('ShowcasePostPage', () => {
  let component: ShowcasePostPage;
  let fixture: ComponentFixture<ShowcasePostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcasePostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcasePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
