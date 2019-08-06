import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvCreatePage } from './env-create.page';

describe('EnvCreatePage', () => {
  let component: EnvCreatePage;
  let fixture: ComponentFixture<EnvCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
