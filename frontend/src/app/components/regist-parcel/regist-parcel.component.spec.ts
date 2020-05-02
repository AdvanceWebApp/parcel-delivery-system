import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistParcelComponent } from './regist-parcel.component';

describe('RegistParcelComponent', () => {
  let component: RegistParcelComponent;
  let fixture: ComponentFixture<RegistParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
