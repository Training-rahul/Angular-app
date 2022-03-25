import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHtmlComponent } from './routing-html.component';

describe('RoutingHtmlComponent', () => {
  let component: RoutingHtmlComponent;
  let fixture: ComponentFixture<RoutingHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
