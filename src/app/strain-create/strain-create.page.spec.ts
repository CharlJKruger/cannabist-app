import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainCreatePage } from './strain-create.page';

describe('StrainCreatePage', () => {
  let component: StrainCreatePage;
  let fixture: ComponentFixture<StrainCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrainCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrainCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
