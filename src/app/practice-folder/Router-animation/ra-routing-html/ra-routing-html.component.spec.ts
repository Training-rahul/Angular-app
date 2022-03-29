import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaRoutingHtmlComponent } from './ra-routing-html.component';

describe('RaRoutingHtmlComponent', () => {
  let component: RaRoutingHtmlComponent;
  let fixture: ComponentFixture<RaRoutingHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaRoutingHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaRoutingHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
