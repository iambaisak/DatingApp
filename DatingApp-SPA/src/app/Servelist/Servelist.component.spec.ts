/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServelistComponent } from './Servelist.component';

describe('ServelistComponent', () => {
  let component: ServelistComponent;
  let fixture: ComponentFixture<ServelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
