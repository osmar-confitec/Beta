import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconteinerRefComponent } from './viewconteiner-ref.component';

describe('ViewconteinerRefComponent', () => {
  let component: ViewconteinerRefComponent;
  let fixture: ComponentFixture<ViewconteinerRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconteinerRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconteinerRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
