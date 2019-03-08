import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchPage } from './search.page';

describe('SearchPage', () => {
  let component: ResultSearchPage;
  let fixture: ComponentFixture<ResultSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
