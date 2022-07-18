import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfmValidationsComponent } from './tdfm-validations.component';

describe('TdfmValidationsComponent', () => {
  let component: TdfmValidationsComponent;
  let fixture: ComponentFixture<TdfmValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfmValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfmValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
