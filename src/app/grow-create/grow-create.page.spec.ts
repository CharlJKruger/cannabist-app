import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowCreatePage } from './grow-create.page';

describe('GrowCreatePage', () => {
  let component: GrowCreatePage;
  let fixture: ComponentFixture<GrowCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
