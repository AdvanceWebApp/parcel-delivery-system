import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemAccessComponent } from './manage-system-access.component';

describe('ManageSystemAccessComponent', () => {
  let component: ManageSystemAccessComponent;
  let fixture: ComponentFixture<ManageSystemAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSystemAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSystemAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
