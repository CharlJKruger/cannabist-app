import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStrainPage } from './search-strain.page';

describe('SearchStrainPage', () => {
  let component: SearchStrainPage;
  let fixture: ComponentFixture<SearchStrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
