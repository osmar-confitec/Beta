import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputsgenerates2Component } from './inputsgenerates2.component';

describe('Inputsgenerates2Component', () => {
  let component: Inputsgenerates2Component;
  let fixture: ComponentFixture<Inputsgenerates2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inputsgenerates2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputsgenerates2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
