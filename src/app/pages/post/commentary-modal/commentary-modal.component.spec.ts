import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryModalPage } from './commentary-modal.page';

describe('CommentaryModalPage', () => {
  let component: CommentaryModalPage;
  let fixture: ComponentFixture<CommentaryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaryModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
