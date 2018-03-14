import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenciaNomeBComponent } from './sequencia-nome-b.component';

describe('SequenciaNomeBComponent', () => {
  let component: SequenciaNomeBComponent;
  let fixture: ComponentFixture<SequenciaNomeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenciaNomeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenciaNomeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
