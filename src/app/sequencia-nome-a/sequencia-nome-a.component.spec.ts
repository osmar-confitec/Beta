import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenciaNomeAComponent } from './sequencia-nome-a.component';

describe('SequenciaNomeAComponent', () => {
  let component: SequenciaNomeAComponent;
  let fixture: ComponentFixture<SequenciaNomeAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenciaNomeAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenciaNomeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
