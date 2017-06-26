import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurrentShiftComponent } from './my-current-shift.component';

describe('MyCurrentShiftComponent', () => {
  let component: MyCurrentShiftComponent;
  let fixture: ComponentFixture<MyCurrentShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCurrentShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCurrentShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
