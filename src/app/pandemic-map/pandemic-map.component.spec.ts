import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandemicMapComponent } from './pandemic-map.component';

describe('PandemicMapComponent', () => {
  let component: PandemicMapComponent;
  let fixture: ComponentFixture<PandemicMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandemicMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandemicMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
