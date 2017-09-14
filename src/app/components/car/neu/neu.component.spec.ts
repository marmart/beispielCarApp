/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeuComponent } from './neu.component';

describe('NeuComponent', () => {
  let component: NeuComponent;
  let fixture: ComponentFixture<NeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});