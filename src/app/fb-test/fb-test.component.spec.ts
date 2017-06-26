import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbTestComponent } from './fb-test.component';

describe('FbTestComponent', () => {
  let component: FbTestComponent;
  let fixture: ComponentFixture<FbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
